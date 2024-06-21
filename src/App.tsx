import { PostCard } from "./components/PostCard";

export const HomePageScreen = () => {
  return (
    <>
      <PostCard
        post={{
          id: 1,
          title: "Hello, World!",
          content: "This is the first post on our new blog.",
          user: {
            id: 1,
            name: "John Doe",
          },
        }}
      >
        <PostCard.Title/>
        <PostCard.Content/>
        <PostCard.User/>
        <PostCard.Buttons/>
      </PostCard>
    </>
  );
};
