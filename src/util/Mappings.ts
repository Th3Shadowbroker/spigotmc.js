import ResourceCategory from "../objects/ResourceCategory";
import ResourceUpdate from "../objects/ResourceUpdate";
import Resource from "../objects/Resource";
import Author from "../objects/Author";

/**
 * Maps the raw json result to typesafe objects.
 * @param json The raw json result.
 * @returns The mapped resource.
 */
function mapToResource(json: any): Resource {
    return {
        ...json,
        id: Number.parseInt(json["id"]),
        author: {
            ...json["author"],
            id:  Number.parseInt(json["author"]["id"]),
        },
        premium: {
            ...json["premium"],
            price: Number.parseFloat(json["premium"]["price"]),
        },
        stats: {
            ...json["stats"],
            downloads:  Number.parseInt(json["stats"]["downloads"]),
            updates: Number.parseInt(json["stats"]["updates"]),
            reviews: {
                unique: Number.parseInt(json["stats"]["reviews"]["unique"]),
                total: Number.parseInt(json["stats"]["reviews"]["total"]),
            },
            rating: Number.parseFloat(json["stats"]["rating"]),
        }
    } as Resource;
}

/**
 * Maps the raw json result to typesafe objects.
 * @param json The raw json result.
 * @returns The mapped resource.
 */
function mapToCategory(json: any): ResourceCategory {
    return {
        ...json,
        id: Number.parseInt(json["id"]),
    } as ResourceCategory;
}

/**
 * Maps the raw json result to typesafe objects.
 * @param json The raw json result.
 * @returns The mapped resource.
 */
function mapToUpdate(json: any): ResourceUpdate {
    return {
        ...json,
        id: Number.parseInt(json["id"]),
        resource_id: Number.parseInt(json["resource_id"])
    } as ResourceUpdate;
}

/**
 * Maps the raw json result to typesafe objects.
 * @param json The raw json result.
 * @returns The mapped resource.
 */
function mapToAuthor(json: any): Author {
    return {
        ...json,
        id: Number.parseInt(json["id"]),
        resource_count: Number.parseInt(json["resource_count"]),
    } as Author;
}

export {
    mapToResource,
    mapToCategory,
    mapToUpdate,
    mapToAuthor
};