import { ApiResponse } from "../types";

export function createApiResponse<T>(
    succession: boolean,
    data?: T,
    message?: string,
    error?: string
): ApiResponse<T> {
    return {
        success: succession,
        data,  
        message,
        error
    };
}