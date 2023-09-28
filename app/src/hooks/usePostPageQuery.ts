import { useInfiniteQuery } from "react-query";
import { getPosts } from "../data/get-posts";

const usePostPageQuery = () => {
  const { data, isLoading, isError, error, refetch, fetchNextPage } = useInfiniteQuery(
    ['getPosts', { kind: null, lastPostId: null }],
    ({ pageParam }) => getPosts(pageParam),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchIntervalInBackground: false,
      getNextPageParam: (lastPage, _) => {
        const posts = [...lastPage.values()];

        if (posts?.length) {
          const { kind, data: { id } } = posts[posts.length - 1];
          return {
            kind,
            lastPostId: id
          }
        }

        return { kind: null, lastPostId: null };
      },
      select: (data) => {
        if (!data.pages) return data;

        const posts = data.pages.flat();
        const postIds = posts.map(p => p.data.id);
        const uniquePosts = posts.filter((child, index) => !postIds.includes(child.data.id, index + 1));
        const pages = [uniquePosts];
        return {
          ...data,
          pages
        }
      }
    }
  );

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
    fetchNextPage
  }
}

export default usePostPageQuery;