import axios from "axios";
import { Reddit } from "../models/home";

type GetPostData = { kind?: string | null, lastPostId?: string | null };

export const getPosts = (data?: GetPostData) =>
  axios
    .get(
      `https://www.reddit.com/.json?limit=35&raw_json=1&app=res${data?.lastPostId ? '&after=' + data?.kind + '_' + data?.lastPostId : ''}`
    )
    .then(res => (res.data as Reddit).data.children);