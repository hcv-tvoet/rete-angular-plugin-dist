import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { useDrag } from '../../../../shared/drag';
import * as i0 from "@angular/core";
export class MiniViewportComponent {
    left;
    top;
    width;
    height;
    containerWidth;
    translate;
    drag = useDrag((dx, dy) => this.onDrag(dx, dy), e => ({ x: e.pageX, y: e.pageY }));
    get styleLeft() {
        return this.px(this.scale(this.left));
    }
    get styleTop() {
        return this.px(this.scale(this.top));
    }
    get styleWidth() {
        return this.px(this.scale(this.width));
    }
    get styleHeight() {
        return this.px(this.scale(this.height));
    }
    pointerdown(event) {
        event.stopPropagation();
        this.drag.start(event);
    }
    px(value) {
        return `${value}px`;
    }
    scale(v) {
        return v * this.containerWidth;
    }
    invert(v) {
        return v / this.containerWidth;
    }
    onDrag(dx, dy) {
        this.translate(this.invert(-dx), this.invert(-dy));
    }
    static ɵfac = function MiniViewportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MiniViewportComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MiniViewportComponent, selectors: [["minimap-mini-viewport"]], hostAttrs: ["data-testid", "minimap-viewport"], hostVars: 8, hostBindings: function MiniViewportComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("pointerdown", function MiniViewportComponent_pointerdown_HostBindingHandler($event) { return ctx.pointerdown($event); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("left", ctx.styleLeft)("top", ctx.styleTop)("width", ctx.styleWidth)("height", ctx.styleHeight);
        } }, inputs: { left: "left", top: "top", width: "width", height: "height", containerWidth: "containerWidth", translate: "translate" }, decls: 0, vars: 0, template: function MiniViewportComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%]{display:block;position:absolute;background:#fffb8052;border:1px solid #ffe52b}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MiniViewportComponent, [{
        type: Component,
        args: [{ selector: 'minimap-mini-viewport', host: {
                    'data-testid': 'minimap-viewport'
                }, template: "", styles: [":host{display:block;position:absolute;background:#fffb8052;border:1px solid #ffe52b}\n"] }]
    }], null, { left: [{
            type: Input
        }], top: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], containerWidth: [{
            type: Input
        }], translate: [{
            type: Input
        }], styleLeft: [{
            type: HostBinding,
            args: ['style.left']
        }], styleTop: [{
            type: HostBinding,
            args: ['style.top']
        }], styleWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], styleHeight: [{
            type: HostBinding,
            args: ['style.height']
        }], pointerdown: [{
            type: HostListener,
            args: ['pointerdown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MiniViewportComponent, { className: "MiniViewportComponent", filePath: "presets/minimap/components/mini-viewport/mini-viewport.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS12aWV3cG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9taW5pbWFwL2NvbXBvbmVudHMvbWluaS12aWV3cG9ydC9taW5pLXZpZXdwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFXbEQsTUFBTSxPQUFPLHFCQUFxQjtJQUN2QixJQUFJLENBQVM7SUFDYixHQUFHLENBQVM7SUFDWixLQUFLLENBQVM7SUFDZCxNQUFNLENBQVM7SUFDZixjQUFjLENBQVM7SUFDdkIsU0FBUyxDQUEyQjtJQUU3QyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFbEYsSUFBK0IsU0FBUztRQUN0QyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBQ0QsSUFBOEIsUUFBUTtRQUNwQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBQ0QsSUFBZ0MsVUFBVTtRQUN4QyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0QsSUFBaUMsV0FBVztRQUMxQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRXdDLFdBQVcsQ0FBQyxLQUFtQjtRQUN0RSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQUVELEVBQUUsQ0FBQyxLQUFhO1FBQ2QsT0FBTyxHQUFHLEtBQUssSUFBSSxDQUFBO0lBQ3JCLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBUztRQUNiLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUE7SUFDaEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFTO1FBQ2QsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQVUsRUFBRSxFQUFVO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3BELENBQUM7K0dBMUNVLHFCQUFxQjs2REFBckIscUJBQXFCO1lBQXJCLDRHQUFBLHVCQUFtQixJQUFFOztZQUFyQixxQ0FBcUIscUJBQUEseUJBQUEsMkJBQUE7OztpRkFBckIscUJBQXFCO2NBUmpDLFNBQVM7MkJBQ0UsdUJBQXVCLFFBRzNCO29CQUNKLGFBQWEsRUFBRSxrQkFBa0I7aUJBQ2xDO2dCQUdRLElBQUk7a0JBQVosS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBSXlCLFNBQVM7a0JBQXZDLFdBQVc7bUJBQUMsWUFBWTtZQUdLLFFBQVE7a0JBQXJDLFdBQVc7bUJBQUMsV0FBVztZQUdRLFVBQVU7a0JBQXpDLFdBQVc7bUJBQUMsYUFBYTtZQUdPLFdBQVc7a0JBQTNDLFdBQVc7bUJBQUMsY0FBYztZQUljLFdBQVc7a0JBQW5ELFlBQVk7bUJBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDOztrRkF2QjVCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdXNlRHJhZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9kcmFnJztcclxuaW1wb3J0IHsgTWluaW1hcERhdGEgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21pbmltYXAtbWluaS12aWV3cG9ydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmktdmlld3BvcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21pbmktdmlld3BvcnQuY29tcG9uZW50LnNhc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnZGF0YS10ZXN0aWQnOiAnbWluaW1hcC12aWV3cG9ydCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNaW5pVmlld3BvcnRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGxlZnQhOiBudW1iZXJcclxuICBASW5wdXQoKSB0b3AhOiBudW1iZXJcclxuICBASW5wdXQoKSB3aWR0aCE6IG51bWJlclxyXG4gIEBJbnB1dCgpIGhlaWdodCE6IG51bWJlclxyXG4gIEBJbnB1dCgpIGNvbnRhaW5lcldpZHRoITogbnVtYmVyXHJcbiAgQElucHV0KCkgdHJhbnNsYXRlITogTWluaW1hcERhdGFbJ3RyYW5zbGF0ZSddXHJcblxyXG4gIGRyYWcgPSB1c2VEcmFnKChkeCwgZHkpID0+IHRoaXMub25EcmFnKGR4LCBkeSksIGUgPT4gKHsgeDogZS5wYWdlWCwgeTogZS5wYWdlWSB9KSlcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5sZWZ0JykgZ2V0IHN0eWxlTGVmdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnB4KHRoaXMuc2NhbGUodGhpcy5sZWZ0KSlcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50b3AnKSBnZXQgc3R5bGVUb3AoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5weCh0aGlzLnNjYWxlKHRoaXMudG9wKSlcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIGdldCBzdHlsZVdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHgodGhpcy5zY2FsZSh0aGlzLndpZHRoKSlcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKSBnZXQgc3R5bGVIZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5weCh0aGlzLnNjYWxlKHRoaXMuaGVpZ2h0KSlcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgWyckZXZlbnQnXSkgcG9pbnRlcmRvd24oZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHRoaXMuZHJhZy5zdGFydChldmVudClcclxuICB9XHJcblxyXG4gIHB4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBgJHt2YWx1ZX1weGBcclxuICB9XHJcblxyXG4gIHNjYWxlKHY6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHYgKiB0aGlzLmNvbnRhaW5lcldpZHRoXHJcbiAgfVxyXG5cclxuICBpbnZlcnQodjogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdiAvIHRoaXMuY29udGFpbmVyV2lkdGhcclxuICB9XHJcblxyXG4gIG9uRHJhZyhkeDogbnVtYmVyLCBkeTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZSh0aGlzLmludmVydCgtZHgpLCB0aGlzLmludmVydCgtZHkpKVxyXG4gIH1cclxufVxyXG4iXX0=