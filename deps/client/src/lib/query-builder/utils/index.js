import { Equals } from '../lucene-syntax/Equals';
import { Field } from '../lucene-syntax/Field';
import { NotOperand } from '../lucene-syntax/NotOperand';
import { Operand } from '../lucene-syntax/Operand';
/**
 * Enum for common Operands
 *
 * @export
 * @enum {number}
 */
export var OPERAND;
(function (OPERAND) {
    OPERAND["OR"] = "OR";
    OPERAND["AND"] = "AND";
    OPERAND["NOT"] = "NOT";
})(OPERAND || (OPERAND = {}));
/**
 * This function removes extra spaces from a string.
 *
 * @export
 * @param {string} str
 * @return {*}  {string}
 */
export function sanitizeQuery(str) {
    return str.replace(/\s{2,}/g, ' ').trim();
}
/**
 * This function sanitizes a term by adding quotes if it contains spaces.
 * In lucene, a term with spaces should be enclosed in quotes.
 *
 * @export
 * @param {string} term
 * @return {*}  {string}
 */
export function sanitizePhrases(term) {
    return term.includes(' ') ? `"${term}"` : term;
}
/**
 * This function builds a term to be used in a lucene query.
 * We need to sanitize the term before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {string} term
 * @return {*}  {Equals}
 */
export function buildEquals(query, term) {
    const newQuery = query + sanitizePhrases(term);
    return new Equals(newQuery);
}
/**
 * This function builds a term to be used in a lucene query.
 * We need to sanitize the raw query before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {string} raw
 * @return {*}  {Equals}
 */
export function buildRawEquals(query, raw) {
    const newQuery = query + ` ${raw}`;
    return new Equals(sanitizeQuery(newQuery));
}
/**
 * This function builds a field to be used in a lucene query.
 * We need to format the field before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {string} field
 * @return {*}  {Field}
 */
export function buildField(query, field) {
    const newQuery = query + ` +${field}:`;
    return new Field(newQuery);
}
/**
 * This function builds an exclude field to be used in a lucene query.
 * We need to format the field before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {string} field
 * @return {*}  {Field}
 */
export function buildExcludeField(query, field) {
    const newQuery = query + ` -${field}:`;
    return new Field(newQuery);
}
/**
 * This function builds an operand to be used in a lucene query.
 * We need to format the operand before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {OPERAND} operand
 * @return {*}  {Operand}
 */
export function buildOperand(query, operand) {
    const newQuery = query + ` ${operand} `;
    return new Operand(newQuery);
}
/**
 * This function builds a NOT operand to be used in a lucene query.
 * We need to format the operand before adding it to the query.
 *
 * @export
 * @param {string} query
 * @return {*}  {NotOperand}
 */
export function buildNotOperand(query) {
    const newQuery = query + ` ${OPERAND.NOT} `;
    return new NotOperand(newQuery);
}
//# sourceMappingURL=index.js.map