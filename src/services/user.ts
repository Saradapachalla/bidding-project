import { createHmac, randomBytes } from "node:crypto";
import JWT from "jsonwebtoken";
import { prismaClient } from "../lib/db";

const JWT_SECRET = "$uperM@n@123";

export interface CreateUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface CreateJobPayload {
  requirement: string;
  description: string;
  posterName: string;
  posterContact: string;
  lowestBid: number;
  bidsCount: number;
  expirationDate: Date;
}

export interface GetUserTokenPayload {
  email: string;
  password: string;
}

class UserService {
  private static generateHash(salt: string, password: string) {
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");
    return hashedPassword;
  }

  public static getUserById(id: string) {
    return prismaClient.user.findUnique({ where: { id } });
  }

  public static createUser(payload: CreateUserPayload) {
    const { firstName, lastName, email, password } = payload;

    const salt = randomBytes(32).toString("hex");
    const hashedPassword = UserService.generateHash(salt, password);

    return prismaClient.user.create({
      data: {
        firstName,
        lastName,
        email,
        salt,
        password: hashedPassword,
      },
    });
  }

  private static getUserByEmail(email: string) {
    return prismaClient.user.findUnique({ where: { email } });
  }

  public static async getUserToken(payload: GetUserTokenPayload) {
    const { email, password } = payload;
    const user = await UserService.getUserByEmail(email);
    if (!user) throw new Error("User not found");

    const userSalt = user.salt;
    const usersHashPassword = UserService.generateHash(userSalt, password);

    if (usersHashPassword !== user.password)
      throw new Error("Incorrect Password");

    // Gen Token
    const token = JWT.sign({ id: user.id, email: user.email }, JWT_SECRET);
    return token;
  }

  public static decodeJWTToken(token: string) {
    return JWT.verify(token, JWT_SECRET);
  }

  // Temporarily Jobs details are kept here 
  public static getJobById(id: string) {
    return prismaClient.job.findUnique({ where: { id } });
  }

  // public static getJobs() {
  //   return prismaClient.job.createMany({
  //     data: []
  //   })
  // }

  public static createJob(payload: CreateJobPayload) {
    const { requirement, description, posterName, posterContact } = payload;

    return prismaClient.job.create({
      data: {
        requirement, 
        description, 
        posterName, 
        posterContact
      },
    });
  }

}

export default UserService;