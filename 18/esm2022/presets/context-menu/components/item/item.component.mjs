import { ChangeDetectorRef, Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { debounce } from '../../debounce';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function ContextMenuItemComponent_div_1_context_menu_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "context-menu-item", 3);
    i0.ɵɵlistener("select", function ContextMenuItemComponent_div_1_context_menu_item_1_Template_context_menu_item_select_0_listener() { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; return i0.ɵɵresetView(item_r2.handler()); })("hide", function ContextMenuItemComponent_div_1_context_menu_item_1_Template_context_menu_item_hide_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.hide.emit()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("delay", ctx_r2.delay);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r2.label, " ");
} }
function ContextMenuItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, ContextMenuItemComponent_div_1_context_menu_item_1_Template, 2, 2, "context-menu-item", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.subitems);
} }
export class ContextMenuItemComponent {
    cdr;
    subitems;
    delay;
    select = new EventEmitter();
    hide = new EventEmitter();
    get block() { return true; }
    get hasSubitems() { return this.subitems; }
    click(event) {
        event.stopPropagation();
        this.select.emit();
        this.hide.emit();
    }
    pointerdown(event) {
        event.stopPropagation();
    }
    wheel(event) {
        event.stopPropagation();
    }
    hideSubitems = debounce(() => {
        this.visibleSubitems = false;
        this.cdr.detectChanges();
    });
    visibleSubitems = false;
    pointerover() {
        this.hideSubitems.cancel();
        this.visibleSubitems = true;
        this.cdr.detectChanges();
    }
    pointerleave() {
        this.hideSubitems.call(this.delay);
        this.cdr.detectChanges();
    }
    constructor(cdr) {
        this.cdr = cdr;
        this.cdr.detach();
    }
    static ɵfac = function ContextMenuItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContextMenuItemComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextMenuItemComponent, selectors: [["context-menu-item"]], hostAttrs: ["data-testid", "context-menu-item"], hostVars: 4, hostBindings: function ContextMenuItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function ContextMenuItemComponent_click_HostBindingHandler($event) { return ctx.click($event); })("pointerdown", function ContextMenuItemComponent_pointerdown_HostBindingHandler($event) { return ctx.pointerdown($event); })("wheel", function ContextMenuItemComponent_wheel_HostBindingHandler($event) { return ctx.wheel($event); })("pointerover", function ContextMenuItemComponent_pointerover_HostBindingHandler() { return ctx.pointerover(); })("pointerleave", function ContextMenuItemComponent_pointerleave_HostBindingHandler() { return ctx.pointerleave(); });
        } if (rf & 2) {
            i0.ɵɵclassProp("block", ctx.block)("hasSubitems", ctx.hasSubitems);
        } }, inputs: { subitems: "subitems", delay: "delay" }, outputs: { select: "select", hide: "hide" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["class", "subitems", 4, "ngIf"], [1, "subitems"], [3, "delay", "select", "hide", 4, "ngFor", "ngForOf"], [3, "select", "hide", "delay"]], template: function ContextMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
            i0.ɵɵtemplate(1, ContextMenuItemComponent_div_1_Template, 2, 1, "div", 0);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.subitems && ctx.visibleSubitems);
        } }, dependencies: [i1.NgForOf, i1.NgIf, ContextMenuItemComponent], styles: ["@charset \"UTF-8\";.hasSubitems[_nghost-%COMP%]:after{content:\"\\25ba\";position:absolute;opacity:.6;right:5px;top:5px;font-family:initial}.subitems[_ngcontent-%COMP%]{position:absolute;top:0;left:100%;width:120px}", ".block[_ngcontent-%COMP%]{display:block;color:#fff;padding:4px;border-bottom:1px solid rgba(69,103,255,.8);background-color:#6e88ffcc;cursor:pointer;width:100%;position:relative}.block[_ngcontent-%COMP%]:first-child{border-top-left-radius:5px;border-top-right-radius:5px}.block[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.block[_ngcontent-%COMP%]:hover{background-color:#8299ffcc}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextMenuItemComponent, [{
        type: Component,
        args: [{ selector: 'context-menu-item', host: {
                    'data-testid': 'context-menu-item'
                }, template: "<ng-content></ng-content>\r\n<div class=\"subitems\" *ngIf=\"subitems && visibleSubitems\">\r\n  <context-menu-item *ngFor=\"let item of subitems\" [delay]=\"delay\" (select)=\"item.handler()\" (hide)=\"hide.emit()\">\r\n    {{ item.label }}\r\n  </context-menu-item>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";:host(.hasSubitems):after{content:\"\\25ba\";position:absolute;opacity:.6;right:5px;top:5px;font-family:initial}.subitems{position:absolute;top:0;left:100%;width:120px}\n", ".block{display:block;color:#fff;padding:4px;border-bottom:1px solid rgba(69,103,255,.8);background-color:#6e88ffcc;cursor:pointer;width:100%;position:relative}.block:first-child{border-top-left-radius:5px;border-top-right-radius:5px}.block:last-child{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.block:hover{background-color:#8299ffcc}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }], { subitems: [{
            type: Input
        }], delay: [{
            type: Input
        }], select: [{
            type: Output
        }], hide: [{
            type: Output
        }], block: [{
            type: HostBinding,
            args: ['class.block']
        }], hasSubitems: [{
            type: HostBinding,
            args: ['class.hasSubitems']
        }], click: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], pointerdown: [{
            type: HostListener,
            args: ['pointerdown', ['$event']]
        }], wheel: [{
            type: HostListener,
            args: ['wheel', ['$event']]
        }], pointerover: [{
            type: HostListener,
            args: ['pointerover']
        }], pointerleave: [{
            type: HostListener,
            args: ['pointerleave']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContextMenuItemComponent, { className: "ContextMenuItemComponent", filePath: "presets/context-menu/components/item/item.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9jb250ZXh0LW1lbnUvY29tcG9uZW50cy9pdGVtL2l0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbmcxOC8uc3JjL3ByZXNldHMvY29udGV4dC1tZW51L2NvbXBvbmVudHMvaXRlbS9pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ0F4Qyw0Q0FBZ0g7SUFBckIsQUFBMUIsNE1BQVUsaUJBQWMsS0FBQyxxTUFBUyxrQkFBVyxLQUFDO0lBQzdHLFlBQ0Y7SUFBQSxpQkFBb0I7Ozs7SUFGNkIsb0NBQWU7SUFDOUQsY0FDRjtJQURFLDhDQUNGOzs7SUFIRiw4QkFBMEQ7SUFDeEQsMkdBQWdIO0lBR2xILGlCQUFNOzs7SUFIZ0MsY0FBVztJQUFYLHlDQUFXOztBRFVqRCxNQUFNLE9BQU8sd0JBQXdCO0lBcUNmO0lBcENYLFFBQVEsQ0FBUztJQUNqQixLQUFLLENBQVM7SUFDYixNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUNsQyxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUUxQyxJQUFnQyxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUEsQ0FBQyxDQUFDO0lBQ3ZELElBQXNDLFdBQVcsS0FBSyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxDQUFDO0lBRXpDLEtBQUssQ0FBQyxLQUFpQjtRQUN4RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFDd0MsV0FBVyxDQUFDLEtBQW1CO1FBQ3RFLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBQ2tDLEtBQUssQ0FBQyxLQUFpQjtRQUN4RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUVELFlBQVksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFDRixlQUFlLEdBQUcsS0FBSyxDQUFBO0lBRU0sV0FBVztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQUM2QixZQUFZO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFRCxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ25CLENBQUM7a0hBdkNVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1lBQXhCLG1HQUFBLGlCQUFhLElBQVcsa0dBQXhCLHVCQUFtQixJQUFLLHNGQUF4QixpQkFBYSxJQUFXLDRGQUF4QixpQkFBYSxJQUFXLDhGQUF4QixrQkFBYyxJQUFVOztZQUF4QixrQ0FBd0IsZ0NBQUE7OztZQ1pyQyxrQkFBeUI7WUFDekIseUVBQTBEOztZQUFuQyxjQUFpQztZQUFqQywwREFBaUM7aUREVzNDLHdCQUF3Qjs7aUZBQXhCLHdCQUF3QjtjQVJwQyxTQUFTOzJCQUNFLG1CQUFtQixRQUd2QjtvQkFDSixhQUFhLEVBQUUsbUJBQW1CO2lCQUNuQztrREFHUSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksTUFBTTtrQkFBZixNQUFNO1lBQ0csSUFBSTtrQkFBYixNQUFNO1lBRXlCLEtBQUs7a0JBQXBDLFdBQVc7bUJBQUMsYUFBYTtZQUNZLFdBQVc7a0JBQWhELFdBQVc7bUJBQUMsbUJBQW1CO1lBRUcsS0FBSztrQkFBdkMsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFLUSxXQUFXO2tCQUFuRCxZQUFZO21CQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUdKLEtBQUs7a0JBQXZDLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBVUosV0FBVztrQkFBdkMsWUFBWTttQkFBQyxhQUFhO1lBS0csWUFBWTtrQkFBekMsWUFBWTttQkFBQyxjQUFjOztrRkFoQ2pCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4uLy4uL2RlYm91bmNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29udGV4dC1tZW51LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pdGVtLmNvbXBvbmVudC5zYXNzJywgJy4uLy4uL2Jsb2NrLnNhc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnZGF0YS10ZXN0aWQnOiAnY29udGV4dC1tZW51LWl0ZW0nXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVJdGVtQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBzdWJpdGVtcz86IEl0ZW1bXVxyXG4gIEBJbnB1dCgpIGRlbGF5ITogbnVtYmVyXHJcbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgaGlkZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ibG9jaycpIGdldCBibG9jaygpIHsgcmV0dXJuIHRydWUgfVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzU3ViaXRlbXMnKSBnZXQgaGFzU3ViaXRlbXMoKSB7IHJldHVybiB0aGlzLnN1Yml0ZW1zIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBjbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHRoaXMuc2VsZWN0LmVtaXQoKVxyXG4gICAgdGhpcy5oaWRlLmVtaXQoKVxyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdwb2ludGVyZG93bicsIFsnJGV2ZW50J10pIHBvaW50ZXJkb3duKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ3doZWVsJywgWyckZXZlbnQnXSkgd2hlZWwoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgfVxyXG5cclxuICBoaWRlU3ViaXRlbXMgPSBkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICB0aGlzLnZpc2libGVTdWJpdGVtcyA9IGZhbHNlXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKClcclxuICB9KVxyXG4gIHZpc2libGVTdWJpdGVtcyA9IGZhbHNlXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3BvaW50ZXJvdmVyJykgcG9pbnRlcm92ZXIoKSB7XHJcbiAgICB0aGlzLmhpZGVTdWJpdGVtcy5jYW5jZWwoKVxyXG4gICAgdGhpcy52aXNpYmxlU3ViaXRlbXMgPSB0cnVlXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKClcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcigncG9pbnRlcmxlYXZlJykgcG9pbnRlcmxlYXZlKCkge1xyXG4gICAgdGhpcy5oaWRlU3ViaXRlbXMuY2FsbCh0aGlzLmRlbGF5KVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHRoaXMuY2RyLmRldGFjaCgpXHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPGRpdiBjbGFzcz1cInN1Yml0ZW1zXCIgKm5nSWY9XCJzdWJpdGVtcyAmJiB2aXNpYmxlU3ViaXRlbXNcIj5cclxuICA8Y29udGV4dC1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc3ViaXRlbXNcIiBbZGVsYXldPVwiZGVsYXlcIiAoc2VsZWN0KT1cIml0ZW0uaGFuZGxlcigpXCIgKGhpZGUpPVwiaGlkZS5lbWl0KClcIj5cclxuICAgIHt7IGl0ZW0ubGFiZWwgfX1cclxuICA8L2NvbnRleHQtbWVudS1pdGVtPlxyXG48L2Rpdj5cclxuIl19