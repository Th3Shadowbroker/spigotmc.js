import axios, {AxiosInstance, AxiosError} from 'axios';
import ResourceCategory from './objects/ResourceCategory';
import Resource from './objects/Resource';
import {mapToResource, mapToCategory, mapToUpdate, mapToAuthor} from './util/Mappings';
import ResourceUpdate from './objects/ResourceUpdate';
import Author from './objects/Author';

/**
 * A client wrapper for the Spigot XenforoResourceManagerAPI.
 */
export class Spigot {

    /**
     * The axios instance used to make requests.
     */
    private readonly _axios: AxiosInstance;

    /**
     * Constructor for the Spigot client.
     * @param baseUrl The base URL of the Spigot API.
     */
    constructor(baseUrl: string = "https://api.spigotmc.org/simple/0.2/index.php") {
        this._axios = axios.create({
            baseURL: baseUrl,
            headers: {
                'User-Agent': `SpigotMC.js/1.0`
            }
        });
    }

    /**
     * Get a specific resource by its ID.
     * @param resourceId The id of the resource.
     * @returns A promise resolving the resource. Resolves to undefined if the resource does not exist.
     */
    public async getResource(resourceId: number): Promise<Resource | undefined> {
        try {
            const response = await this._axios.get("", {
                params: {
                    action: "getResource",
                    id: resourceId
                }
            });

            return mapToResource(response.data);
        } catch (err: any) {
            if (err.isAxiosError && (err as AxiosError).response?.status === 404) {
                return undefined;
            }

            throw err;
        }
    }

    /**
     * Get a list of resources. The results are paginated.
     * @param categoryId The id of the category to get the resources from.
     * @param page The page.
     * @returns A promise resolving the resources.
     */
    public async getResources(categoryId?: number, page?: number): Promise<Resource[]> {
        try {
            const response = await this._axios.get("", {
                params: {
                    action: "listResources",
                    category: categoryId,
                    page: page || 1
                }
            });

            return response.data.map((r: any) => mapToResource(r));
        } catch (err: any) {
            throw err;
        }
    }

    /**
     * Get the resources of the given author. The results are paginated.
     * @param authorId The id of the author.
     * @param page The page.
     * @returns Resolves to a list of resources.
     */
    public async getResourcesByAuthor(authorId: number, page?: number): Promise<Resource[]> {
        try {
            const response = await this._axios.get("", {
                params: {
                    action: "getResourcesByAuthor",
                    id: authorId,
                    page: page || 1
                }
            });

            return response.data.map((r: any) => mapToResource(r));
        } catch (err) {
            throw err;
        }
    }

    /**
     * Get a list of all categories.
     * @returns A promise resolving to a list of categories.
     */
    public async getResourceCategories(): Promise<ResourceCategory[]> {
        try {
            const response = await this._axios.get("", {
                params: {
                    action: "listResourceCategories"
                }
            });

            return response.data.map((r: any) => mapToCategory(r));
        } catch (err) {
            throw err;
        }
    }

    /**
     * Get a specific resource update by its ID.
     * @param updateId The id of the update.
     * @returns A promise resolving the update. Resolves to undefined if the update does not exist.
     */
    public async getResourceUpdate(updateId: number): Promise<ResourceUpdate | undefined> {
        try {
            const response = await this._axios.get("", {
                params: {
                    action: "getResourceUpdate",
                    id: updateId
                }
            });

            return mapToUpdate(response.data);
        } catch (err: any) {
            if (err.isAxiosError && (err as AxiosError).response?.status === 404) {
                return undefined;
            }

            throw err;
        }
    }


    /**
     * Get a list of updates for a specific resource.
     * @param resourceId The id of the resource.
     * @param page The page.
     * @returns A promise resolving to a list of updates.
     */
    public async getResourceUpdates(resourceId: number, page?: number): Promise<ResourceUpdate[]> {
        try {
            const response = await this._axios.get("", {
                params: {
                    action: "getResourceUpdates",
                    id: resourceId,
                    page: page || 1
                }
            });

            return response.data.map((r: any) => mapToUpdate(r));
        } catch (err) {
            throw err;
        }
    }

    /**
     * Get a specific author.
     * @param authorId The id of the author.
     * @returns A promise resolving the author. Resolves to undefined if the author does not exist.
     */
    public async getAuthor(authorId: number): Promise<Author | undefined> {
        try {
            const response = await this._axios.get("", {
                params: {
                    action: "getAuthor",
                    id: authorId
                }
            });

            return mapToAuthor(response.data);
        } catch (err: any) {
            if (err.isAxiosError && (err as AxiosError).response?.status === 404) {
                return undefined;
            }

            throw err;
        }
    }

    /**
     * Find a specific author by name.
     * @param name The name of the author.
     * @returns A promise resolving the author. Resolves to undefined if the author does not exist.
     */
    public async findAuthor(name: string): Promise<Author | undefined> {
        try {
            const response = await this._axios.get("", {
                params: {
                    action: "findAuthor",
                    name: name
                }
            });

            return mapToAuthor(response.data);
        } catch (err: any) {
            if (err.isAxiosError && (err as AxiosError).response?.status === 404) {
                return undefined;
            }

            throw err;
        }
    }

}

export default Spigot;