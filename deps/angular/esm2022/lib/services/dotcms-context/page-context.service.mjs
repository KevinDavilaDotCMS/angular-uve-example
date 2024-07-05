/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { isInsideEditor } from '@dotcms/client';
import * as i0 from "@angular/core";
export class PageContextService {
    constructor() {
        this.pageContext = null;
    }
    get pageContextValue() {
        return this.pageContext;
    }
    /**
     * Set the context
     *
     * @protected
     * @param {DotCMSPageAsset} value
     * @memberof DotcmsContextService
     */
    setContext(pageAsset, components) {
        this.pageContext = {
            components,
            pageAsset,
            isInsideEditor: isInsideEditor()
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PageContextService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PageContextService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PageContextService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1jb250ZXh0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Nkay9hbmd1bGFyL3NyYy9saWIvc2VydmljZXMvZG90Y21zLWNvbnRleHQvcGFnZS1jb250ZXh0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBRXZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQVFoRCxNQUFNLE9BQU8sa0JBQWtCO0lBSC9CO1FBSVksZ0JBQVcsR0FBNkIsSUFBSSxDQUFDO0tBb0J4RDtJQWxCRyxJQUFJLGdCQUFnQjtRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFnQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxVQUFVLENBQUMsU0FBMEIsRUFBRSxVQUErQjtRQUNsRSxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2YsVUFBVTtZQUNWLFNBQVM7WUFDVCxjQUFjLEVBQUUsY0FBYyxFQUFFO1NBQ25DLENBQUM7SUFDTixDQUFDOzhHQXBCUSxrQkFBa0I7a0hBQWxCLGtCQUFrQixjQUZmLE1BQU07OzJGQUVULGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNJbnNpZGVFZGl0b3IgfSBmcm9tICdAZG90Y21zL2NsaWVudCc7XG5cbmltcG9ydCB7IERvdENNU1BhZ2VDb21wb25lbnQsIERvdENNU1BhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IERvdENNU1BhZ2VBc3NldCB9IGZyb20gJy4uLy4uL21vZGVscy9kb3RjbXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VDb250ZXh0U2VydmljZSB7XG4gICAgcHJpdmF0ZSBwYWdlQ29udGV4dDogRG90Q01TUGFnZUNvbnRleHQgfCBudWxsID0gbnVsbDtcblxuICAgIGdldCBwYWdlQ29udGV4dFZhbHVlKCk6IERvdENNU1BhZ2VDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZUNvbnRleHQgYXMgRG90Q01TUGFnZUNvbnRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjb250ZXh0XG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHtEb3RDTVNQYWdlQXNzZXR9IHZhbHVlXG4gICAgICogQG1lbWJlcm9mIERvdGNtc0NvbnRleHRTZXJ2aWNlXG4gICAgICovXG4gICAgc2V0Q29udGV4dChwYWdlQXNzZXQ6IERvdENNU1BhZ2VBc3NldCwgY29tcG9uZW50czogRG90Q01TUGFnZUNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnBhZ2VDb250ZXh0ID0ge1xuICAgICAgICAgICAgY29tcG9uZW50cyxcbiAgICAgICAgICAgIHBhZ2VBc3NldCxcbiAgICAgICAgICAgIGlzSW5zaWRlRWRpdG9yOiBpc0luc2lkZUVkaXRvcigpXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19