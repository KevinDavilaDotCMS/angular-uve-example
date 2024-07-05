import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * This is part of the Angular SDK.
 * This is a component for the `NoComponentComponent` component.
 */
export class NoComponent {
    constructor() {
        this.testId = 'no-component';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: NoComponent, isStandalone: true, selector: "dotcms-no-component", inputs: { contentlet: "contentlet" }, host: { properties: { "attr.data-testid": "this.testId" } }, ngImport: i0, template: `No Component for {{ contentlet.contentType }}`, isInline: true, styles: [":host{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: NoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dotcms-no-component', standalone: true, template: `No Component for {{ contentlet.contentType }}`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:block}\n"] }]
        }], propDecorators: { contentlet: [{
                type: Input
            }], testId: [{
                type: HostBinding,
                args: ['attr.data-testid']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc2RrL2FuZ3VsYXIvc3JjL2xpYi9jb21wb25lbnRzL25vLWNvbXBvbmVudC9uby1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJdkY7OztHQUdHO0FBUUgsTUFBTSxPQUFPLFdBQVc7SUFQeEI7UUFTcUMsV0FBTSxHQUFHLGNBQWMsQ0FBQztLQUM1RDs4R0FIWSxXQUFXO2tHQUFYLFdBQVcsa0xBSlYsK0NBQStDOzsyRkFJaEQsV0FBVztrQkFQdkIsU0FBUzsrQkFDSSxxQkFBcUIsY0FDbkIsSUFBSSxZQUNOLCtDQUErQyxtQkFFeEMsdUJBQXVCLENBQUMsTUFBTTs4QkFHdEMsVUFBVTtzQkFBbEIsS0FBSztnQkFDMkIsTUFBTTtzQkFBdEMsV0FBVzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG90Q01TQ29udGVudGxldCB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbi8qKlxuICogVGhpcyBpcyBwYXJ0IG9mIHRoZSBBbmd1bGFyIFNESy5cbiAqIFRoaXMgaXMgYSBjb21wb25lbnQgZm9yIHRoZSBgTm9Db21wb25lbnRDb21wb25lbnRgIGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkb3RjbXMtbm8tY29tcG9uZW50JyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHRlbXBsYXRlOiBgTm8gQ29tcG9uZW50IGZvciB7eyBjb250ZW50bGV0LmNvbnRlbnRUeXBlIH19YCxcbiAgICBzdHlsZVVybDogJy4vbm8tY29tcG9uZW50LmNvbXBvbmVudC5jc3MnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE5vQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBjb250ZW50bGV0ITogRG90Q01TQ29udGVudGxldDtcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS10ZXN0aWQnKSB0ZXN0SWQgPSAnbm8tY29tcG9uZW50Jztcbn1cbiJdfQ==