export const articles: Record<string, string> = {
  "nextjs-nedir": "Next.js, React için bir framework'tür.",
  "react-dersleri": "React ile component yapısı öğrenilir.",
  "seo-ipuclari": "SEO için meta etiketleri önemlidir.",
};

export function getArticle(slug: string): string | null {
  return articles[slug] || null;
}
