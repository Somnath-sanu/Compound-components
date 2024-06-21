import { PropsWithChildren, createContext, useContext } from "react";

type PostCardContext = {
  post: Post;
};

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

function usePostCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCard");
  }
  return context;
}

type Post = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

type PostCardProps = PropsWithChildren & {
  post: Post;
};

export const PostCard = ({ post, children }: PostCardProps) => {
  return (
    <PostCardContext.Provider value={{ post }}>
      <div className="flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-2 text-white justify-center items-center mx-auto">
        {children}
      </div>
    </PostCardContext.Provider>
  );
};

PostCard.Title = function PostCardTitle() {
  const { post } = usePostCardContext();
  // console.log(post);

  return <h1 className="text-lg font-semibold"> {post.content}</h1>;
};

PostCard.Content = function PostCardContent() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error("usePostCardContext must be used within a PostCard");
  }
  const { post } = context;
  //? Using the same logic in every compound components -> makes code bulky and degrades readability ; thats why using custom hook for that

  return <p>{post.content}</p>;
};

PostCard.User = function PostCardUser() {
  const { post } = usePostCardContext();

  return <p className="text-sm text-neutral-400">By {post.user.name}</p>;
};

PostCard.Buttons = function PostCardButtons() {
  return (
    <div className="flex flex-row gap-2">
      <button>Read More</button>
      <button>Comments</button>
    </div>
  );
};
