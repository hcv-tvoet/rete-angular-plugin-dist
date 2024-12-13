import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class ContextMenuSearchComponent {
    value;
    update = new EventEmitter();
    static ɵfac = function ContextMenuSearchComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContextMenuSearchComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextMenuSearchComponent, selectors: [["context-menu-search"]], inputs: { value: "value" }, outputs: { update: "update" }, decls: 1, vars: 1, consts: [["data-testid", "context-menu-search-input", 1, "search", 3, "input", "value"]], template: function ContextMenuSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("input", function ContextMenuSearchComponent_Template_input_input_0_listener($event) { return ctx.update.emit(($event.target == null ? null : $event.target.value) || ""); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("value", ctx.value);
        } }, styles: [".search[_ngcontent-%COMP%]{color:#fff;padding:1px 8px;border:1px solid white;border-radius:10px;font-size:16px;font-family:serif;width:100%;box-sizing:border-box;background:transparent}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextMenuSearchComponent, [{
        type: Component,
        args: [{ selector: 'context-menu-search', template: "<input class=\"search\" [value]=\"value\" (input)=\"update.emit($any($event.target)?.value || '')\"\r\n  data-testid=\"context-menu-search-input\" />\r\n", styles: [".search{color:#fff;padding:1px 8px;border:1px solid white;border-radius:10px;font-size:16px;font-family:serif;width:100%;box-sizing:border-box;background:transparent}\n"] }]
    }], null, { value: [{
            type: Input
        }], update: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContextMenuSearchComponent, { className: "ContextMenuSearchComponent", filePath: "presets/context-menu/components/search/search.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL2NvbnRleHQtbWVudS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbmcxOC8uc3JjL3ByZXNldHMvY29udGV4dC1tZW51L2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU92RSxNQUFNLE9BQU8sMEJBQTBCO0lBQzVCLEtBQUssQ0FBUztJQUNiLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFBO29IQUZsQywwQkFBMEI7NkRBQTFCLDBCQUEwQjtZQ1B2QyxnQ0FDNEM7WUFETiw0R0FBUyx3RUFBMEMsRUFBRSxDQUFDLElBQUM7WUFBN0YsaUJBQzRDOztZQUR0QixpQ0FBZTs7O2lGRE94QiwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSxxQkFBcUI7Z0JBS3RCLEtBQUs7a0JBQWIsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTs7a0ZBRkksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29udGV4dC1tZW51LXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51U2VhcmNoQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB2YWx1ZSE6IHN0cmluZ1xyXG4gIEBPdXRwdXQoKSB1cGRhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKVxyXG59XHJcbiIsIjxpbnB1dCBjbGFzcz1cInNlYXJjaFwiIFt2YWx1ZV09XCJ2YWx1ZVwiIChpbnB1dCk9XCJ1cGRhdGUuZW1pdCgkYW55KCRldmVudC50YXJnZXQpPy52YWx1ZSB8fCAnJylcIlxyXG4gIGRhdGEtdGVzdGlkPVwiY29udGV4dC1tZW51LXNlYXJjaC1pbnB1dFwiIC8+XHJcbiJdfQ==