import { Component, Input, ChangeDetectorRef, HostListener, HostBinding } from '@angular/core';
import { debounce } from '../../debounce';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../search/search.component";
import * as i3 from "../item/item.component";
function ContextMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "context-menu-search", 3);
    i0.ɵɵlistener("update", function ContextMenuComponent_div_0_Template_context_menu_search_update_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setFilter($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r1.filter);
} }
function ContextMenuComponent_context_menu_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "context-menu-item", 4);
    i0.ɵɵlistener("select", function ContextMenuComponent_context_menu_item_1_Template_context_menu_item_select_0_listener() { const item_r4 = i0.ɵɵrestoreView(_r3).$implicit; return i0.ɵɵresetView(item_r4.handler()); })("hide", function ContextMenuComponent_context_menu_item_1_Template_context_menu_item_hide_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onHide()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("delay", ctx_r1.delay)("subitems", item_r4.subitems);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r4.label, "\n");
} }
export class ContextMenuComponent {
    cdr;
    items;
    delay;
    searchBar;
    onHide;
    rendered;
    filter = '';
    hide = debounce(() => {
        this.onHide();
        this.cdr.detectChanges();
    });
    customAttribute = '';
    pointerover() {
        this.hide.cancel();
        this.cdr.detectChanges();
    }
    pointerleave() {
        this.hide.call(this.delay);
        this.cdr.detectChanges();
    }
    constructor(cdr) {
        this.cdr = cdr;
        this.cdr.detach();
    }
    ngOnChanges() {
        this.cdr.detectChanges();
        requestAnimationFrame(() => this.rendered());
    }
    setFilter(value) {
        this.filter = value;
        this.cdr.detectChanges();
    }
    getItems() {
        const filterRegexp = new RegExp(this.filter, 'i');
        const filteredList = this.items.filter(item => (item.label.match(filterRegexp)));
        return filteredList;
    }
    ngOnDestroy() {
        if (this.hide)
            this.hide.cancel();
    }
    static ɵfac = function ContextMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContextMenuComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextMenuComponent, selectors: [["ng-component"]], hostAttrs: ["data-testid", "context-menu"], hostVars: 1, hostBindings: function ContextMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseover", function ContextMenuComponent_mouseover_HostBindingHandler() { return ctx.pointerover(); })("mouseleave", function ContextMenuComponent_mouseleave_HostBindingHandler() { return ctx.pointerleave(); });
        } if (rf & 2) {
            i0.ɵɵattribute("rete-context-menu", ctx.customAttribute);
        } }, inputs: { items: "items", delay: "delay", searchBar: "searchBar", onHide: "onHide", rendered: "rendered" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "block", 4, "ngIf"], [3, "delay", "subitems", "select", "hide", 4, "ngFor", "ngForOf"], [1, "block"], [3, "update", "value"], [3, "select", "hide", "delay", "subitems"]], template: function ContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ContextMenuComponent_div_0_Template, 2, 1, "div", 0)(1, ContextMenuComponent_context_menu_item_1_Template, 2, 3, "context-menu-item", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.searchBar);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.getItems());
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ContextMenuSearchComponent, i3.ContextMenuItemComponent], styles: ["[_nghost-%COMP%]{display:block;padding:10px;width:120px;margin-top:-20px;margin-left:-60px}", ".block[_ngcontent-%COMP%]{display:block;color:#fff;padding:4px;border-bottom:1px solid rgba(69,103,255,.8);background-color:#6e88ffcc;cursor:pointer;width:100%;position:relative}.block[_ngcontent-%COMP%]:first-child{border-top-left-radius:5px;border-top-right-radius:5px}.block[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.block[_ngcontent-%COMP%]:hover{background-color:#8299ffcc}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextMenuComponent, [{
        type: Component,
        args: [{ host: {
                    'data-testid': 'context-menu'
                }, template: "<div class=\"block\" *ngIf=\"searchBar\">\r\n  <context-menu-search [value]=\"filter\" (update)=\"setFilter($event)\"></context-menu-search>\r\n</div>\r\n\r\n<context-menu-item *ngFor=\"let item of getItems()\" [delay]=\"delay\" (select)=\"item.handler()\" [subitems]=\"item.subitems\"\r\n  (hide)=\"onHide()\">\r\n  {{ item.label }}\r\n</context-menu-item>\r\n", styles: [":host{display:block;padding:10px;width:120px;margin-top:-20px;margin-left:-60px}\n", ".block{display:block;color:#fff;padding:4px;border-bottom:1px solid rgba(69,103,255,.8);background-color:#6e88ffcc;cursor:pointer;width:100%;position:relative}.block:first-child{border-top-left-radius:5px;border-top-right-radius:5px}.block:last-child{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.block:hover{background-color:#8299ffcc}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }], { items: [{
            type: Input
        }], delay: [{
            type: Input
        }], searchBar: [{
            type: Input
        }], onHide: [{
            type: Input
        }], rendered: [{
            type: Input
        }], customAttribute: [{
            type: HostBinding,
            args: ['attr.rete-context-menu']
        }], pointerover: [{
            type: HostListener,
            args: ['mouseover']
        }], pointerleave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContextMenuComponent, { className: "ContextMenuComponent", filePath: "presets/context-menu/components/menu/menu.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9jb250ZXh0LW1lbnUvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbmcxOC8uc3JjL3ByZXNldHMvY29udGV4dC1tZW51L2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUF3QixZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ0R4QyxBQURGLDhCQUFxQyw2QkFDZ0M7SUFBN0IscU1BQVUsd0JBQWlCLEtBQUM7SUFDcEUsQUFEcUUsaUJBQXNCLEVBQ3JGOzs7SUFEaUIsY0FBZ0I7SUFBaEIscUNBQWdCOzs7O0lBR3ZDLDRDQUNvQjtJQUFsQixBQURpRSxrTUFBVSxpQkFBYyxLQUFDLDBMQUNsRixlQUFRLEtBQUM7SUFDakIsWUFDRjtJQUFBLGlCQUFvQjs7OztJQUh5RSxBQUExQyxvQ0FBZSw4QkFBcUQ7SUFFckgsY0FDRjtJQURFLCtDQUNGOztBRElBLE1BQU0sT0FBTyxvQkFBb0I7SUF5Qlg7SUF4QlgsS0FBSyxDQUFTO0lBQ2QsS0FBSyxDQUFTO0lBQ2QsU0FBUyxDQUFVO0lBQ25CLE1BQU0sQ0FBYTtJQUNuQixRQUFRLENBQWE7SUFFdkIsTUFBTSxHQUFXLEVBQUUsQ0FBQTtJQUUxQixJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUNuQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQzFCLENBQUMsQ0FBQyxDQUFBO0lBRXFDLGVBQWUsR0FBRyxFQUFFLENBQUE7SUFFaEMsV0FBVztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDMUIsQ0FBQztJQUMyQixZQUFZO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFRCxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN4QixxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUMxQixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDakQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FDL0IsQ0FBQyxDQUFBO1FBRUYsT0FBTyxZQUFZLENBQUE7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNuQyxDQUFDOzhHQWxEVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQUFwQixpR0FBQSxpQkFBYSxJQUFPLHNGQUFwQixrQkFBYyxJQUFNOzs7O1lDUGpDLEFBSkEscUVBQXFDLG9GQUtqQjs7WUFMQSxvQ0FBZTtZQUlDLGNBQWE7WUFBYix3Q0FBYTs7O2lGRE9wQyxvQkFBb0I7Y0FQaEMsU0FBUzt1QkFHRjtvQkFDSixhQUFhLEVBQUUsY0FBYztpQkFDOUI7a0RBR1EsS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFTaUMsZUFBZTtrQkFBckQsV0FBVzttQkFBQyx3QkFBd0I7WUFFVixXQUFXO2tCQUFyQyxZQUFZO21CQUFDLFdBQVc7WUFJRyxZQUFZO2tCQUF2QyxZQUFZO21CQUFDLFlBQVk7O2tGQXBCZixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuLi8uLi9kZWJvdW5jZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJy4vbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWVudS5jb21wb25lbnQuc2FzcycsICcuLi8uLi9ibG9jay5zYXNzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgJ2RhdGEtdGVzdGlkJzogJ2NvbnRleHQtbWVudSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBpdGVtcyE6IEl0ZW1bXVxyXG4gIEBJbnB1dCgpIGRlbGF5ITogbnVtYmVyXHJcbiAgQElucHV0KCkgc2VhcmNoQmFyPzogYm9vbGVhblxyXG4gIEBJbnB1dCgpIG9uSGlkZSE6ICgpID0+IHZvaWRcclxuICBASW5wdXQoKSByZW5kZXJlZCE6ICgpID0+IHZvaWRcclxuXHJcbiAgcHVibGljIGZpbHRlcjogc3RyaW5nID0gJydcclxuXHJcbiAgaGlkZSA9IGRlYm91bmNlKCgpID0+IHtcclxuICAgIHRoaXMub25IaWRlKClcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKVxyXG4gIH0pXHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5yZXRlLWNvbnRleHQtbWVudScpIGN1c3RvbUF0dHJpYnV0ZSA9ICcnXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlb3ZlcicpIHBvaW50ZXJvdmVyKCkge1xyXG4gICAgdGhpcy5oaWRlLmNhbmNlbCgpXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKClcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIHBvaW50ZXJsZWF2ZSgpIHtcclxuICAgIHRoaXMuaGlkZS5jYWxsKHRoaXMuZGVsYXkpXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKClcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgdGhpcy5jZHIuZGV0YWNoKClcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXJlZCgpKVxyXG4gIH1cclxuXHJcbiAgc2V0RmlsdGVyKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZmlsdGVyID0gdmFsdWVcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKVxyXG4gIH1cclxuXHJcbiAgZ2V0SXRlbXMoKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJSZWdleHAgPSBuZXcgUmVnRXhwKHRoaXMuZmlsdGVyLCAnaScpXHJcbiAgICBjb25zdCBmaWx0ZXJlZExpc3QgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IChcclxuICAgICAgaXRlbS5sYWJlbC5tYXRjaChmaWx0ZXJSZWdleHApXHJcbiAgICApKVxyXG5cclxuICAgIHJldHVybiBmaWx0ZXJlZExpc3RcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGlkZSkgdGhpcy5oaWRlLmNhbmNlbCgpXHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJibG9ja1wiICpuZ0lmPVwic2VhcmNoQmFyXCI+XHJcbiAgPGNvbnRleHQtbWVudS1zZWFyY2ggW3ZhbHVlXT1cImZpbHRlclwiICh1cGRhdGUpPVwic2V0RmlsdGVyKCRldmVudClcIj48L2NvbnRleHQtbWVudS1zZWFyY2g+XHJcbjwvZGl2PlxyXG5cclxuPGNvbnRleHQtbWVudS1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGdldEl0ZW1zKClcIiBbZGVsYXldPVwiZGVsYXlcIiAoc2VsZWN0KT1cIml0ZW0uaGFuZGxlcigpXCIgW3N1Yml0ZW1zXT1cIml0ZW0uc3ViaXRlbXNcIlxyXG4gIChoaWRlKT1cIm9uSGlkZSgpXCI+XHJcbiAge3sgaXRlbS5sYWJlbCB9fVxyXG48L2NvbnRleHQtbWVudS1pdGVtPlxyXG4iXX0=