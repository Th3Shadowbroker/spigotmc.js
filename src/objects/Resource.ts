/**
 * Represents a resource.
 */
 export interface Resource {
    id: number;
    title: string;
    tag: string;
    current_version?: string;
    native_minecraft_version?: string;
    supported_minecraft_versions: string[];
    icon_link: string;
    author: {
        id: number;
        username: string;
    };
    premium: {
        price: number;
        currency: string;
    };
    stats: {
        downloads: number;
        updates: number;
        reviews: {
            unique: number;
            total: number;
        };
        rating: number;
    };
    description: string;
}

export default Resource;