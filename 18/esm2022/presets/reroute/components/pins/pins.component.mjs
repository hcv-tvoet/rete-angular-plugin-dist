import { Component, Input, ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pin/pin.component";
function PinsComponent_reroute_pin_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "reroute-pin", 1);
    i0.ɵɵlistener("menu", function PinsComponent_reroute_pin_0_Template_reroute_pin_menu_0_listener() { const pin_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.menu && ctx_r2.menu(pin_r2.id)); })("translate", function PinsComponent_reroute_pin_0_Template_reroute_pin_translate_0_listener($event) { const pin_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.translate && ctx_r2.translate(pin_r2.id, $event.dx, $event.dy)); })("down", function PinsComponent_reroute_pin_0_Template_reroute_pin_down_0_listener() { const pin_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.down && ctx_r2.down(pin_r2.id)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pin_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("position", pin_r2.position)("selected", pin_r2.selected)("getPointer", ctx_r2.getPointer);
} }
export class PinsComponent {
    cdr;
    rendered;
    pins;
    down;
    translate;
    menu;
    getPointer;
    constructor(cdr) {
        this.cdr = cdr;
        this.cdr.detach();
    }
    ngOnChanges() {
        this.cdr.detectChanges();
        requestAnimationFrame(() => this.rendered());
    }
    track(_, item) {
        return item.id;
    }
    static ɵfac = function PinsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PinsComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PinsComponent, selectors: [["ng-component"]], inputs: { rendered: "rendered", pins: "pins", down: "down", translate: "translate", menu: "menu", getPointer: "getPointer" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[3, "position", "selected", "getPointer", "menu", "translate", "down", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "menu", "translate", "down", "position", "selected", "getPointer"]], template: function PinsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PinsComponent_reroute_pin_0_Template, 1, 3, "reroute-pin", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.pins)("ngForTrackBy", ctx.track);
        } }, dependencies: [i1.NgForOf, i2.PinComponent], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PinsComponent, [{
        type: Component,
        args: [{ template: "<reroute-pin *ngFor=\"let pin of pins; trackBy: track\" [position]=\"pin.position\" [selected]=\"pin.selected\"\r\n  (menu)=\"menu && menu(pin.id)\" (translate)=\"translate && translate(pin.id, $event.dx, $event.dy)\"\r\n  (down)=\"down && down(pin.id)\" [getPointer]=\"getPointer\"></reroute-pin>\r\n" }]
    }], () => [{ type: i0.ChangeDetectorRef }], { rendered: [{
            type: Input
        }], pins: [{
            type: Input
        }], down: [{
            type: Input
        }], translate: [{
            type: Input
        }], menu: [{
            type: Input
        }], getPointer: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PinsComponent, { className: "PinsComponent", filePath: "presets/reroute/components/pins/pins.component.ts", lineNumber: 7 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9yZXJvdXRlL2NvbXBvbmVudHMvcGlucy9waW5zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL3Jlcm91dGUvY29tcG9uZW50cy9waW5zL3BpbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQWEsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0EvRSxzQ0FFMEQ7SUFBeEQsQUFEOEIsQUFBOUIsNE5BQWdCLHNCQUFZLEtBQUMsb09BQTJCLGlEQUF1QyxLQUFDLCtNQUNoRixzQkFBWSxLQUFDO0lBQTJCLGlCQUFjOzs7O0lBQXhDLEFBRmdELEFBQTFCLDBDQUF5Qiw2QkFBMEIsaUNBRWhEOztBREl6RCxNQUFNLE9BQU8sYUFBYTtJQVFKO0lBUFgsUUFBUSxDQUFhO0lBQ3JCLElBQUksQ0FBa0I7SUFDdEIsSUFBSSxDQUF1QjtJQUMzQixTQUFTLENBQStDO0lBQ3hELElBQUksQ0FBdUI7SUFDM0IsVUFBVSxDQUFpQjtJQUVwQyxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN4QixxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQVMsRUFBRSxJQUFTO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNoQixDQUFDO3VHQW5CVSxhQUFhOzZEQUFiLGFBQWE7WUNOMUIsOEVBRTBEOztZQUZwQixBQUFULGtDQUFTLDJCQUFjOzs7aUZETXZDLGFBQWE7Y0FIekIsU0FBUzs7a0RBSUMsUUFBUTtrQkFBaEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLOztrRkFOSyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaW4sIFBpbkRhdGEsIFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BpbnMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaW5zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSByZW5kZXJlZCE6ICgpID0+IHZvaWRcclxuICBASW5wdXQoKSBwaW5zITogUGluRGF0YVsncGlucyddXHJcbiAgQElucHV0KCkgZG93bj86IChpZDogc3RyaW5nKSA9PiB2b2lkXHJcbiAgQElucHV0KCkgdHJhbnNsYXRlPzogKGlkOiBzdHJpbmcsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWRcclxuICBASW5wdXQoKSBtZW51PzogKGlkOiBzdHJpbmcpID0+IHZvaWRcclxuICBASW5wdXQoKSBnZXRQb2ludGVyPzogKCkgPT4gUG9zaXRpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLmNkci5kZXRhY2goKVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKClcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnJlbmRlcmVkKCkpXHJcbiAgfVxyXG5cclxuICB0cmFjayhfOiBudW1iZXIsIGl0ZW06IFBpbikge1xyXG4gICAgcmV0dXJuIGl0ZW0uaWRcclxuICB9XHJcbn1cclxuIiwiPHJlcm91dGUtcGluICpuZ0Zvcj1cImxldCBwaW4gb2YgcGluczsgdHJhY2tCeTogdHJhY2tcIiBbcG9zaXRpb25dPVwicGluLnBvc2l0aW9uXCIgW3NlbGVjdGVkXT1cInBpbi5zZWxlY3RlZFwiXHJcbiAgKG1lbnUpPVwibWVudSAmJiBtZW51KHBpbi5pZClcIiAodHJhbnNsYXRlKT1cInRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUocGluLmlkLCAkZXZlbnQuZHgsICRldmVudC5keSlcIlxyXG4gIChkb3duKT1cImRvd24gJiYgZG93bihwaW4uaWQpXCIgW2dldFBvaW50ZXJdPVwiZ2V0UG9pbnRlclwiPjwvcmVyb3V0ZS1waW4+XHJcbiJdfQ==