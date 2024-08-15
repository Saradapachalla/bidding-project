import { prismaClient } from "../lib/db";

export interface CreateJobPayload {
  requirement: string;
  description: string;
  posterName: string;
  posterContact: string;
  lowestBid: number;
  bidsCount: number;
  expirationDate: Date;
}

export  enum SortingOrder {
    ASC,
    DESC  
}

class JobService {
  public static getJobById(id: string) {
    return prismaClient.job.findUnique({ where: { id } });
  }

  public static getJobs() {
    return prismaClient.job.createMany({
      data: []
    })
  }

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

export default JobService;