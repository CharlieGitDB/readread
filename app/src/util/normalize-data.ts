import { Post } from "../models/post";

export const normalizeData = (data?: Post[]) => {
    if (!data) return [];

    const [_, ...posts] = data;

    return posts.map(p => p.data.children.map(c => c)).flat();
}