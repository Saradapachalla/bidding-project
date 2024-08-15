import JobService, { CreateJobPayload } from "../../services/job";

const queries = {
  getJobById: async (_: any, parameters: any, context: any) => {
    if (context && context.job) {
      const id = context.job.id;
      const job = await JobService.getJobById(id);
      return job;
    }
    throw new Error("Job details not found for requested job id!");
  },

  getJobs: async (_: any, parameters: any) => {
    const jobs = await JobService.getJobs()
    if (jobs) return jobs
    else throw new Error("Job details not found!");
  }
};

const mutations = {
  createJob: async (_: any, payload: CreateJobPayload) => {
    const res = await JobService.createJob(payload);
    return res.id;
  },
};

export const resolvers = { queries, mutations };