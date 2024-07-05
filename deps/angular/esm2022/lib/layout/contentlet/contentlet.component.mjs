import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ContentletComponent {
    constructor() {
        this.identifier = null;
        this.baseType = null;
        this.title = null;
        this.inode = null;
        this.dotType = null;
        this.dotContainer = null;
        this.numberOfPages = null;
        this.dotContent = null;
    }
    ngOnChanges() {
        this.identifier = this.contentlet.identifier;
        this.baseType = this.contentlet.baseType;
        this.title = this.contentlet.title;
        this.inode = this.contentlet.inode;
        this.dotType = this.contentlet.contentType;
        this.dotContainer = this.container;
        this.numberOfPages = this.contentlet['onNumberOfPages'];
        this.dotContent = 'contentlet';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ContentletComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: ContentletComponent, isStandalone: true, selector: "dotcms-contentlet-wrapper", inputs: { contentlet: "contentlet", container: "container" }, host: { properties: { "attr.data-dot-identifier": "this.identifier", "attr.data-dot-basetype": "this.baseType", "attr.data-dot-title": "this.title", "attr.data-dot-inode": "this.inode", "attr.data-dot-type": "this.dotType", "attr.data-dot-container": "this.dotContainer", "attr.data-dot-on-number-of-pages": "this.numberOfPages", "attr.data-dot-object": "this.dotContent" } }, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ContentletComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dotcms-contentlet-wrapper',
                    standalone: true,
                    template: '<ng-content></ng-content>',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], propDecorators: { contentlet: [{
                type: Input,
                args: [{ required: true }]
            }], container: [{
                type: Input
            }], identifier: [{
                type: HostBinding,
                args: ['attr.data-dot-identifier']
            }], baseType: [{
                type: HostBinding,
                args: ['attr.data-dot-basetype']
            }], title: [{
                type: HostBinding,
                args: ['attr.data-dot-title']
            }], inode: [{
                type: HostBinding,
                args: ['attr.data-dot-inode']
            }], dotType: [{
                type: HostBinding,
                args: ['attr.data-dot-type']
            }], dotContainer: [{
                type: HostBinding,
                args: ['attr.data-dot-container']
            }], numberOfPages: [{
                type: HostBinding,
                args: ['attr.data-dot-on-number-of-pages']
            }], dotContent: [{
                type: HostBinding,
                args: ['attr.data-dot-object']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Nkay9hbmd1bGFyL3NyYy9saWIvbGF5b3V0L2NvbnRlbnRsZXQvY29udGVudGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDOztBQVVsRyxNQUFNLE9BQU8sbUJBQW1CO0lBTmhDO1FBVTZDLGVBQVUsR0FBa0IsSUFBSSxDQUFDO1FBQ25DLGFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQ2xDLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBQzVCLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBQzdCLFlBQU8sR0FBa0IsSUFBSSxDQUFDO1FBQ3pCLGlCQUFZLEdBQWtCLElBQUksQ0FBQztRQUMxQixrQkFBYSxHQUFrQixJQUFJLENBQUM7UUFDaEQsZUFBVSxHQUFrQixJQUFJLENBQUM7S0FZekU7SUFWRyxXQUFXO1FBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztJQUNuQyxDQUFDOzhHQXRCUSxtQkFBbUI7a0dBQW5CLG1CQUFtQixpaUJBSGxCLDJCQUEyQjs7MkZBRzVCLG1CQUFtQjtrQkFOL0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2xEOzhCQUU4QixVQUFVO3NCQUFwQyxLQUFLO3VCQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtnQkFDaEIsU0FBUztzQkFBakIsS0FBSztnQkFFbUMsVUFBVTtzQkFBbEQsV0FBVzt1QkFBQywwQkFBMEI7Z0JBQ0EsUUFBUTtzQkFBOUMsV0FBVzt1QkFBQyx3QkFBd0I7Z0JBQ0QsS0FBSztzQkFBeEMsV0FBVzt1QkFBQyxxQkFBcUI7Z0JBQ0UsS0FBSztzQkFBeEMsV0FBVzt1QkFBQyxxQkFBcUI7Z0JBQ0MsT0FBTztzQkFBekMsV0FBVzt1QkFBQyxvQkFBb0I7Z0JBQ08sWUFBWTtzQkFBbkQsV0FBVzt1QkFBQyx5QkFBeUI7Z0JBQ1csYUFBYTtzQkFBN0QsV0FBVzt1QkFBQyxrQ0FBa0M7Z0JBQ1YsVUFBVTtzQkFBOUMsV0FBVzt1QkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb3RDTVNDb250ZW50bGV0IH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkb3RjbXMtY29udGVudGxldC13cmFwcGVyJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudGxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSkgY29udGVudGxldCE6IERvdENNU0NvbnRlbnRsZXQ7XG4gICAgQElucHV0KCkgY29udGFpbmVyITogc3RyaW5nO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtZG90LWlkZW50aWZpZXInKSBpZGVudGlmaWVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1kb3QtYmFzZXR5cGUnKSBiYXNlVHlwZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtZG90LXRpdGxlJykgdGl0bGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWRvdC1pbm9kZScpIGlub2RlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1kb3QtdHlwZScpIGRvdFR5cGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWRvdC1jb250YWluZXInKSBkb3RDb250YWluZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLWRvdC1vbi1udW1iZXItb2YtcGFnZXMnKSBudW1iZXJPZlBhZ2VzOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuZGF0YS1kb3Qtb2JqZWN0JykgZG90Q29udGVudDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gdGhpcy5jb250ZW50bGV0LmlkZW50aWZpZXI7XG4gICAgICAgIHRoaXMuYmFzZVR5cGUgPSB0aGlzLmNvbnRlbnRsZXQuYmFzZVR5cGU7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLmNvbnRlbnRsZXQudGl0bGU7XG4gICAgICAgIHRoaXMuaW5vZGUgPSB0aGlzLmNvbnRlbnRsZXQuaW5vZGU7XG4gICAgICAgIHRoaXMuZG90VHlwZSA9IHRoaXMuY29udGVudGxldC5jb250ZW50VHlwZTtcbiAgICAgICAgdGhpcy5kb3RDb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5udW1iZXJPZlBhZ2VzID0gdGhpcy5jb250ZW50bGV0Wydvbk51bWJlck9mUGFnZXMnXTtcbiAgICAgICAgdGhpcy5kb3RDb250ZW50ID0gJ2NvbnRlbnRsZXQnO1xuICAgIH1cbn1cbiJdfQ==