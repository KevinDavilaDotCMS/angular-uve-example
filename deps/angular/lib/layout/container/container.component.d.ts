import { OnChanges } from '@angular/core';
import { NoComponent } from '../../components/no-component/no-component.component';
import { DynamicComponentEntity } from '../../models';
import { DotCMSContainer, DotCMSContentlet } from '../../models/dotcms.model';
import * as i0 from "@angular/core";
interface DotContainer {
    acceptTypes: string;
    identifier: string;
    maxContentlets: number;
    uuid: string;
    variantId?: string;
}
export declare class ContainerComponent implements OnChanges {
    container: DotCMSContainer;
    private readonly pageContextService;
    protected readonly NoComponent: typeof NoComponent;
    protected readonly $isInsideEditor: import("@angular/core").WritableSignal<boolean>;
    protected componentsMap: Record<string, DynamicComponentEntity>;
    protected $contentlets: import("@angular/core").WritableSignal<DotCMSContentlet[]>;
    protected $dotContainer: import("@angular/core").WritableSignal<DotContainer | null>;
    protected $dotContainerAsString: import("@angular/core").Signal<string>;
    acceptTypes: string | null;
    identifier: string | null;
    maxContentlets: number | null;
    uuid: string | null;
    class: string | null;
    dotObject: string | null;
    testId: string;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerComponent, "dotcms-container", never, { "container": { "alias": "container"; "required": true; }; }, {}, never, never, true, never>;
}
export {};
//# sourceMappingURL=container.component.d.ts.map