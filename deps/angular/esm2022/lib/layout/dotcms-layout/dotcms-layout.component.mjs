/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, DestroyRef, Input, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { initEditor, isInsideEditor, updateNavigation } from '@dotcms/client';
import { PageContextService } from '../../services/dotcms-context/page-context.service';
import { RowComponent } from '../row/row.component';
import * as i0 from "@angular/core";
/**
 * `DotcmsLayoutComponent` is a class that represents the layout for a DotCMS page.
 *  It includes a `pageAsset` property that represents the DotCMS page asset and a `components` property that represents the dynamic components for the page.
 *
 * @export
 * @class DotcmsLayoutComponent
 */
export class DotcmsLayoutComponent {
    constructor() {
        this.pageAsset = null;
        this.route = inject(ActivatedRoute);
        this.pageContextService = inject(PageContextService);
        this.destroyRef$ = inject(DestroyRef);
    }
    ngOnInit() {
        this.route.url
            .pipe(takeUntilDestroyed(this.destroyRef$), filter(() => isInsideEditor()))
            .subscribe((urlSegments) => {
            const pathname = '/' + urlSegments.join('/');
            initEditor({ pathname });
            updateNavigation(pathname || '/');
        });
    }
    ngOnChanges() {
        //Each time the layout changes, we need to update the context
        if (this.pageAsset !== null) {
            this.pageContextService.setContext(this.pageAsset, this.components);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: DotcmsLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: DotcmsLayoutComponent, isStandalone: true, selector: "dotcms-layout", inputs: { pageAsset: "pageAsset", components: "components" }, usesOnChanges: true, ngImport: i0, template: `@for (row of this.pageAsset?.layout?.body?.rows; track $index) {
        <dotcms-row [row]="row" />
    }`, isInline: true, styles: [":host{display:block}\n"], dependencies: [{ kind: "component", type: RowComponent, selector: "dotcms-row", inputs: ["row"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: DotcmsLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dotcms-layout', standalone: true, imports: [RowComponent], template: `@for (row of this.pageAsset?.layout?.body?.rows; track $index) {
        <dotcms-row [row]="row" />
    }`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:block}\n"] }]
        }], propDecorators: { pageAsset: [{
                type: Input,
                args: [{ required: true }]
            }], components: [{
                type: Input,
                args: [{ required: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90Y21zLWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Nkay9hbmd1bGFyL3NyYy9saWIvbGF5b3V0L2RvdGNtcy1sYXlvdXQvZG90Y21zLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFDSCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXBEOzs7Ozs7R0FNRztBQVdILE1BQU0sT0FBTyxxQkFBcUI7SUFWbEM7UUFXK0IsY0FBUyxHQUEyQixJQUFJLENBQUM7UUFHbkQsVUFBSyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvQix1QkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoRCxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztLQXNCckQ7SUFwQkcsUUFBUTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzthQUNULElBQUksQ0FDRCxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ3BDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUNqQzthQUNBLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sUUFBUSxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTdDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDekIsZ0JBQWdCLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELFdBQVc7UUFDUCw2REFBNkQ7UUFDN0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEUsQ0FBQztJQUNMLENBQUM7OEdBM0JRLHFCQUFxQjtrR0FBckIscUJBQXFCLDRKQU5wQjs7TUFFUixnR0FIUSxZQUFZOzsyRkFPYixxQkFBcUI7a0JBVmpDLFNBQVM7K0JBQ0ksZUFBZSxjQUNiLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQyxZQUNiOztNQUVSLG1CQUVlLHVCQUF1QixDQUFDLE1BQU07OEJBR3BCLFNBQVM7c0JBQW5DLEtBQUs7dUJBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO2dCQUNFLFVBQVU7c0JBQXBDLEtBQUs7dUJBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHtcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgICBDb21wb25lbnQsXG4gICAgRGVzdHJveVJlZixcbiAgICBJbnB1dCxcbiAgICBPbkluaXQsXG4gICAgaW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGluaXRFZGl0b3IsIGlzSW5zaWRlRWRpdG9yLCB1cGRhdGVOYXZpZ2F0aW9uIH0gZnJvbSAnQGRvdGNtcy9jbGllbnQnO1xuXG5pbXBvcnQgeyBEeW5hbWljQ29tcG9uZW50RW50aXR5IH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IERvdENNU1BhZ2VBc3NldCB9IGZyb20gJy4uLy4uL21vZGVscy9kb3RjbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZG90Y21zLWNvbnRleHQvcGFnZS1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vcm93L3Jvdy5jb21wb25lbnQnO1xuXG4vKipcbiAqIGBEb3RjbXNMYXlvdXRDb21wb25lbnRgIGlzIGEgY2xhc3MgdGhhdCByZXByZXNlbnRzIHRoZSBsYXlvdXQgZm9yIGEgRG90Q01TIHBhZ2UuXG4gKiAgSXQgaW5jbHVkZXMgYSBgcGFnZUFzc2V0YCBwcm9wZXJ0eSB0aGF0IHJlcHJlc2VudHMgdGhlIERvdENNUyBwYWdlIGFzc2V0IGFuZCBhIGBjb21wb25lbnRzYCBwcm9wZXJ0eSB0aGF0IHJlcHJlc2VudHMgdGhlIGR5bmFtaWMgY29tcG9uZW50cyBmb3IgdGhlIHBhZ2UuXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIERvdGNtc0xheW91dENvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RvdGNtcy1sYXlvdXQnLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW1Jvd0NvbXBvbmVudF0sXG4gICAgdGVtcGxhdGU6IGBAZm9yIChyb3cgb2YgdGhpcy5wYWdlQXNzZXQ/LmxheW91dD8uYm9keT8ucm93czsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgIDxkb3RjbXMtcm93IFtyb3ddPVwicm93XCIgLz5cbiAgICB9YCxcbiAgICBzdHlsZVVybDogJy4vZG90Y21zLWxheW91dC5jb21wb25lbnQuY3NzJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEb3RjbXNMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCh7IHJlcXVpcmVkOiB0cnVlIH0pIHBhZ2VBc3NldDogRG90Q01TUGFnZUFzc2V0IHwgbnVsbCA9IG51bGw7XG4gICAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSkgY29tcG9uZW50cyE6IFJlY29yZDxzdHJpbmcsIER5bmFtaWNDb21wb25lbnRFbnRpdHk+O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZSA9IGluamVjdChBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBwYWdlQ29udGV4dFNlcnZpY2UgPSBpbmplY3QoUGFnZUNvbnRleHRTZXJ2aWNlKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3lSZWYkID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUudXJsXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95UmVmJCksXG4gICAgICAgICAgICAgICAgZmlsdGVyKCgpID0+IGlzSW5zaWRlRWRpdG9yKCkpXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh1cmxTZWdtZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gJy8nICsgdXJsU2VnbWVudHMuam9pbignLycpO1xuXG4gICAgICAgICAgICAgICAgaW5pdEVkaXRvcih7IHBhdGhuYW1lIH0pO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU5hdmlnYXRpb24ocGF0aG5hbWUgfHwgJy8nKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICAvL0VhY2ggdGltZSB0aGUgbGF5b3V0IGNoYW5nZXMsIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBjb250ZXh0XG4gICAgICAgIGlmICh0aGlzLnBhZ2VBc3NldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wYWdlQ29udGV4dFNlcnZpY2Uuc2V0Q29udGV4dCh0aGlzLnBhZ2VBc3NldCwgdGhpcy5jb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==