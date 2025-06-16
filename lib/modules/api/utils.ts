import { QueryFunctionContext, QueryKey } from '@tanstack/react-query';
import './types';
import { QueryMeta } from './types';

/**
 * Unfortunately, TanStack does not directly expose the http status code.
 * That's why we are using the error's message to see if the error is a
 * 404 Not Found error.
 */
export const isNotFoundError = ({ message }: Error) => message.includes('404');

/**
 * Unfortunately, TanStack does not directly expose the http status code.
 * That's why we are using the error's message to see if the error is a
 * 401 Unauthorized error.
 */
export const isUnauthorizedError = ({ message }: Error) => message.includes('401');

/**
 * checkResponseErrors is responsible for analyzing a `Response` object from the `fetch`
 * API and handling specific HTTP status codes errors.
 * Depending on the nature of the error the function throws different errors.
 * @param response Response object
 * @param redirectToLocationIfUnauthorized If set, redirects to the given URL on 401 Unauthorized
 */
export const checkResponseErrors = async (
  response: Response,
  redirectToLocationIfUnauthorized?: string | boolean
) => {
  if (response.status === 401) {
    if (redirectToLocationIfUnauthorized) {
      // store the current URL to redirect back to it after successful login
      localStorage.setItem('from', window.location.href);
      if (redirectToLocationIfUnauthorized === true) {
        // use best guess for login URL
        window.location.href = '/login';
      } else {
        window.location.href = redirectToLocationIfUnauthorized;
      }
    }

    throw new Error(`${response.status} ${response.statusText}`);
  }

  if (response.status === 400) {
    throw await response.json().then((errorBody) => errorBody.error);
  }
  if (response.status === 409) {
    throw await response.json().then((errorBody) => errorBody.error);
  }
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
  }
};

/**
 * getUrlWithQuery generates a full URL, including both path parameters
 * and query string based on the provided arguments.
 */
const getUrlWithQuery = (url: string, queryKey: QueryKey, apiUrl?: string): URL => {
  const [, ...args] = queryKey;
  const definedArgs = args.filter((arg) => arg !== undefined);

  // This loop replaces any path parameters in the `url` (formatted with colons,
  // like `:id`) with actual values from `definedArgs`.
  let urlWithParams = url;
  while (urlWithParams.includes(':') && definedArgs.length > 0) {
    const pathParam = definedArgs.shift() as string;
    urlWithParams = urlWithParams.replace(/:\w*/, pathParam);
  }

  //`filter` is expected to be an object representing query parameters.
  // `removeUndefined` is called to clean up this object, filtering out undefined values.
  const filter = definedArgs.at(0);
  const query = new URLSearchParams(removeUndefined(filter as Record<string, string | undefined>)).toString();
  const urlWithQuery = query ? `${urlWithParams}?${query}` : urlWithParams;
  return new URL(urlWithQuery, apiUrl);
};

const removeUndefined = (params: Record<string, string | undefined>): Record<string, string> => {
  // no idea why but using Object.entries without spreading params first seems to touch
  // the original object and trigger a re-render in react-query o.0
  return Object.fromEntries(Object.entries({ ...params }).filter(notUndefinedEntry));
};

/**
/* notUndefinedEntry is a type guard that returns true if
/* the value in a [key value] pair is not undefined.
*/
const notUndefinedEntry = <T>(entry: [string, T | undefined]): entry is [string, T] => {
  return entry[1] !== undefined;
};

const getHeaders = async (meta?: QueryMeta) => {
  if (typeof meta?.headers === 'function') {
    return (await meta?.headers()) ?? {};
  }
  return meta?.headers ?? {};
};

/**
 * Generate a function that fetches a list of items from the API.
 * The fetch call uses GET.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to fetch the data.
 */
