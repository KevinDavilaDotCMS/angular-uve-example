import * as i0 from '@angular/core';
import { Injectable, Component, ChangeDetectionStrategy, Input, HostBinding, inject, signal, computed, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isInsideEditor, initEditor, updateNavigation } from '@dotcms/client';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';

/* eslint-disable @typescript-eslint/no-explicit-any */
class PageContextService {
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

//Changed the type, to avoid SQ issue.
//This should be put inside a lib
const endClassMap = {
    1: 'col-end-1',
    2: 'col-end-2',
    3: 'col-end-3',
    4: 'col-end-4',
    5: 'col-end-5',
    6: 'col-end-6',
    7: 'col-end-7',
    8: 'col-end-8',
    9: 'col-end-9',
    10: 'col-end-10',
    11: 'col-end-11',
    12: 'col-end-12',
    13: 'col-end-13'
};
//Changed the type, to avoid SQ issue.
//This should be put inside a lib
const startClassMap = {
    1: 'col-start-1',
    2: 'col-start-2',
    3: 'col-start-3',
    4: 'col-start-4',
    5: 'col-start-5',
    6: 'col-start-6',
    7: 'col-start-7',
    8: 'col-start-8',
    9: 'col-start-9',
    10: 'col-start-10',
    11: 'col-start-11',
    12: 'col-start-12'
};
const getContainersData = (containers, containerRef) => {
    const { identifier, uuid } = containerRef;
    const { containerStructures, container } = containers[identifier];
    const { variantId } = container?.parentPermissionable || {};
    const acceptTypes = containerStructures
        .map((structure) => structure.contentTypeVar)
        .join(',');
    const contentlets = containers[identifier].contentlets[`uuid-${uuid}`];
    return {
        ...containers[identifier].container,
        acceptTypes,
        contentlets,
        variantId
    };
};
const getPositionStyleClasses = (start, end) => {
    const startClass = startClassMap[start];
    const endClass = endClassMap[end];
    return {
        startClass,
        endClass
    };
};

/**
 * This is part of the Angular SDK.
 * This is a component for the `NoComponentComponent` component.
 */
class NoComponent {
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

class ContentletComponent {
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

class ContainerComponent {
    constructor() {
        this.pageContextService = inject(PageContextService);
        this.NoComponent = NoComponent;
        this.$isInsideEditor = signal(false);
        this.$contentlets = signal([]);
        this.$dotContainer = signal(null);
        this.$dotContainerAsString = computed(() => JSON.stringify(this.$dotContainer()));
        this.acceptTypes = null;
        this.identifier = null;
        this.maxContentlets = null;
        this.uuid = null;
        this.class = null;
        this.dotObject = null;
        this.testId = 'dot-container';
    }
    ngOnChanges() {
        const { pageAsset: { containers }, components, isInsideEditor } = this.pageContextService.pageContextValue;
        const { acceptTypes, maxContentlets, variantId, path, contentlets } = getContainersData(containers, this.container);
        const { identifier, uuid } = this.container;
        this.componentsMap = components;
        this.$isInsideEditor.set(isInsideEditor);
        this.$contentlets.set(contentlets);
        this.$dotContainer.set({
            identifier: path ?? identifier,
            acceptTypes,
            maxContentlets,
            variantId,
            uuid
        });
        if (this.$isInsideEditor()) {
            this.acceptTypes = acceptTypes;
            this.identifier = identifier;
            this.maxContentlets = maxContentlets;
            this.uuid = uuid;
            this.class = this.$contentlets().length ? null : 'empty-container';
            this.dotObject = 'container';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: ContainerComponent, isStandalone: true, selector: "dotcms-container", inputs: { container: "container" }, host: { properties: { "attr.data-dot-accept-types": "this.acceptTypes", "attr.data-dot-identifier": "this.identifier", "attr.data-max-contentlets": "this.maxContentlets", "attr.data-dot-uuid": "this.uuid", "class": "this.class", "attr.data-dot-object": "this.dotObject", "attr.data-testid": "this.testId" } }, usesOnChanges: true, ngImport: i0, template: "@if ($isInsideEditor()) {\n    @if ($contentlets().length) {\n        @for (contentlet of $contentlets(); track $index) {\n            <dotcms-contentlet-wrapper\n                [contentlet]=\"contentlet\"\n                [container]=\"$dotContainerAsString()\">\n                <ng-container\n                    *ngComponentOutlet=\"\n                        (componentsMap[contentlet.contentType] || componentsMap['CustomNoComponent']\n                            | async) || NoComponent;\n                        inputs: { contentlet }\n                    \" />\n            </dotcms-contentlet-wrapper>\n        }\n    } @else {\n        This container is empty.\n    }\n} @else {\n    @for (contentlet of $contentlets(); track $index) {\n        <ng-container\n            *ngComponentOutlet=\"\n                componentsMap[contentlet.contentType] | async;\n                inputs: { contentlet }\n            \" />\n    }\n}\n", styles: [":host.empty-container{width:100%;background-color:#ecf0fd;display:flex;justify-content:center;align-items:center;color:#030e32;height:10rem}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModule", "ngComponentOutletNgModuleFactory"] }, { kind: "component", type: ContentletComponent, selector: "dotcms-contentlet-wrapper", inputs: ["contentlet", "container"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dotcms-container', standalone: true, imports: [AsyncPipe, NgComponentOutlet, NoComponent, ContentletComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if ($isInsideEditor()) {\n    @if ($contentlets().length) {\n        @for (contentlet of $contentlets(); track $index) {\n            <dotcms-contentlet-wrapper\n                [contentlet]=\"contentlet\"\n                [container]=\"$dotContainerAsString()\">\n                <ng-container\n                    *ngComponentOutlet=\"\n                        (componentsMap[contentlet.contentType] || componentsMap['CustomNoComponent']\n                            | async) || NoComponent;\n                        inputs: { contentlet }\n                    \" />\n            </dotcms-contentlet-wrapper>\n        }\n    } @else {\n        This container is empty.\n    }\n} @else {\n    @for (contentlet of $contentlets(); track $index) {\n        <ng-container\n            *ngComponentOutlet=\"\n                componentsMap[contentlet.contentType] | async;\n                inputs: { contentlet }\n            \" />\n    }\n}\n", styles: [":host.empty-container{width:100%;background-color:#ecf0fd;display:flex;justify-content:center;align-items:center;color:#030e32;height:10rem}\n"] }]
        }], propDecorators: { container: [{
                type: Input,
                args: [{ required: true }]
            }], acceptTypes: [{
                type: HostBinding,
                args: ['attr.data-dot-accept-types']
            }], identifier: [{
                type: HostBinding,
                args: ['attr.data-dot-identifier']
            }], maxContentlets: [{
                type: HostBinding,
                args: ['attr.data-max-contentlets']
            }], uuid: [{
                type: HostBinding,
                args: ['attr.data-dot-uuid']
            }], class: [{
                type: HostBinding,
                args: ['class']
            }], dotObject: [{
                type: HostBinding,
                args: ['attr.data-dot-object']
            }], testId: [{
                type: HostBinding,
                args: ['attr.data-testid']
            }] } });

class ColumnComponent {
    constructor() {
        this.containerClasses = '';
    }
    ngOnInit() {
        const { startClass, endClass } = getPositionStyleClasses(this.column.leftOffset, this.column.width + this.column.leftOffset);
        this.containerClasses = `${startClass} ${endClass}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ColumnComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: ColumnComponent, isStandalone: true, selector: "dotcms-column", inputs: { column: "column" }, host: { properties: { "class": "this.containerClasses" } }, ngImport: i0, template: `
        @for (container of column.containers; track $index) {
            <dotcms-container [container]="container" />
        }
    `, isInline: true, styles: [":host.col-start-1{grid-column-start:1}:host.col-start-2{grid-column-start:2}:host.col-start-3{grid-column-start:3}:host.col-start-4{grid-column-start:4}:host.col-start-5{grid-column-start:5}:host.col-start-6{grid-column-start:6}:host.col-start-7{grid-column-start:7}:host.col-start-8{grid-column-start:8}:host.col-start-9{grid-column-start:9}:host.col-start-10{grid-column-start:10}:host.col-start-11{grid-column-start:11}:host.col-start-12{grid-column-start:12}:host.col-end-1{grid-column-end:1}:host.col-end-2{grid-column-end:2}:host.col-end-3{grid-column-end:3}:host.col-end-4{grid-column-end:4}:host.col-end-5{grid-column-end:5}:host.col-end-6{grid-column-end:6}:host.col-end-7{grid-column-end:7}:host.col-end-8{grid-column-end:8}:host.col-end-9{grid-column-end:9}:host.col-end-10{grid-column-end:10}:host.col-end-11{grid-column-end:11}:host.col-end-12{grid-column-end:12}:host.col-end-13{grid-column-end:13}\n"], dependencies: [{ kind: "component", type: ContainerComponent, selector: "dotcms-container", inputs: ["container"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ColumnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dotcms-column', standalone: true, imports: [ContainerComponent], template: `
        @for (container of column.containers; track $index) {
            <dotcms-container [container]="container" />
        }
    `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host.col-start-1{grid-column-start:1}:host.col-start-2{grid-column-start:2}:host.col-start-3{grid-column-start:3}:host.col-start-4{grid-column-start:4}:host.col-start-5{grid-column-start:5}:host.col-start-6{grid-column-start:6}:host.col-start-7{grid-column-start:7}:host.col-start-8{grid-column-start:8}:host.col-start-9{grid-column-start:9}:host.col-start-10{grid-column-start:10}:host.col-start-11{grid-column-start:11}:host.col-start-12{grid-column-start:12}:host.col-end-1{grid-column-end:1}:host.col-end-2{grid-column-end:2}:host.col-end-3{grid-column-end:3}:host.col-end-4{grid-column-end:4}:host.col-end-5{grid-column-end:5}:host.col-end-6{grid-column-end:6}:host.col-end-7{grid-column-end:7}:host.col-end-8{grid-column-end:8}:host.col-end-9{grid-column-end:9}:host.col-end-10{grid-column-end:10}:host.col-end-11{grid-column-end:11}:host.col-end-12{grid-column-end:12}:host.col-end-13{grid-column-end:13}\n"] }]
        }], propDecorators: { column: [{
                type: Input
            }], containerClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });

class RowComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: RowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: RowComponent, isStandalone: true, selector: "dotcms-row", inputs: { row: "row" }, ngImport: i0, template: `@for (column of row.columns; track $index) {
        <dotcms-column [column]="column" />
    }`, isInline: true, styles: [":host{display:grid;grid-template-columns:repeat(12,1fr);gap:1rem;row-gap:1rem}\n"], dependencies: [{ kind: "component", type: ColumnComponent, selector: "dotcms-column", inputs: ["column"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: RowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dotcms-row', standalone: true, imports: [ColumnComponent], template: `@for (column of row.columns; track $index) {
        <dotcms-column [column]="column" />
    }`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:grid;grid-template-columns:repeat(12,1fr);gap:1rem;row-gap:1rem}\n"] }]
        }], propDecorators: { row: [{
                type: Input,
                args: [{ required: true }]
            }] } });

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * `DotcmsLayoutComponent` is a class that represents the layout for a DotCMS page.
 *  It includes a `pageAsset` property that represents the DotCMS page asset and a `components` property that represents the dynamic components for the page.
 *
 * @export
 * @class DotcmsLayoutComponent
 */
class DotcmsLayoutComponent {
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

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Generated bundle index. Do not edit.
 */

export { DotcmsLayoutComponent, PageContextService };
//# sourceMappingURL=dotcms-angular.mjs.map
