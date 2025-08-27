import axios from "axios";
import { Job } from "@/types/JobTypes";

export async function fetchJobs() {
  try {
    const response = await axios.get(process.env.CACHE_CONNECT_API_URL || "", {
      headers: {
        Authorization: `Bearer ${process.env.CACHE_CONNECT_API_KEY}`,
      },
    });
    const jobs: Job[] = response.data.jobs;
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return "Something when wrong. Please check back later" as string;
  }
}
