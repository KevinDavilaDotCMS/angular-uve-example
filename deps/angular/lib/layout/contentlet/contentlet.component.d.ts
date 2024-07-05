import { OnChanges } from '@angular/core';
import { DotCMSContentlet } from '../../models';
import * as i0 from "@angular/core";
export declare class ContentletComponent implements OnChanges {
    contentlet: DotCMSContentlet;
    container: string;
    identifier: string | null;
    baseType: string | null;
    title: string | null;
    inode: string | null;
    dotType: string | null;
    dotContainer: string | null;
    numberOfPages: string | null;
    dotContent: string | null;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContentletComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContentletComponent, "dotcms-contentlet-wrapper", never, { "contentlet": { "alias": "contentlet"; "required": true; }; "container": { "alias": "container"; "required": false; }; }, {}, never, ["*"], true, never>;
}
//# sourceMappingURL=contentlet.component.d.ts.map