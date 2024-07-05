import { Content } from './content/content-api';
import { ErrorMessages } from './models';
function getHostURL(url) {
    try {
        return new URL(url);
    }
    catch (error) {
        return undefined;
    }
}
/**
 * `DotCmsClient` is a TypeScript class that provides methods to interact with the DotCMS REST API.
 * It requires a configuration object on instantiation, which includes the DotCMS URL, site ID, and authentication token.
 *
 * @class DotCmsClient
 *
 * @property {ClientConfig} config - The configuration object for the DotCMS client.
 *
 * @method constructor(config: ClientConfig) - Constructs a new instance of the DotCmsClient class.
 *
 * @method page.get(options: PageApiOptions): Promise<unknown> - Retrieves all the elements of any Page in your dotCMS system in JSON format.
 *
 * @method nav.get(options: NavApiOptions = { depth: 0, path: '/', languageId: 1 }): Promise<unknown> - Retrieves information about the dotCMS file and folder tree.
 *
 */
export class DotCmsClient {
    constructor(config = { dotcmsUrl: '', authToken: '', requestOptions: {}, siteId: '' }) {
        this.page = {
            /**
             * `page.get` is an asynchronous method of the `DotCmsClient` class that retrieves all the elements of any Page in your dotCMS system in JSON format.
             * It takes a `PageApiOptions` object as a parameter and returns a Promise that resolves to the response from the DotCMS API.
             *
             * The Page API enables you to retrieve all the elements of any Page in your dotCMS system.
             * The elements may be retrieved in JSON format.
             *
             * @link https://www.dotcms.com/docs/latest/page-rest-api-layout-as-a-service-laas
             * @async
             * @param {PageApiOptions} options - The options for the Page API call.
             * @returns {Promise<unknown>} - A Promise that resolves to the response from the DotCMS API.
             * @throws {Error} - Throws an error if the options are not valid.
             */
            get: async (options) => {
                this.validatePageOptions(options);
                const queryParamsObj = {};
                for (const [key, value] of Object.entries(options)) {
                    if (value === undefined || key === 'path' || key === 'siteId')
                        continue;
                    if (key === 'personaId') {
                        queryParamsObj['com.dotmarketing.persona.id'] = String(value);
                    }
                    else if (key === 'mode' && value) {
                        queryParamsObj['mode'] = String(value);
                    }
                    else {
                        queryParamsObj[key] = String(value);
                    }
                }
                const queryHostId = options.siteId ?? this.config.siteId ?? '';
                if (queryHostId) {
                    queryParamsObj['host_id'] = queryHostId;
                }
                const queryParams = new URLSearchParams(queryParamsObj).toString();
                const formattedPath = options.path.startsWith('/') ? options.path : `/${options.path}`;
                const url = `${this.config.dotcmsUrl}/api/v1/page/json${formattedPath}${queryParams ? `?${queryParams}` : ''}`;
                const response = await fetch(url, this.requestOptions);
                if (!response.ok) {
                    const error = {
                        status: response.status,
                        message: ErrorMessages[response.status] || response.statusText
                    };
                    console.error(error);
                    throw error;
                }
                return response.json();
            }
        };
        this.nav = {
            /**
             * `nav.get` is an asynchronous method of the `DotCmsClient` class that retrieves information about the dotCMS file and folder tree.
             * It takes a `NavApiOptions` object as a parameter (with default values) and returns a Promise that resolves to the response from the DotCMS API.
             *
             * The navigation REST API enables you to retrieve information about the dotCMS file and folder tree through REST API calls.
             * @link https://www.dotcms.com/docs/latest/navigation-rest-api
             * @async
             * @param {NavApiOptions} options - The options for the Nav API call. Defaults to `{ depth: 0, path: '/', languageId: 1 }`.
             * @returns {Promise<unknown>} - A Promise that resolves to the response from the DotCMS API.
             * @throws {Error} - Throws an error if the options are not valid.
             */
            get: async (options = { depth: 0, path: '/', languageId: 1 }) => {
                this.validateNavOptions(options);
                // Extract the 'path' from the options and prepare the rest as query parameters
                const { path, ...queryParamsOptions } = options;
                const queryParamsObj = {};
                Object.entries(queryParamsOptions).forEach(([key, value]) => {
                    if (value !== undefined) {
                        queryParamsObj[key] = String(value);
                    }
                });
                const queryParams = new URLSearchParams(queryParamsObj).toString();
                // Format the URL correctly depending on the 'path' value
                const formattedPath = path === '/' ? '/' : `/${path}`;
                const url = `${this.config.dotcmsUrl}/api/v1/nav${formattedPath}${queryParams ? `?${queryParams}` : ''}`;
                const response = await fetch(url, this.requestOptions);
                return response.json();
            }
        };
        if (!config.dotcmsUrl) {
            throw new Error("Invalid configuration - 'dotcmsUrl' is required");
        }
        const dotcmsHost = getHostURL(config.dotcmsUrl);
        if (!dotcmsHost) {
            throw new Error("Invalid configuration - 'dotcmsUrl' must be a valid URL");
        }
        if (!config.authToken) {
            throw new Error("Invalid configuration - 'authToken' is required");
        }
        this.config = {
            ...config,
            dotcmsUrl: dotcmsHost.origin
        };
        this.requestOptions = {
            ...this.config.requestOptions,
            headers: {
                Authorization: `Bearer ${this.config.authToken}`,
                ...this.config.requestOptions?.headers
            }
        };
        this.content = new Content(this.requestOptions, this.config.dotcmsUrl);
    }
    validatePageOptions(options) {
        if (!options.path) {
            throw new Error("The 'path' parameter is required for the Page API");
        }
    }
    validateNavOptions(options) {
        if (!options.path) {
            throw new Error("The 'path' parameter is required for the Nav API");
        }
    }
}
/**
 * `dotcmsClient` is an object that provides a method to initialize the DotCMS SDK client.
 * It has a single method `init` which takes a configuration object and returns an instance of the `DotCmsClient` class.
 *
 * @namespace dotcmsClient
 *
 * @method init(config: ClientConfig): DotCmsClient - Initializes the SDK client.
 */
export const dotcmsClient = {
    /**
     * `init` is a method of the `dotcmsClient` object that initializes the SDK client.
     * It takes a configuration object as a parameter and returns an instance of the `DotCmsClient` class.
     *
     * @method init
     * @param {ClientConfig} config - The configuration object for the DotCMS client.
     * @returns {DotCmsClient} - An instance of the {@link DotCmsClient} class.
     */
    init: (config) => {
        return new DotCmsClient(config);
    }
};
//# sourceMappingURL=sdk-js-client.js.map