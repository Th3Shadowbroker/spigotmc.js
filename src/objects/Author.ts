/**
 * Represents an author.
 */
export interface Author {   
    id: number;
    username: string;
    resource_count: number;
    identities: {
        github?: string;
        discord?: string;
        youtube?: string;
        aim?: string;
        windows_live?: string;
        icq?: string;
        yahoo_messenger?: string;
        skye?: string;
        google_talk?: string;
        facebook?: string;
        twitter?: string;
    };
    avatar: string;
}

export default Author;