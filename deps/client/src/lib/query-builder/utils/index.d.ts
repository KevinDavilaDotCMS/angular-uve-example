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
export declare enum OPERAND {
    OR = "OR",
    AND = "AND",
    NOT = "NOT"
}
/**
 * This function removes extra spaces from a string.
 *
 * @export
 * @param {string} str
 * @return {*}  {string}
 */
export declare function sanitizeQuery(str: string): string;
/**
 * This function sanitizes a term by adding quotes if it contains spaces.
 * In lucene, a term with spaces should be enclosed in quotes.
 *
 * @export
 * @param {string} term
 * @return {*}  {string}
 */
export declare function sanitizePhrases(term: string): string;
/**
 * This function builds a term to be used in a lucene query.
 * We need to sanitize the term before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {string} term
 * @return {*}  {Equals}
 */
export declare function buildEquals(query: string, term: string): Equals;
/**
 * This function builds a term to be used in a lucene query.
 * We need to sanitize the raw query before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {string} raw
 * @return {*}  {Equals}
 */
export declare function buildRawEquals(query: string, raw: string): Equals;
/**
 * This function builds a field to be used in a lucene query.
 * We need to format the field before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {string} field
 * @return {*}  {Field}
 */
export declare function buildField(query: string, field: string): Field;
/**
 * This function builds an exclude field to be used in a lucene query.
 * We need to format the field before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {string} field
 * @return {*}  {Field}
 */
export declare function buildExcludeField(query: string, field: string): Field;
/**
 * This function builds an operand to be used in a lucene query.
 * We need to format the operand before adding it to the query.
 *
 * @export
 * @param {string} query
 * @param {OPERAND} operand
 * @return {*}  {Operand}
 */
export declare function buildOperand(query: string, operand: OPERAND): Operand;
/**
 * This function builds a NOT operand to be used in a lucene query.
 * We need to format the operand before adding it to the query.
 *
 * @export
 * @param {string} query
 * @return {*}  {NotOperand}
 */
export declare function buildNotOperand(query: string): NotOperand;
