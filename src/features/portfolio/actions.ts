import { client } from "@/sanity/client";

export async function getProjects() {
    const query = `*[_type == "project"] {
        title,
        "slug": slug.current,
        category,
        image,
        description,
        tags,
        link,
        gradient
    }`;
    return client.fetch(query);
}

export async function getProjectBySlug(slug: string) {
    const query = `*[_type == "project" && slug.current == $slug][0] {
        title,
        "slug": slug.current,
        category,
        image,
        description,
        tags,
        link,
        gradient
    }`;
    return client.fetch(query, { slug });
}

export async function getAllProjectSlugs() {
    const query = `*[_type == "project"] { "slug": slug.current }`;
    return client.fetch(query);
}
