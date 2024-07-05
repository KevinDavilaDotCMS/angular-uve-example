interface PageRequestParamsProps {
    path: string;
    params: {
        [key: string]: any;
    } | undefined;
}
export declare const getPageRequestParams: ({ path, params }: PageRequestParamsProps) => {
    path: string;
    mode: any;
    language_id: any;
    variantName: any;
    personaId: any;
};
export {};
