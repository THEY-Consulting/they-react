export interface QueryMeta extends Record<string, unknown> {
    redirectToLocationIfUnauthorized?: string | boolean;
}
declare module '@tanstack/react-query' {
    interface Register {
        queryMeta: QueryMeta;
        mutationMeta: QueryMeta;
    }
}
