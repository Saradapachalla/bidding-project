import UserService, { CreateUserPayload } from "../../services/user";
import JobService, { CreateJobPayload } from "../../services/job";

const queries = {
  getUserToken: async (
    _: any,
    payload: { email: string; password: string }
  ) => {
    const token = await UserService.getUserToken({
      email: payload.email,
      password: payload.password,
    });
    return token;
  },
  getCurrentLoggedInUser: async (_: any, parameters: any, context: any) => {
    if (context && context.user) {
      const id = context.user.id;
      const user = await UserService.getUserById(id);
      return user;
    }
    throw new Error("I dont know who are you");
  },
  getJobById: async (_: any, parameters: any, context: any) => {
    if (context && context.job) {
      const id = context.job.id;
      const job = await JobService.getJobById(id);
      return job;
    }
    throw new Error("Job details not found for requested job id!");
  },
  getJobs: async (_: any, parameters: any) => {
    const jobs = await JobService.getJobs();
    if (jobs) return jobs;
    else throw new Error("Job details not found!");
  },
};

const mutations = {
  createUser: async (_: any, payload: CreateUserPayload) => {
    const res = await UserService.createUser(payload);
    return res.id;
  },
  createJob: async (_: any, payload: CreateJobPayload) => {
    const res = await JobService.createJob(payload);
    return res.id;
  },
};

export const resolvers = { queries, mutations };
