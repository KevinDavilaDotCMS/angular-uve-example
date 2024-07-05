export const getPageRequestParams = ({ path = '', params = {} }) => {
    const dotMarketingPersonaId = params?.['com.dotmarketing.persona.id'] || '';
    const { language_id = 1, mode = '', variantName = '', personaId } = params;
    return {
        path,
        mode,
        language_id,
        variantName,
        personaId: personaId || dotMarketingPersonaId
    };
};
//# sourceMappingURL=common-utils.js.map