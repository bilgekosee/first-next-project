import { notFound } from "next/navigation";
import { getArticle } from "@/lib/articles";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const content = getArticle(params.slug);

  if (!content) notFound();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{params.slug.replaceAll("-", " ").toUpperCase()}</h1>
      <p>{content}</p>
    </div>
  );
}
