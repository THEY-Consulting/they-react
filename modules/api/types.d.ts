export interface QueryMeta extends Record<string, unknown> {
    redirectToLocationIfUnauthorized?: string | boolean;
    headers?: Record<string, string> | (() => Record<string, string>) | (() => Promise<Record<string, string>>);
}
declare module '@tanstack/react-query' {
    interface Register {
        queryMeta: QueryMeta;
        mutationMeta: QueryMeta;
    }
}
