// For now, we are not typing the functions in this file
/* eslint-disable @typescript-eslint/no-explicit-any */
export const graphqlToPageEntity = ({ page }) => {
    // If there is no page, return null
    if (!page) {
        return null;
    }
    const { layout, template, containers, urlContentMap, viewAs, ...pageAsset } = page;
    return {
        layout,
        template,
        viewAs,
        urlContentMap,
        page: pageAsset,
        containers: parseContainers(containers)
    };
};
const parseContainers = (containers = []) => {
    return containers.reduce((acc, container) => {
        const { path, identifier, containerStructures, containerContentlets, ...rest } = container;
        const key = (path || identifier);
        acc[key] = {
            containerStructures,
            container: {
                path,
                identifier,
                ...rest
            },
            contentlets: parseContentletsToUuidMap(containerContentlets)
        };
        return acc;
    }, {});
};
const parseContentletsToUuidMap = (containerContentlets) => {
    return containerContentlets.reduce((acc, containerContentlet) => {
        const { uuid, contentlets } = containerContentlet;
        // TODO: This is a temporary solution, we need to find a better way to handle this.
        acc[uuid] = contentlets.map(({ _map = {}, ...rest }) => {
            return {
                ..._map,
                ...rest
            };
        });
        return acc;
    }, {});
};
//# sourceMappingURL=transforms.js.map