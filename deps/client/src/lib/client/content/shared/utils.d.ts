/**
 * Sanitizes the query for the given content type.
 * It replaces the fields that are not contentType fields with the correct format.
 * Example: +field: -> +contentTypeVar.field:
 *
 *
 * @export
 * @param {string} query
 * @param {string} contentType
 * @return {*}  {string}
 */
export declare function sanitizeQueryForContentType(query: string, contentType: string): string;
