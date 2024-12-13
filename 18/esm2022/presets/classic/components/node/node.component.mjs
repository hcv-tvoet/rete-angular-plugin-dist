import { Component, Input, HostBinding, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../../ref";
const _c0 = (a0, a1, a2, a3) => ({ type: "socket", side: "output", key: a0, nodeId: a1, payload: a2, seed: a3 });
const _c1 = a0 => ({ type: "control", payload: a0 });
const _c2 = (a0, a1, a2, a3) => ({ type: "socket", side: "input", key: a0, nodeId: a1, payload: a2, seed: a3 });
function NodeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const output_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-testid", "output-" + output_r1.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(output_r1.value == null ? null : output_r1.value.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", i0.ɵɵpureFunction4(4, _c0, output_r1.key, ctx_r1.data.id, output_r1.value == null ? null : output_r1.value.socket, ctx_r1.seed))("emit", ctx_r1.emit);
} }
function NodeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 7);
} if (rf & 2) {
    const control_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("data", i0.ɵɵpureFunction1(3, _c1, control_r3.value))("emit", ctx_r1.emit);
    i0.ɵɵattribute("data-testid", "control-" + control_r3.key);
} }
function NodeComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const input_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(input_r4.value == null ? null : input_r4.value.label);
} }
function NodeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "div", 9);
    i0.ɵɵtemplate(2, NodeComponent_div_6_div_2_Template, 2, 1, "div", 10);
    i0.ɵɵelement(3, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const input_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("data-testid", "input-" + input_r4.key);
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", i0.ɵɵpureFunction4(8, _c2, input_r4.key, ctx_r1.data.id, input_r4.value == null ? null : input_r4.value.socket, ctx_r1.seed))("emit", ctx_r1.emit);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(input_r4.value == null ? null : input_r4.value.control) || !(input_r4.value == null ? null : input_r4.value.showControl));
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("display", (input_r4.value == null ? null : input_r4.value.control) && (input_r4.value == null ? null : input_r4.value.showControl) ? "" : "none");
    i0.ɵɵproperty("data", i0.ɵɵpureFunction1(13, _c1, input_r4.value == null ? null : input_r4.value.control))("emit", ctx_r1.emit);
} }
export class NodeComponent {
    cdr;
    data;
    emit;
    rendered;
    seed = 0;
    get width() {
        return this.data.width;
    }
    get height() {
        return this.data.height;
    }
    get selected() {
        return this.data.selected;
    }
    constructor(cdr) {
        this.cdr = cdr;
        this.cdr.detach();
    }
    ngOnChanges() {
        this.cdr.detectChanges();
        requestAnimationFrame(() => this.rendered());
        this.seed++; // force render sockets
    }
    sortByIndex(a, b) {
        const ai = a.value?.index || 0;
        const bi = b.value?.index || 0;
        return ai - bi;
    }
    static ɵfac = function NodeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NodeComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NodeComponent, selectors: [["ng-component"]], hostAttrs: ["data-testid", "node"], hostVars: 6, hostBindings: function NodeComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.width, "px")("height", ctx.height, "px");
            i0.ɵɵclassProp("selected", ctx.selected);
        } }, inputs: { data: "data", emit: "emit", rendered: "rendered" }, features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 13, consts: [["data-testid", "title", 1, "title"], ["class", "output", 4, "ngFor", "ngForOf"], ["class", "control", "refComponent", "", 3, "data", "emit", 4, "ngFor", "ngForOf"], ["class", "input", 4, "ngFor", "ngForOf"], [1, "output"], ["data-testid", "output-title", 1, "output-title"], ["refComponent", "", "data-testid", "output-socket", 1, "output-socket", 3, "data", "emit"], ["refComponent", "", 1, "control", 3, "data", "emit"], [1, "input"], ["refComponent", "", "data-testid", "input-socket", 1, "input-socket", 3, "data", "emit"], ["class", "input-title", "data-testid", "input-title", 4, "ngIf"], ["refComponent", "", "data-testid", "input-control", 1, "input-control", 3, "data", "emit"], ["data-testid", "input-title", 1, "input-title"]], template: function NodeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, NodeComponent_div_2_Template, 4, 9, "div", 1);
            i0.ɵɵpipe(3, "keyvalue");
            i0.ɵɵtemplate(4, NodeComponent_div_4_Template, 1, 5, "div", 2);
            i0.ɵɵpipe(5, "keyvalue");
            i0.ɵɵtemplate(6, NodeComponent_div_6_Template, 4, 15, "div", 3);
            i0.ɵɵpipe(7, "keyvalue");
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.data.label);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(3, 4, ctx.data.outputs, ctx.sortByIndex));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(5, 7, ctx.data.controls, ctx.sortByIndex));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(7, 10, ctx.data.inputs, ctx.sortByIndex));
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.RefDirective, i1.KeyValuePipe], styles: ["[_nghost-%COMP%]{display:block;background:#6e88ffcc;border:2px solid #4e58bf;border-radius:10px;cursor:pointer;box-sizing:border-box;width:180px;height:auto;padding-bottom:6px;position:relative;-webkit-user-select:none;user-select:none;line-height:initial;font-family:Arial}[_nghost-%COMP%]:hover{background:#8299ffcc}.selected[_nghost-%COMP%]{background:#ffd92c;border-color:#e3c000}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-family:sans-serif;font-size:18px;padding:8px}[_nghost-%COMP%]   .output[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   .input[_ngcontent-%COMP%]{text-align:left}[_nghost-%COMP%]   .input-title[_ngcontent-%COMP%], [_nghost-%COMP%]   .output-title[_ngcontent-%COMP%]{vertical-align:middle;color:#fff;display:inline-block;font-family:sans-serif;font-size:14px;margin:6px;line-height:24px}[_nghost-%COMP%]   .input-title[hidden][_ngcontent-%COMP%], [_nghost-%COMP%]   .output-title[hidden][_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .output-socket[_ngcontent-%COMP%]{text-align:right;margin-right:-18px;display:inline-block}[_nghost-%COMP%]   .input-socket[_ngcontent-%COMP%]{text-align:left;margin-left:-18px;display:inline-block}[_nghost-%COMP%]   .input-control[_ngcontent-%COMP%]{z-index:1;width:calc(100% - 36px);vertical-align:middle;display:inline-block}[_nghost-%COMP%]   .control[_ngcontent-%COMP%]{padding:6px 18px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NodeComponent, [{
        type: Component,
        args: [{ host: {
                    'data-testid': 'node'
                }, template: "<div class=\"title\" data-testid=\"title\">{{data.label}}</div>\r\n<div class=\"output\" *ngFor=\"let output of data.outputs | keyvalue: sortByIndex\" [attr.data-testid]=\"'output-'+output.key\">\r\n    <div class=\"output-title\" data-testid=\"output-title\">{{output.value?.label}}</div>\r\n    <div\r\n        class=\"output-socket\"\r\n        refComponent\r\n        [data]=\"{type: 'socket', side: 'output', key: output.key, nodeId: data.id, payload: output.value?.socket, seed: seed }\"\r\n        [emit]=\"emit\"\r\n        data-testid=\"output-socket\"\r\n    ></div>\r\n</div>\r\n<div\r\n    class=\"control\"\r\n    *ngFor=\"let control of data.controls | keyvalue: sortByIndex\"\r\n    refComponent\r\n    [data]=\"{type: 'control', payload: control.value }\"\r\n    [emit]=\"emit\"\r\n    [attr.data-testid]=\"'control-'+control.key\"\r\n></div>\r\n<div class=\"input\" *ngFor=\"let input of data.inputs | keyvalue: sortByIndex\" [attr.data-testid]=\"'input-'+input.key\">\r\n    <div\r\n        class=\"input-socket\"\r\n        refComponent\r\n        [data]=\"{type: 'socket', side: 'input', key: input.key, nodeId: data.id, payload: input.value?.socket, seed: seed }\"\r\n        [emit]=\"emit\"\r\n        data-testid=\"input-socket\"\r\n    ></div>\r\n    <div class=\"input-title\" data-testid=\"input-title\" *ngIf=\"!input.value?.control || !input.value?.showControl\">{{input.value?.label}}</div>\r\n    <div\r\n        class=\"input-control\"\r\n        [style.display]=\"input.value?.control && input.value?.showControl ? '' : 'none'\"\r\n        refComponent\r\n        [data]=\"{type: 'control', payload: input.value?.control }\"\r\n        [emit]=\"emit\"\r\n        data-testid=\"input-control\"\r\n    ></div>\r\n</div>\r\n", styles: [":host{display:block;background:#6e88ffcc;border:2px solid #4e58bf;border-radius:10px;cursor:pointer;box-sizing:border-box;width:180px;height:auto;padding-bottom:6px;position:relative;-webkit-user-select:none;user-select:none;line-height:initial;font-family:Arial}:host:hover{background:#8299ffcc}:host.selected{background:#ffd92c;border-color:#e3c000}:host .title{color:#fff;font-family:sans-serif;font-size:18px;padding:8px}:host .output{text-align:right}:host .input{text-align:left}:host .input-title,:host .output-title{vertical-align:middle;color:#fff;display:inline-block;font-family:sans-serif;font-size:14px;margin:6px;line-height:24px}:host .input-title[hidden],:host .output-title[hidden]{display:none}:host .output-socket{text-align:right;margin-right:-18px;display:inline-block}:host .input-socket{text-align:left;margin-left:-18px;display:inline-block}:host .input-control{z-index:1;width:calc(100% - 36px);vertical-align:middle;display:inline-block}:host .control{padding:6px 18px}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }], { data: [{
            type: Input
        }], emit: [{
            type: Input
        }], rendered: [{
            type: Input
        }], width: [{
            type: HostBinding,
            args: ['style.width.px']
        }], height: [{
            type: HostBinding,
            args: ['style.height.px']
        }], selected: [{
            type: HostBinding,
            args: ['class.selected']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NodeComponent, { className: "NodeComponent", filePath: "presets/classic/components/node/node.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9jbGFzc2ljL2NvbXBvbmVudHMvbm9kZS9ub2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL2NsYXNzaWMvY29tcG9uZW50cy9ub2RlL25vZGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0V4RixBQURKLDhCQUEwSCxhQUNqRTtJQUFBLFlBQXVCO0lBQUEsaUJBQU07SUFDbEYseUJBTU87SUFDWCxpQkFBTTs7Ozs7SUFSbUQsZUFBdUI7SUFBdkIsNEVBQXVCO0lBSXhFLGNBQXVIO0lBQ3ZILEFBREEsc0pBQXVILHFCQUMxRzs7O0lBSXJCLHlCQU9POzs7O0lBRkgsQUFEQSxtRUFBbUQscUJBQ3RDOzs7O0lBV2IsK0JBQThHO0lBQUEsWUFBc0I7SUFBQSxpQkFBTTs7O0lBQTVCLGNBQXNCO0lBQXRCLDBFQUFzQjs7O0lBUnhJLDhCQUFxSDtJQUNqSCx5QkFNTztJQUNQLHFFQUE4RztJQUM5RywwQkFPTztJQUNYLGlCQUFNOzs7OztJQWJFLGNBQW9IO0lBQ3BILEFBREEsbUpBQW9ILHFCQUN2RztJQUdtQyxjQUF3RDtJQUF4RCxpSkFBd0Q7SUFHeEcsY0FBZ0Y7SUFBaEYsaUtBQWdGO0lBR2hGLEFBREEsMEdBQTBELHFCQUM3Qzs7QURuQnJCLE1BQU0sT0FBTyxhQUFhO0lBbUJKO0lBbEJYLElBQUksQ0FBZ0M7SUFDcEMsSUFBSSxDQUFzQjtJQUMxQixRQUFRLENBQWE7SUFFOUIsSUFBSSxHQUFHLENBQUMsQ0FBQTtJQUVSLElBQW1DLEtBQUs7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUN4QixDQUFDO0lBRUQsSUFBb0MsTUFBTTtRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3pCLENBQUM7SUFFRCxJQUFtQyxRQUFRO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDM0IsQ0FBQztJQUVELFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3hCLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFDLHVCQUF1QjtJQUNyQyxDQUFDO0lBRUQsV0FBVyxDQUFtRSxDQUFJLEVBQUUsQ0FBSTtRQUN0RixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUE7UUFDOUIsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFBO1FBRTlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQTtJQUNoQixDQUFDO3VHQWxDVSxhQUFhOzZEQUFiLGFBQWE7WUFBYix3Q0FBYSw0QkFBQTtZQUFiLHdDQUFhOztZQ2QxQiw4QkFBdUM7WUFBQSxZQUFjO1lBQUEsaUJBQU07WUFDM0QsOERBQTBIOztZQVUxSCw4REFPQzs7WUFDRCwrREFBcUg7OztZQW5COUUsY0FBYztZQUFkLG9DQUFjO1lBQ2QsY0FBdUM7WUFBdkMsaUZBQXVDO1lBWXRELGVBQXdDO1lBQXhDLGtGQUF3QztZQU0zQixlQUFzQztZQUF0QyxpRkFBc0M7OztpRkRMOUQsYUFBYTtjQVB6QixTQUFTO3VCQUdGO29CQUNKLGFBQWEsRUFBRSxNQUFNO2lCQUN0QjtrREFHUSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBSTZCLEtBQUs7a0JBQXZDLFdBQVc7bUJBQUMsZ0JBQWdCO1lBSU8sTUFBTTtrQkFBekMsV0FBVzttQkFBQyxpQkFBaUI7WUFJSyxRQUFRO2tCQUExQyxXQUFXO21CQUFDLGdCQUFnQjs7a0ZBZmxCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGFzc2ljUHJlc2V0IGFzIENsYXNzaWMgfSBmcm9tICdyZXRlJztcclxuaW1wb3J0IHsgS2V5VmFsdWUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxudHlwZSBOb2RlRXh0cmFEYXRhID0geyB3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyIH1cclxudHlwZSBTb3J0VmFsdWU8TiBleHRlbmRzIENsYXNzaWMuTm9kZT4gPSAoTlsnY29udHJvbHMnXSB8IE5bJ2lucHV0cyddIHwgTlsnb3V0cHV0cyddKVtzdHJpbmddXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJy4vbm9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbm9kZS5jb21wb25lbnQuc2FzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgICdkYXRhLXRlc3RpZCc6ICdub2RlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGRhdGEhOiBDbGFzc2ljLk5vZGUgJiBOb2RlRXh0cmFEYXRhO1xyXG4gIEBJbnB1dCgpIGVtaXQhOiAoZGF0YTogYW55KSA9PiB2b2lkXHJcbiAgQElucHV0KCkgcmVuZGVyZWQhOiAoKSA9PiB2b2lkXHJcblxyXG4gIHNlZWQgPSAwXHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKSBnZXQgd2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLndpZHRoXHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLmhlaWdodFxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZWxlY3RlZCcpIGdldCBzZWxlY3RlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEuc2VsZWN0ZWRcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgdGhpcy5jZHIuZGV0YWNoKClcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXJlZCgpKVxyXG4gICAgdGhpcy5zZWVkKysgLy8gZm9yY2UgcmVuZGVyIHNvY2tldHNcclxuICB9XHJcblxyXG4gIHNvcnRCeUluZGV4PE4gZXh0ZW5kcyBDbGFzc2ljLk5vZGUsIEkgZXh0ZW5kcyBLZXlWYWx1ZTxzdHJpbmcsIFNvcnRWYWx1ZTxOPj4+KGE6IEksIGI6IEkpIHtcclxuICAgIGNvbnN0IGFpID0gYS52YWx1ZT8uaW5kZXggfHwgMFxyXG4gICAgY29uc3QgYmkgPSBiLnZhbHVlPy5pbmRleCB8fCAwXHJcblxyXG4gICAgcmV0dXJuIGFpIC0gYmlcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInRpdGxlXCIgZGF0YS10ZXN0aWQ9XCJ0aXRsZVwiPnt7ZGF0YS5sYWJlbH19PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJvdXRwdXRcIiAqbmdGb3I9XCJsZXQgb3V0cHV0IG9mIGRhdGEub3V0cHV0cyB8IGtleXZhbHVlOiBzb3J0QnlJbmRleFwiIFthdHRyLmRhdGEtdGVzdGlkXT1cIidvdXRwdXQtJytvdXRwdXQua2V5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwib3V0cHV0LXRpdGxlXCIgZGF0YS10ZXN0aWQ9XCJvdXRwdXQtdGl0bGVcIj57e291dHB1dC52YWx1ZT8ubGFiZWx9fTwvZGl2PlxyXG4gICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwib3V0cHV0LXNvY2tldFwiXHJcbiAgICAgICAgcmVmQ29tcG9uZW50XHJcbiAgICAgICAgW2RhdGFdPVwie3R5cGU6ICdzb2NrZXQnLCBzaWRlOiAnb3V0cHV0Jywga2V5OiBvdXRwdXQua2V5LCBub2RlSWQ6IGRhdGEuaWQsIHBheWxvYWQ6IG91dHB1dC52YWx1ZT8uc29ja2V0LCBzZWVkOiBzZWVkIH1cIlxyXG4gICAgICAgIFtlbWl0XT1cImVtaXRcIlxyXG4gICAgICAgIGRhdGEtdGVzdGlkPVwib3V0cHV0LXNvY2tldFwiXHJcbiAgICA+PC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2XHJcbiAgICBjbGFzcz1cImNvbnRyb2xcIlxyXG4gICAgKm5nRm9yPVwibGV0IGNvbnRyb2wgb2YgZGF0YS5jb250cm9scyB8IGtleXZhbHVlOiBzb3J0QnlJbmRleFwiXHJcbiAgICByZWZDb21wb25lbnRcclxuICAgIFtkYXRhXT1cInt0eXBlOiAnY29udHJvbCcsIHBheWxvYWQ6IGNvbnRyb2wudmFsdWUgfVwiXHJcbiAgICBbZW1pdF09XCJlbWl0XCJcclxuICAgIFthdHRyLmRhdGEtdGVzdGlkXT1cIidjb250cm9sLScrY29udHJvbC5rZXlcIlxyXG4+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJpbnB1dFwiICpuZ0Zvcj1cImxldCBpbnB1dCBvZiBkYXRhLmlucHV0cyB8IGtleXZhbHVlOiBzb3J0QnlJbmRleFwiIFthdHRyLmRhdGEtdGVzdGlkXT1cIidpbnB1dC0nK2lucHV0LmtleVwiPlxyXG4gICAgPGRpdlxyXG4gICAgICAgIGNsYXNzPVwiaW5wdXQtc29ja2V0XCJcclxuICAgICAgICByZWZDb21wb25lbnRcclxuICAgICAgICBbZGF0YV09XCJ7dHlwZTogJ3NvY2tldCcsIHNpZGU6ICdpbnB1dCcsIGtleTogaW5wdXQua2V5LCBub2RlSWQ6IGRhdGEuaWQsIHBheWxvYWQ6IGlucHV0LnZhbHVlPy5zb2NrZXQsIHNlZWQ6IHNlZWQgfVwiXHJcbiAgICAgICAgW2VtaXRdPVwiZW1pdFwiXHJcbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJpbnB1dC1zb2NrZXRcIlxyXG4gICAgPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LXRpdGxlXCIgZGF0YS10ZXN0aWQ9XCJpbnB1dC10aXRsZVwiICpuZ0lmPVwiIWlucHV0LnZhbHVlPy5jb250cm9sIHx8ICFpbnB1dC52YWx1ZT8uc2hvd0NvbnRyb2xcIj57e2lucHV0LnZhbHVlPy5sYWJlbH19PC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJpbnB1dC1jb250cm9sXCJcclxuICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJpbnB1dC52YWx1ZT8uY29udHJvbCAmJiBpbnB1dC52YWx1ZT8uc2hvd0NvbnRyb2wgPyAnJyA6ICdub25lJ1wiXHJcbiAgICAgICAgcmVmQ29tcG9uZW50XHJcbiAgICAgICAgW2RhdGFdPVwie3R5cGU6ICdjb250cm9sJywgcGF5bG9hZDogaW5wdXQudmFsdWU/LmNvbnRyb2wgfVwiXHJcbiAgICAgICAgW2VtaXRdPVwiZW1pdFwiXHJcbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJpbnB1dC1jb250cm9sXCJcclxuICAgID48L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==