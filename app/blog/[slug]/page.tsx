import { notFound } from "next/navigation";
import { getArticle, articles } from "@/lib/articles";

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}
export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  await new Promise((res) => setTimeout(res, 1000)); // 1 saniye bekle
  const content = getArticle(params.slug);

  if (!content) notFound();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{params.slug.replaceAll("-", " ").toUpperCase()}</h1>
      <p>{content}</p>
    </div>
  );
}
