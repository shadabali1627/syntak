export interface BlogPost {
    slug: string;
    title: string;
    excerpt?: string;
    content?: any; // PortableText content
    date: string;
    author: string;
    category?: string;
    imageUrl?: string;
    mainImage?: any;
    readTime?: string;
}