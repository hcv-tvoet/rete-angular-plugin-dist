import { Input, ElementRef } from '@angular/core';
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class RefDirective {
    el;
    data;
    emit;
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
        this.emit({ type: 'render', data: { ...this.data, element: this.el.nativeElement } });
    }
    ngOnDestroy() {
        this.emit({ type: 'unmount', data: { element: this.el.nativeElement } });
    }
    static ɵfac = function RefDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RefDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RefDirective, selectors: [["", "refComponent", ""]], inputs: { data: "data", emit: "emit" }, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RefDirective, [{
        type: Directive,
        args: [{
                selector: '[refComponent]'
            }]
    }], () => [{ type: i0.ElementRef }], { data: [{
            type: Input
        }], emit: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbmcxOC8uc3JjL3JlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLMUMsTUFBTSxPQUFPLFlBQVk7SUFJSDtJQUhYLElBQUksQ0FBTTtJQUNWLElBQUksQ0FBTTtJQUVuQixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFJLENBQUM7SUFFdkMsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDdkYsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDMUUsQ0FBQztzR0FaVSxZQUFZOzZEQUFaLFlBQVk7O2lGQUFaLFlBQVk7Y0FIeEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7MkNBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcmVmQ29tcG9uZW50XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBkYXRhITogYW55XHJcbiAgQElucHV0KCkgZW1pdCE6IGFueVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmVtaXQoeyB0eXBlOiAncmVuZGVyJywgZGF0YTogeyAuLi50aGlzLmRhdGEsIGVsZW1lbnQ6IHRoaXMuZWwubmF0aXZlRWxlbWVudCB9IH0pXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZW1pdCh7IHR5cGU6ICd1bm1vdW50JywgZGF0YTogeyBlbGVtZW50OiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgfSB9KVxyXG4gIH1cclxufVxyXG4iXX0=