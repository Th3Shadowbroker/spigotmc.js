/**
 * Represents a resource update.
 */
interface ResourceUpdate {
    id: number;
    resource_id: number;
    title: string;
    message: string;
}

export default ResourceUpdate;