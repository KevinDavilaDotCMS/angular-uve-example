import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ColumnComponent } from '../column/column.component';
import * as i0 from "@angular/core";
export class RowComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc2RrL2FuZ3VsYXIvc3JjL2xpYi9sYXlvdXQvcm93L3Jvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQVk3RCxNQUFNLE9BQU8sWUFBWTs4R0FBWixZQUFZO2tHQUFaLFlBQVksOEZBTlg7O01BRVIsMEpBSFEsZUFBZTs7MkZBT2hCLFlBQVk7a0JBVnhCLFNBQVM7K0JBQ0ksWUFBWSxjQUNWLElBQUksV0FDUCxDQUFDLGVBQWUsQ0FBQyxZQUNoQjs7TUFFUixtQkFFZSx1QkFBdUIsQ0FBQyxNQUFNOzhCQUdwQixHQUFHO3NCQUE3QixLQUFLO3VCQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvdFBhZ2VBc3NldExheW91dFJvdyB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuLi9jb2x1bW4vY29sdW1uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZG90Y21zLXJvdycsXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBpbXBvcnRzOiBbQ29sdW1uQ29tcG9uZW50XSxcbiAgICB0ZW1wbGF0ZTogYEBmb3IgKGNvbHVtbiBvZiByb3cuY29sdW1uczsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgIDxkb3RjbXMtY29sdW1uIFtjb2x1bW5dPVwiY29sdW1uXCIgLz5cbiAgICB9YCxcbiAgICBzdHlsZVVybDogJy4vcm93LmNvbXBvbmVudC5jc3MnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFJvd0NvbXBvbmVudCB7XG4gICAgQElucHV0KHsgcmVxdWlyZWQ6IHRydWUgfSkgcm93ITogRG90UGFnZUFzc2V0TGF5b3V0Um93O1xufVxuIl19