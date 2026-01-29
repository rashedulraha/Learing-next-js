import { FetchPostData } from "./types";

export default async function FetchingData() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  console.log(posts);

  return (
    <ul>
      {posts.map((post: FetchPostData) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
