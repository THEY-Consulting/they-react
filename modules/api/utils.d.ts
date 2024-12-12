import { QueryFunctionContext } from '@tanstack/react-query';
/**
 * Unfortunately, TanStack does not directly expose the http status code.
 * That's why we are using the error's message to see if the error is a
 * 404 Not Found error.
 */
export declare const isNotFoundError: ({ message }: Error) => boolean;
/**
 * Unfortunately, TanStack does not directly expose the http status code.
 * That's why we are using the error's message to see if the error is a
 * 401 Unauthorized error.
 */
export declare const isUnauthorizedError: ({ message }: Error) => boolean;
/**
 * checkResponseErrors is responsible for analyzing a `Response` object from the `fetch`
 * API and handling specific HTTP status codes errors.
 * Depending on the nature of the error the function throws different errors.
 * @param response Response object
 */
export declare const checkResponseErrors: (response: Response) => Promise<void>;
/**
 * Generate a function that fetches a list of items from the API.
 * The fetch call uses GET.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to fetch the data.
 */
export declare const generateFindMethod: <T>(url: string, host?: string) => (context: QueryFunctionContext) => Promise<T[]>;
/**
 * Generate a function that fetches a single item from the API.
 * The fetch call uses GET.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to fetch an item with the given id.
 */
export declare const generateGetMethod: <T>(url: string, host?: string) => (context: QueryFunctionContext) => Promise<T>;
/**
 * Generate a function that creates a new item in the API.
 * The fetch call uses POST.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to create a new item.
 */
export declare const generateCreateMethod: <T>(url: string, host?: string) => (data: Partial<T>) => Promise<T>;
/**
 * Generate a function that updates an item in the API.
 * The fetch call uses PATCH.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to update an item.
 */
export declare const generateUpdateMethod: <T>(url: string, host?: string) => (id: string, data: Partial<T>) => Promise<T>;
/**
 * Generate a function that deletes an item in the API.
 * The fetch call uses DELETE.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to delete an item.
 */
export declare const generateDeleteMethod: <T>(url: string, host?: string) => (id: string) => Promise<T>;
