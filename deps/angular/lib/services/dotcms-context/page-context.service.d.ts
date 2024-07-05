import { DotCMSPageComponent, DotCMSPageContext } from '../../models';
import { DotCMSPageAsset } from '../../models/dotcms.model';
import * as i0 from "@angular/core";
export declare class PageContextService {
    private pageContext;
    get pageContextValue(): DotCMSPageContext;
    /**
     * Set the context
     *
     * @protected
     * @param {DotCMSPageAsset} value
     * @memberof DotcmsContextService
     */
    setContext(pageAsset: DotCMSPageAsset, components: DotCMSPageComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageContextService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PageContextService>;
}
//# sourceMappingURL=page-context.service.d.ts.map