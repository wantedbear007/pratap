import { apiGet } from "./client";
import type { BlogApiResponse, Blog, BlogSingleApiResponse } from "@/types/blog.t";

export async function fetchBlogs(limit = 10): Promise<BlogApiResponse> {
  return apiGet<BlogApiResponse>(`/blogs?limit=${limit}`);
}

export async function fetchBlog(id: string): Promise<Blog> {
  const res = await apiGet<BlogSingleApiResponse>(`/blogs/${id}`);
  return res.data;
}
