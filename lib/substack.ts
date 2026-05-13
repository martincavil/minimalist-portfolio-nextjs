export interface Post {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  image: string;
}

export function parseRSS(xml: string): Post[] {
  const posts: Post[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    const title =
      item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ||
      item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ||
      "";

    const link =
      item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ||
      item.match(/<guid[^>]*>([\s\S]*?)<\/guid>/)?.[1] ||
      "";

    const rawDescription =
      item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] ||
      item.match(/<description>([\s\S]*?)<\/description>/)?.[1] ||
      "";

    const description = rawDescription
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 200);

    const pubDate = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] || "";

    const image =
      item.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ||
      item.match(/<media:content[^>]+url="([^"]+)"/)?.[1] ||
      item.match(/<media:thumbnail[^>]+url="([^"]+)"/)?.[1] ||
      "";

    if (title && link) {
      posts.push({ title: title.trim(), link: link.trim(), description, pubDate, image });
    }
  }

  return posts;
}

export async function fetchSubstackPosts(): Promise<Post[]> {
  const res = await fetch("https://martincvl.substack.com/feed", {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-bot/1.0)" },
  });
  if (!res.ok) return [];
  const xml = await res.text();
  return parseRSS(xml);
}

export function formatDate(pubDate: string, locale: string): string {
  if (!pubDate) return "";
  const date = new Date(pubDate);
  if (isNaN(date.getTime())) return pubDate;
  return date.toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
