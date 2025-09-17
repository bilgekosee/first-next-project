import { notFound } from "next/navigation";
import { getPostById, getAllPosts } from "@/lib/api";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({ slug: post.id.toString() }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostById(params.slug);

  if (!post) notFound();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
