import { Component, Input, ChangeDetectorRef, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';
import { useDrag } from '../../../../shared/drag';
import * as i0 from "@angular/core";
const pinSize = 20;
export class PinComponent {
    cdr;
    position;
    selected;
    getPointer;
    menu = new EventEmitter();
    translate = new EventEmitter();
    down = new EventEmitter();
    drag = useDrag((dx, dy) => {
        this.translate.emit({ dx, dy });
    }, () => this.getPointer());
    get _selected() {
        return this.selected;
    }
    get top() {
        return `${this.position.y - pinSize / 2}px`;
    }
    get left() {
        return `${this.position.x - pinSize / 2}px`;
    }
    pointerdown(event) {
        event.stopPropagation();
        event.preventDefault();
        this.drag.start(event);
        this.down.emit();
    }
    contextmenu(event) {
        event.stopPropagation();
        event.preventDefault();
        this.menu.emit();
    }
    constructor(cdr) {
        this.cdr = cdr;
        // this.cdr.detach()
    }
    ngOnChanges() {
        // this.cdr.detectChanges()
        // requestAnimationFrame(() => this.rendered())
    }
    static ɵfac = function PinComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PinComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PinComponent, selectors: [["reroute-pin"]], hostAttrs: ["data-testid", "pin"], hostVars: 6, hostBindings: function PinComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("pointerdown", function PinComponent_pointerdown_HostBindingHandler($event) { return ctx.pointerdown($event); })("contextmenu", function PinComponent_contextmenu_HostBindingHandler($event) { return ctx.contextmenu($event); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("top", ctx.top)("left", ctx.left);
            i0.ɵɵclassProp("selected", ctx._selected);
        } }, inputs: { position: "position", selected: "selected", getPointer: "getPointer" }, outputs: { menu: "menu", translate: "translate", down: "down" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function PinComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%]{display:block;width:20px;height:20px;box-sizing:border-box;background:#4682b4;border:2px solid white;border-radius:20px;position:absolute}.selected[_nghost-%COMP%]{background:#ffd92c}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PinComponent, [{
        type: Component,
        args: [{ selector: 'reroute-pin', template: '', host: {
                    'data-testid': 'pin'
                }, styles: [":host{display:block;width:20px;height:20px;box-sizing:border-box;background:#4682b4;border:2px solid white;border-radius:20px;position:absolute}:host.selected{background:#ffd92c}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }], { position: [{
            type: Input
        }], selected: [{
            type: Input
        }], getPointer: [{
            type: Input
        }], menu: [{
            type: Output
        }], translate: [{
            type: Output
        }], down: [{
            type: Output
        }], _selected: [{
            type: HostBinding,
            args: ['class.selected']
        }], top: [{
            type: HostBinding,
            args: ['style.top']
        }], left: [{
            type: HostBinding,
            args: ['style.left']
        }], pointerdown: [{
            type: HostListener,
            args: ['pointerdown', ['$event']]
        }], contextmenu: [{
            type: HostListener,
            args: ['contextmenu', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PinComponent, { className: "PinComponent", filePath: "presets/reroute/components/pin/pin.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL3Jlcm91dGUvY29tcG9uZW50cy9waW4vcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBYSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEksT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFBOztBQUVqRCxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUE7QUFVbEIsTUFBTSxPQUFPLFlBQVk7SUFtQ0g7SUFsQ1gsUUFBUSxDQUFXO0lBQ25CLFFBQVEsQ0FBVTtJQUNsQixVQUFVLENBQWlCO0lBQzFCLElBQUksR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFBO0lBQy9CLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBOEIsQ0FBQTtJQUMxRCxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQTtJQUV6QyxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDakMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO0lBRTNCLElBQW1DLFNBQVM7UUFDMUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3RCLENBQUM7SUFDRCxJQUE4QixHQUFHO1FBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUE7SUFDN0MsQ0FBQztJQUNELElBQStCLElBQUk7UUFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQTtJQUM3QyxDQUFDO0lBQ3dDLFdBQVcsQ0FBQyxLQUFtQjtRQUN0RSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDdkIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUN3QyxXQUFXLENBQUMsS0FBaUI7UUFDcEUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ3ZCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN4QyxvQkFBb0I7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDVCwyQkFBMkI7UUFDM0IsK0NBQStDO0lBQ2pELENBQUM7c0dBMUNVLFlBQVk7NkRBQVosWUFBWTtZQUFaLG1HQUFBLHVCQUFtQixJQUFQLHNGQUFaLHVCQUFtQixJQUFQOztZQUFaLDhCQUFZLGtCQUFBO1lBQVoseUNBQVk7OztpRkFBWixZQUFZO2NBUnhCLFNBQVM7MkJBQ0UsYUFBYSxZQUNiLEVBQUUsUUFFTjtvQkFDSixhQUFhLEVBQUUsS0FBSztpQkFDckI7a0RBR1EsUUFBUTtrQkFBaEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0ksSUFBSTtrQkFBYixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTTtZQU00QixTQUFTO2tCQUEzQyxXQUFXO21CQUFDLGdCQUFnQjtZQUdDLEdBQUc7a0JBQWhDLFdBQVc7bUJBQUMsV0FBVztZQUdPLElBQUk7a0JBQWxDLFdBQVc7bUJBQUMsWUFBWTtZQUdnQixXQUFXO2tCQUFuRCxZQUFZO21CQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQU9FLFdBQVc7a0JBQW5ELFlBQVk7bUJBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDOztrRkE1QjVCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25DaGFuZ2VzLCBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0IHsgdXNlRHJhZyB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9kcmFnJ1xyXG5cclxuY29uc3QgcGluU2l6ZSA9IDIwXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Jlcm91dGUtcGluJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGluLmNvbXBvbmVudC5zYXNzJ10sXHJcbiAgaG9zdDoge1xyXG4gICAgJ2RhdGEtdGVzdGlkJzogJ3BpbidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uITogUG9zaXRpb25cclxuICBASW5wdXQoKSBzZWxlY3RlZD86IGJvb2xlYW5cclxuICBASW5wdXQoKSBnZXRQb2ludGVyITogKCkgPT4gUG9zaXRpb25cclxuICBAT3V0cHV0KCkgbWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKVxyXG4gIEBPdXRwdXQoKSB0cmFuc2xhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZHg6IG51bWJlciwgZHk6IG51bWJlciB9PigpXHJcbiAgQE91dHB1dCgpIGRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KClcclxuXHJcbiAgZHJhZyA9IHVzZURyYWcoKGR4LCBkeSkgPT4ge1xyXG4gICAgdGhpcy50cmFuc2xhdGUuZW1pdCh7IGR4LCBkeSB9KVxyXG4gIH0sICgpID0+IHRoaXMuZ2V0UG9pbnRlcigpKVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJykgZ2V0IF9zZWxlY3RlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkXHJcbiAgfVxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUudG9wJykgZ2V0IHRvcCgpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLnBvc2l0aW9uLnkgLSBwaW5TaXplIC8gMn1weGBcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5sZWZ0JykgZ2V0IGxlZnQoKSB7XHJcbiAgICByZXR1cm4gYCR7dGhpcy5wb3NpdGlvbi54IC0gcGluU2l6ZSAvIDJ9cHhgXHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgWyckZXZlbnQnXSkgcG9pbnRlcmRvd24oZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICB0aGlzLmRyYWcuc3RhcnQoZXZlbnQpXHJcbiAgICB0aGlzLmRvd24uZW1pdCgpXHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSkgY29udGV4dG1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgdGhpcy5tZW51LmVtaXQoKVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAvLyB0aGlzLmNkci5kZXRhY2goKVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKClcclxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnJlbmRlcmVkKCkpXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=