export const generateFindMethod = <T>(url: string, host?: string) => {
  return async (context: QueryFunctionContext): Promise<T[]> => {
    const urlWithQuery = getUrlWithQuery(url, context.queryKey, host);
    const response = await fetch(urlWithQuery, {
      method: 'GET',
      credentials: 'include',
      redirect: 'error',
      headers: await getHeaders(context.meta),
    });

    await checkResponseErrors(response, context.meta?.redirectToLocationIfUnauthorized);

    return await response.json();
  };
};

/**
 * Generate a function that fetches a single item from the API.
 * The fetch call uses GET.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to fetch an item with the given id.
 */
export const generateGetMethod = <T>(url: string, host?: string) => {
  return async (context: QueryFunctionContext): Promise<T> => {
    const [, id] = context.queryKey;
    const response = await fetch(new URL(`${url}/${id}`, host), {
      method: 'GET',
      credentials: 'include',
      redirect: 'error',
      headers: await getHeaders(context.meta),
    });

    await checkResponseErrors(response, context.meta?.redirectToLocationIfUnauthorized);

    return await response.json();
  };
};

/**
 * Generate a function that creates a new item in the API.
 * The fetch call uses POST.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to create a new item.
 */
export const generateCreateMethod = <T>(url: string, host?: string) => {
  return async (data: Partial<T>, meta?: QueryMeta): Promise<T> => {
    const response = await fetch(new URL(url, host), {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(await getHeaders(meta)),
      },
      body: JSON.stringify(data),
    });

    await checkResponseErrors(response, meta?.redirectToLocationIfUnauthorized);

    return await response.json();
  };
};

/**
 * Generate a function that updates an item in the API.
 * The fetch call uses PATCH.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to update an item.
 */
export const generateUpdateMethod = <T>(url: string, host?: string) => {
  return async (id: string, data: Partial<T>, meta?: QueryMeta): Promise<T> => {
    const response = await fetch(new URL(`${url}/${id}`, host), {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(await getHeaders(meta)),
      },
      body: JSON.stringify(data),
    });

    await checkResponseErrors(response, meta?.redirectToLocationIfUnauthorized);

    return await response.json();
  };
};

/**
 * Generate a function that deletes an item in the API.
 * The fetch call uses DELETE.
 *
 * @param url The URL to fetch from.
 * @param host The host domain to fetch from.
 * @returns A function that can be used to delete an item.
 */
export const generateDeleteMethod = <T>(url: string, host?: string) => {
  return async (id: string, meta?: QueryMeta): Promise<T> => {
    const response = await fetch(new URL(`${url}/${id}`, host), {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(await getHeaders(meta)),
      },
    });

    await checkResponseErrors(response, meta?.redirectToLocationIfUnauthorized);

    return await response.json();
  };
};

/**
 * Generate a function that submits a form to the API.
 * The fetch call uses POST.
 *
 * @param url The URL to send the form data to.
 * @param host The host domain to send the form data to.
 * @returns A function that can be used to submit a form.
 */
export const generateFormMethod = <T>(url: string, host?: string) => {
  return async (data: Partial<T>, meta?: QueryMeta): Promise<T> => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    const response = await fetch(new URL(url, host), {
      method: 'POST',
      credentials: 'include',
      body: formData,
      headers: await getHeaders(meta),
    });

    await checkResponseErrors(response, meta?.redirectToLocationIfUnauthorized);

    return await response.json();
  };
};

/**
 * Generate a function that logs in a user.
 * The fetch call uses a form POST.
 *
 * @param url The URL to send the form data to.
 * @param host The host domain to send the form data to.
 * @param hasResponseBody Whether the login method should expect a json body in the response.
 * @returns A function that can be used to log in a user.
 */
export const generateLoginMethod = <T>(url: string, host?: string, hasResponseBody = true) => {
  return async (data: Partial<T>): Promise<T | void> => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    const response = await fetch(new URL(url, host), {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });

    await checkResponseErrors(response, false);

    if (hasResponseBody) {
      return await response.json();
    }
  };
};
