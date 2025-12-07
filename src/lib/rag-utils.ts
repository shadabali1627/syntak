import { syntakData } from './syntak-data';

export function getContext(query: string): string {
    const lowerQuery = query.toLowerCase();

    // Simple keyword matching
    const relevantChunks = syntakData.filter(item => {
        const contentLower = item.content.toLowerCase();
        const categoryLower = item.category.toLowerCase();

        // Check if query words appear in content or category
        const keywords = lowerQuery.split(' ').filter(word => word.length > 3);

        return keywords.some(keyword =>
            contentLower.includes(keyword) || categoryLower.includes(keyword)
        );
    });

    // If no specific match, returns generic company info + services as fallback context
    if (relevantChunks.length === 0) {
        return syntakData
            .filter(item => item.id === 'company-info' || item.id === 'services-web-dev')
            .map(item => item.content)
            .join('\n\n');
    }

    // Join the relevant content
    return relevantChunks.map(item => item.content).join('\n\n');
}
