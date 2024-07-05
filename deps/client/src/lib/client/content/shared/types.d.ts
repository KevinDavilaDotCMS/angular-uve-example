import { Equals } from '../../../query-builder/lucene-syntax';
import { QueryBuilder } from '../../../query-builder/sdk-query-builder';
export type SortBy = {
    field: string;
    order: 'asc' | 'desc';
};
export type BuildQuery = (qb: QueryBuilder) => Equals;
export interface ContentTypeMainFields {
    hostName: string;
    modDate: string;
    publishDate: string;
    title: string;
    baseType: string;
    inode: string;
    archived: boolean;
    ownerName: string;
    host: string;
    working: boolean;
    locked: boolean;
    stInode: string;
    contentType: string;
    live: boolean;
    owner: string;
    identifier: string;
    publishUserName: string;
    publishUser: string;
    languageId: number;
    creationDate: string;
    url: string;
    titleImage: string;
    modUserName: string;
    hasLiveVersion: boolean;
    folder: string;
    hasTitleImage: boolean;
    sortOrder: number;
    modUser: string;
    __icon__: string;
    contentTypeIcon: string;
    variant: string;
}
export type Contentlet<T> = T & ContentTypeMainFields;
export type OnFullfilled<T> = ((value: GetCollectionResponse<T>) => GetCollectionResponse<T> | PromiseLike<GetCollectionResponse<T>> | void) | undefined | null;
export type OnRejected = ((error: GetCollectionError) => GetCollectionError | PromiseLike<GetCollectionError> | void) | undefined | null;
export interface GetCollectionResponse<T> {
    contentlets: Contentlet<T>[];
    page: number;
    size: number;
    total: number;
    sortedBy?: SortBy[];
}
export interface GetCollectionRawResponse<T> {
    entity: {
        jsonObjectView: {
            contentlets: Contentlet<T>[];
        };
        resultsSize: number;
    };
}
export interface GetCollectionError {
    status: number;
    [key: string]: unknown;
}
