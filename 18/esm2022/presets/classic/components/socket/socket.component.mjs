import { Component, Input, HostBinding, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export class SocketComponent {
    cdr;
    data;
    rendered;
    get title() {
        return this.data.name;
    }
    constructor(cdr) {
        this.cdr = cdr;
        this.cdr.detach();
    }
    ngOnChanges() {
        this.cdr.detectChanges();
        requestAnimationFrame(() => this.rendered());
    }
    static ɵfac = function SocketComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SocketComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SocketComponent, selectors: [["ng-component"]], hostVars: 1, hostBindings: function SocketComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("title", ctx.title);
        } }, inputs: { data: "data", rendered: "rendered" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function SocketComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%]{display:inline-block;cursor:pointer;border:1px solid white;border-radius:12px;width:24px;height:24px;margin:6px;vertical-align:middle;background:#96b38a;z-index:2;box-sizing:border-box}[_nghost-%COMP%]:hover{border-width:4px}.multiple[_nghost-%COMP%]{border-color:#ff0}.output[_nghost-%COMP%]{margin-right:-12px}.input[_nghost-%COMP%]{margin-left:-12px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SocketComponent, [{
        type: Component,
        args: [{ template: ``, styles: [":host{display:inline-block;cursor:pointer;border:1px solid white;border-radius:12px;width:24px;height:24px;margin:6px;vertical-align:middle;background:#96b38a;z-index:2;box-sizing:border-box}:host:hover{border-width:4px}:host.multiple{border-color:#ff0}:host.output{margin-right:-12px}:host.input{margin-left:-12px}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }], { data: [{
            type: Input
        }], rendered: [{
            type: Input
        }], title: [{
            type: HostBinding,
            args: ['title']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SocketComponent, { className: "SocketComponent", filePath: "presets/classic/components/socket/socket.component.ts", lineNumber: 7 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL2NsYXNzaWMvY29tcG9uZW50cy9zb2NrZXQvc29ja2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQW9CLGlCQUFpQixFQUFhLE1BQU0sZUFBZSxDQUFDOztBQU05RyxNQUFNLE9BQU8sZUFBZTtJQVNOO0lBUlgsSUFBSSxDQUFPO0lBQ1gsUUFBUSxDQUFPO0lBR3hCLElBQTBCLEtBQUs7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtJQUN2QixDQUFDO0lBRUQsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDeEIscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDOUMsQ0FBQzt5R0FoQlUsZUFBZTs2REFBZixlQUFlO1lBQWYscUNBQWU7OztpRkFBZixlQUFlO2NBSjNCLFNBQVM7MkJBQ0UsRUFBRTtrREFJSCxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBR29CLEtBQUs7a0JBQTlCLFdBQVc7bUJBQUMsT0FBTzs7a0ZBTFQsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdDaGVja2VkLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc29ja2V0LmNvbXBvbmVudC5zYXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvY2tldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgZGF0YSE6IGFueTtcclxuICBASW5wdXQoKSByZW5kZXJlZCE6IGFueTtcclxuXHJcblxyXG4gIEBIb3N0QmluZGluZygndGl0bGUnKSBnZXQgdGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRhLm5hbWVcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgIHtcclxuICAgIHRoaXMuY2RyLmRldGFjaCgpXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucmVuZGVyZWQoKSlcclxuICB9XHJcbn1cclxuIl19