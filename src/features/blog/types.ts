export interface BlogPost {
    slug: string;
    title: string;
    excerpt?: string;
    content?: any; // Changed from string to any for PortableText
    date: string;
    author: string;
    category?: string;
    imageUrl?: string; // <--- NEW FIELD
}