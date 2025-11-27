import { client } from "@/sanity/client";
import { BlogPost } from "./types";

// 1. Fetch List for Public Blog Page
export async function getBlogPosts(): Promise<BlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "date": publishedAt,
    author,
    excerpt,
    "imageUrl": mainImage.asset->url,
    "category": "Tech" 
  }`;

  const posts = await client.fetch(query);

  return posts.map((post: any) => ({
    ...post,
    date: post.date ? new Date(post.date).toLocaleDateString() : "Just now",
    readTime: "5 min read",
    category: post.category || "General",
  }));
}

// 2. Fetch Single Post for Article Page
export async function getBlogPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "date": publishedAt,
    author,
    excerpt,
    body,
    "imageUrl": mainImage.asset->url,
    "category": "Tech"
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) return null;

  return {
    ...post,
    date: post.date ? new Date(post.date).toLocaleDateString() : "Just now",
  };
}

// 3. Fetch List for Admin Dashboard Table
export async function getAdminPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "createdAt": _createdAt,
    "publishedAt": publishedAt,
    "author": author
  }`;

  const posts = await client.fetch(query);

  return posts.map((post: any) => ({
    id: post._id,
    title: post.title,
    slug: post.slug,
    // Logic: If it has a published date, it's Published. Otherwise it's a Draft.
    status: post.publishedAt ? "Published" : "Draft",
    date: new Date(post.publishedAt || post.createdAt).toLocaleDateString(),
    // Sanity doesn't track views by default, so we simulate this for the UI
    views: Math.floor(Math.random() * 2000) + 500,
  }));
}