import { OnInit } from '@angular/core';
import { DynamicComponentEntity } from '../../models';
import { DotCMSPageAsset } from '../../models/dotcms.model';
import * as i0 from "@angular/core";
/**
 * `DotcmsLayoutComponent` is a class that represents the layout for a DotCMS page.
 *  It includes a `pageAsset` property that represents the DotCMS page asset and a `components` property that represents the dynamic components for the page.
 *
 * @export
 * @class DotcmsLayoutComponent
 */
export declare class DotcmsLayoutComponent implements OnInit {
    pageAsset: DotCMSPageAsset | null;
    components: Record<string, DynamicComponentEntity>;
    private readonly route;
    private readonly pageContextService;
    private readonly destroyRef$;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DotcmsLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DotcmsLayoutComponent, "dotcms-layout", never, { "pageAsset": { "alias": "pageAsset"; "required": true; }; "components": { "alias": "components"; "required": true; }; }, {}, never, never, true, never>;
}
//# sourceMappingURL=dotcms-layout.component.d.ts.map