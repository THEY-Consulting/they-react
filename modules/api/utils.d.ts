import { QueryFunctionContext } from '@tanstack/react-query';
import { QueryMeta } from './types';
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
 * @param redirectToLocationIfUnauthorized If set, redirects to the given URL on 401 Unauthorized
 */
export declare const checkResponseErrors: (response: Response, redirectToLocationIfUnauthorized?: string | boolean) => Promise<void>;
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
export declare const generateCreateMethod: <T>(url: string, host?: string) => (data: Partial<T>, meta?: QueryMeta) => Promise<T>;
/**
 * Generate a function that updates an item in the API.
 * The fetch call uses PATCH.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to update an item.
 */
export declare const generateUpdateMethod: <T>(url: string, host?: string) => (id: string, data: Partial<T>, meta?: QueryMeta) => Promise<T>;
/**
 * Generate a function that deletes an item in the API.
 * The fetch call uses DELETE.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to delete an item.
 */
export declare const generateDeleteMethod: <T>(url: string, host?: string) => (id: string, meta?: QueryMeta) => Promise<T>;
/**
 * Generate a function that submits a form to the API.
 * The fetch call uses POST.
 *
 * @param url The URL to send the form data to.
 * @param host The host domain to send the form data to.
 * @returns A function that can be used to submit a form.
 */
export declare const generateFormMethod: <T>(url: string, host?: string) => (data: Partial<T>, meta?: QueryMeta) => Promise<T>;
/**
 * Generate a function that logs in a user.
 * The fetch call uses a form POST.
 *
 * @param url The URL to send the form data to.
 * @param host The host domain to send the form data to.
 * @param hasResponseBody Whether the login method should expect a json body in the response.
 * @returns A function that can be used to log in a user.
 */
export declare const generateLoginMethod: <T>(url: string, host?: string, hasResponseBody?: boolean) => (data: Partial<T>) => Promise<T | void>;
