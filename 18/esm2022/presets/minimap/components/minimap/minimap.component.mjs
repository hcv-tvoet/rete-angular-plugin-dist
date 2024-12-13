import { Component, Input, ChangeDetectorRef, HostListener, ElementRef, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../mini-viewport/mini-viewport.component";
import * as i3 from "../mini-node/mini-node.component";
function MinimapComponent_minimap_mini_node_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "minimap-mini-node", 2);
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("left", ctx_r1.scale(node_r1.left))("top", ctx_r1.scale(node_r1.top))("width", ctx_r1.scale(node_r1.width))("height", ctx_r1.scale(node_r1.height));
} }
export class MinimapComponent {
    el;
    cdr;
    rendered;
    size;
    ratio;
    nodes;
    viewport;
    translate;
    point;
    get width() {
        return this.px(this.size * this.ratio);
    }
    get height() {
        return this.px(this.size);
    }
    pointerdown(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    dblclick(event) {
        event.stopPropagation();
        event.preventDefault();
        if (!this.el.nativeElement)
            return;
        const box = this.el.nativeElement.getBoundingClientRect();
        const x = (event.clientX - box.left) / (this.size * this.ratio);
        const y = (event.clientY - box.top) / (this.size * this.ratio);
        this.point(x, y);
    }
    constructor(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.cdr.detach();
    }
    ngOnChanges() {
        this.cdr.detectChanges();
        requestAnimationFrame(() => this.rendered());
    }
    px(value) {
        return `${value}px`;
    }
    scale(value) {
        if (!this.el.nativeElement)
            return 0;
        return value * this.el.nativeElement.clientWidth;
    }
    identifyMiniNode(_, item) {
        return [item.top, item.left].join('_');
    }
    static ɵfac = function MinimapComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MinimapComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MinimapComponent, selectors: [["ng-component"]], hostAttrs: ["data-testid", "minimap"], hostVars: 4, hostBindings: function MinimapComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("pointerdown", function MinimapComponent_pointerdown_HostBindingHandler($event) { return ctx.pointerdown($event); })("dblclick", function MinimapComponent_dblclick_HostBindingHandler($event) { return ctx.dblclick($event); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.width)("height", ctx.height);
        } }, inputs: { rendered: "rendered", size: "size", ratio: "ratio", nodes: "nodes", viewport: "viewport", translate: "translate", point: "point" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 8, consts: [[3, "left", "top", "width", "height", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "left", "top", "width", "height", "containerWidth", "translate"], [3, "left", "top", "width", "height"]], template: function MinimapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MinimapComponent_minimap_mini_node_0_Template, 1, 4, "minimap-mini-node", 0);
            i0.ɵɵelement(1, "minimap-mini-viewport", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.nodes)("ngForTrackBy", ctx.identifyMiniNode);
            i0.ɵɵadvance();
            i0.ɵɵproperty("left", ctx.viewport.left)("top", ctx.viewport.top)("width", ctx.viewport.width)("height", ctx.viewport.height)("containerWidth", ctx.el.nativeElement == null ? null : ctx.el.nativeElement.clientWidth)("translate", ctx.translate);
        } }, dependencies: [i1.NgForOf, i2.MiniViewportComponent, i3.MiniNodeComponent], styles: ["[_nghost-%COMP%]{position:absolute;right:24px;bottom:24px;background:#e5eaefa6;padding:20px;overflow:hidden;border:1px solid #b1b7ff;border-radius:8px;box-sizing:border-box}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MinimapComponent, [{
        type: Component,
        args: [{ host: {
                    'data-testid': 'minimap'
                }, template: "<minimap-mini-node *ngFor=\"let node of nodes; trackBy: identifyMiniNode\" [left]=\"scale(node.left)\"\r\n  [top]=\"scale(node.top)\" [width]=\"scale(node.width)\" [height]=\"scale(node.height)\">\r\n\r\n</minimap-mini-node>\r\n<minimap-mini-viewport [left]=\"viewport.left\" [top]=\"viewport.top\" [width]=\"viewport.width\" [height]=\"viewport.height\"\r\n  [containerWidth]=\"el.nativeElement?.clientWidth\" [translate]=\"translate\"></minimap-mini-viewport>\r\n", styles: [":host{position:absolute;right:24px;bottom:24px;background:#e5eaefa6;padding:20px;overflow:hidden;border:1px solid #b1b7ff;border-radius:8px;box-sizing:border-box}\n"] }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }], { rendered: [{
            type: Input
        }], size: [{
            type: Input
        }], ratio: [{
            type: Input
        }], nodes: [{
            type: Input
        }], viewport: [{
            type: Input
        }], translate: [{
            type: Input
        }], point: [{
            type: Input
        }], width: [{
            type: HostBinding,
            args: ['style.width']
        }], height: [{
            type: HostBinding,
            args: ['style.height']
        }], pointerdown: [{
            type: HostListener,
            args: ['pointerdown', ['$event']]
        }], dblclick: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MinimapComponent, { className: "MinimapComponent", filePath: "presets/minimap/components/minimap/minimap.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9taW5pbWFwL2NvbXBvbmVudHMvbWluaW1hcC9taW5pbWFwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL21pbmltYXAvY29tcG9uZW50cy9taW5pbWFwL21pbmltYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQWEsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0F0SCx1Q0FHb0I7Ozs7SUFGa0MsQUFBNUIsQUFBeEIsQUFEdUUsaURBQXlCLGtDQUN6RSxzQ0FBNEIsd0NBQThCOztBRFNuRixNQUFNLE9BQU8sZ0JBQWdCO0lBaUNSO0lBQXdCO0lBaENsQyxRQUFRLENBQWE7SUFDckIsSUFBSSxDQUFTO0lBQ2IsS0FBSyxDQUF1QjtJQUM1QixLQUFLLENBQXVCO0lBQzVCLFFBQVEsQ0FBMEI7SUFDbEMsU0FBUyxDQUEyQjtJQUNwQyxLQUFLLENBQXVCO0lBRXJDLElBQWdDLEtBQUs7UUFDbkMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCxJQUFpQyxNQUFNO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUV3QyxXQUFXLENBQUMsS0FBbUI7UUFDdEUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ3ZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBRXFDLFFBQVEsQ0FBQyxLQUFpQjtRQUM5RCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDdkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFBRSxPQUFNO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUE7UUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9ELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUU5RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRUQsWUFBbUIsRUFBYyxFQUFVLEdBQXNCO1FBQTlDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN4QixxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsRUFBRSxDQUFDLEtBQWE7UUFDZCxPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUE7SUFDckIsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFhO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7WUFBRSxPQUFPLENBQUMsQ0FBQTtRQUVwQyxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUE7SUFDbEQsQ0FBQztJQUVELGdCQUFnQixDQUFDLENBQVMsRUFBRSxJQUFrQztRQUM1RCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7MEdBdERVLGdCQUFnQjs2REFBaEIsZ0JBQWdCO1lBQWhCLHVHQUFBLHVCQUFtQixJQUFILG9GQUFoQixvQkFBZ0IsSUFBQTs7WUFBaEIsa0NBQWdCLHNCQUFBOztZQ1Y3Qiw2RkFDb0Y7WUFHcEYsMkNBQ21HOztZQUxyRCxBQUFWLG1DQUFVLHNDQUF5QjtZQUloRCxjQUFzQjtZQUNNLEFBQWpELEFBRDBGLEFBQXpCLEFBQXJCLEFBQXZCLHdDQUFzQix5QkFBcUIsNkJBQXlCLCtCQUEyQiwwRkFDcEUsNEJBQXdCOzs7aUZESzdELGdCQUFnQjtjQVA1QixTQUFTO3VCQUdGO29CQUNKLGFBQWEsRUFBRSxTQUFTO2lCQUN6QjsyRUFHUSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFFMEIsS0FBSztrQkFBcEMsV0FBVzttQkFBQyxhQUFhO1lBR08sTUFBTTtrQkFBdEMsV0FBVzttQkFBQyxjQUFjO1lBSWMsV0FBVztrQkFBbkQsWUFBWTttQkFBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFLRCxRQUFRO2tCQUE3QyxZQUFZO21CQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0ZBckJ6QixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1pbmltYXBEYXRhIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmltYXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21pbmltYXAuY29tcG9uZW50LnNhc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnZGF0YS10ZXN0aWQnOiAnbWluaW1hcCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaW5pbWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSByZW5kZXJlZCE6ICgpID0+IHZvaWRcclxuICBASW5wdXQoKSBzaXplITogbnVtYmVyXHJcbiAgQElucHV0KCkgcmF0aW8hOiBNaW5pbWFwRGF0YVsncmF0aW8nXVxyXG4gIEBJbnB1dCgpIG5vZGVzITogTWluaW1hcERhdGFbJ25vZGVzJ11cclxuICBASW5wdXQoKSB2aWV3cG9ydCE6IE1pbmltYXBEYXRhWyd2aWV3cG9ydCddXHJcbiAgQElucHV0KCkgdHJhbnNsYXRlITogTWluaW1hcERhdGFbJ3RyYW5zbGF0ZSddXHJcbiAgQElucHV0KCkgcG9pbnQhOiBNaW5pbWFwRGF0YVsncG9pbnQnXVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJykgZ2V0IHdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHgodGhpcy5zaXplICogdGhpcy5yYXRpbylcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKSBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHgodGhpcy5zaXplKVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBbJyRldmVudCddKSBwb2ludGVyZG93bihldmVudDogUG9pbnRlckV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbJyRldmVudCddKSBkYmxjbGljayhldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBpZiAoIXRoaXMuZWwubmF0aXZlRWxlbWVudCkgcmV0dXJuXHJcbiAgICBjb25zdCBib3ggPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IHggPSAoZXZlbnQuY2xpZW50WCAtIGJveC5sZWZ0KSAvICh0aGlzLnNpemUgKiB0aGlzLnJhdGlvKVxyXG4gICAgY29uc3QgeSA9IChldmVudC5jbGllbnRZIC0gYm94LnRvcCkgLyAodGhpcy5zaXplICogdGhpcy5yYXRpbylcclxuXHJcbiAgICB0aGlzLnBvaW50KHgsIHkpXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgIHtcclxuICAgIHRoaXMuY2RyLmRldGFjaCgpXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucmVuZGVyZWQoKSlcclxuICB9XHJcblxyXG4gIHB4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBgJHt2YWx1ZX1weGBcclxuICB9XHJcblxyXG4gIHNjYWxlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50KSByZXR1cm4gMFxyXG5cclxuICAgIHJldHVybiB2YWx1ZSAqIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aFxyXG4gIH1cclxuXHJcbiAgaWRlbnRpZnlNaW5pTm9kZShfOiBudW1iZXIsIGl0ZW06IE1pbmltYXBEYXRhWydub2RlcyddW251bWJlcl0pIHtcclxuICAgIHJldHVybiBbaXRlbS50b3AsIGl0ZW0ubGVmdF0uam9pbignXycpXHJcbiAgfVxyXG59XHJcbiIsIjxtaW5pbWFwLW1pbmktbm9kZSAqbmdGb3I9XCJsZXQgbm9kZSBvZiBub2RlczsgdHJhY2tCeTogaWRlbnRpZnlNaW5pTm9kZVwiIFtsZWZ0XT1cInNjYWxlKG5vZGUubGVmdClcIlxyXG4gIFt0b3BdPVwic2NhbGUobm9kZS50b3ApXCIgW3dpZHRoXT1cInNjYWxlKG5vZGUud2lkdGgpXCIgW2hlaWdodF09XCJzY2FsZShub2RlLmhlaWdodClcIj5cclxuXHJcbjwvbWluaW1hcC1taW5pLW5vZGU+XHJcbjxtaW5pbWFwLW1pbmktdmlld3BvcnQgW2xlZnRdPVwidmlld3BvcnQubGVmdFwiIFt0b3BdPVwidmlld3BvcnQudG9wXCIgW3dpZHRoXT1cInZpZXdwb3J0LndpZHRoXCIgW2hlaWdodF09XCJ2aWV3cG9ydC5oZWlnaHRcIlxyXG4gIFtjb250YWluZXJXaWR0aF09XCJlbC5uYXRpdmVFbGVtZW50Py5jbGllbnRXaWR0aFwiIFt0cmFuc2xhdGVdPVwidHJhbnNsYXRlXCI+PC9taW5pbWFwLW1pbmktdmlld3BvcnQ+XHJcbiJdfQ==