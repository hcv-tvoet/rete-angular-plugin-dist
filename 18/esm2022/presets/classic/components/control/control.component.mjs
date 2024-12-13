import { Component, Input, ChangeDetectorRef, HostListener } from '@angular/core';
import { ClassicPreset } from 'rete';
import * as i0 from "@angular/core";
export class ControlComponent {
    cdr;
    data;
    rendered;
    pointerdown(event) {
        event.stopPropagation();
    }
    constructor(cdr) {
        this.cdr = cdr;
        this.cdr.detach();
    }
    ngOnChanges(changes) {
        const seed = changes['seed'];
        const data = changes['data'];
        if ((seed && seed.currentValue !== seed.previousValue)
            || (data && data.currentValue !== data.previousValue)) {
            this.cdr.detectChanges();
        }
        requestAnimationFrame(() => this.rendered());
    }
    onChange(e) {
        const target = e.target;
        const value = (this.data.type === 'number'
            ? +target.value
            : target.value);
        this.data.setValue(value);
        this.cdr.detectChanges();
    }
    static ɵfac = function ControlComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ControlComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ControlComponent, selectors: [["ng-component"]], hostBindings: function ControlComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("pointerdown", function ControlComponent_pointerdown_HostBindingHandler($event) { return ctx.pointerdown($event); });
        } }, inputs: { data: "data", rendered: "rendered" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 3, consts: [[3, "input", "value", "readonly", "type"]], template: function ControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("input", function ControlComponent_Template_input_input_0_listener($event) { return ctx.onChange($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("value", ctx.data.value)("readonly", ctx.data.readonly)("type", ctx.data.type);
        } }, styles: ["input[_ngcontent-%COMP%]{width:100%;border-radius:30px;background-color:#fff;padding:2px 6px;border:1px solid #999;font-size:110%;box-sizing:border-box}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ControlComponent, [{
        type: Component,
        args: [{ template: "<input\r\n  [value]=\"data.value\"\r\n  [readonly]=\"data.readonly\"\r\n  [type]=\"data.type\"\r\n  (input)=\"onChange($event)\"\r\n/>\r\n", styles: ["input{width:100%;border-radius:30px;background-color:#fff;padding:2px 6px;border:1px solid #999;font-size:110%;box-sizing:border-box}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }], { data: [{
            type: Input
        }], rendered: [{
            type: Input
        }], pointerdown: [{
            type: HostListener,
            args: ['pointerdown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ControlComponent, { className: "ControlComponent", filePath: "presets/classic/components/control/control.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9jbGFzc2ljL2NvbXBvbmVudHMvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL2NsYXNzaWMvY29tcG9uZW50cy9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQU1yQyxNQUFNLE9BQU8sZ0JBQWdCO0lBVVA7SUFUWCxJQUFJLENBQWlDO0lBQ3JDLFFBQVEsQ0FBTztJQUlqQixXQUFXLENBQUMsS0FBVTtRQUMzQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRTVCLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDO2VBQ2pELENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUMxQixDQUFDO1FBQ0QscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFRO1FBQ2YsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQTBCLENBQUE7UUFDM0MsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRO1lBQ3hDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ2YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQTJDLENBQUE7UUFFM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUMxQixDQUFDOzBHQWpDVSxnQkFBZ0I7NkRBQWhCLGdCQUFnQjtZQUFoQix1R0FBQSx1QkFBbUIsSUFBSDs7WUNQN0IsZ0NBS0U7WUFEQSxrR0FBUyxvQkFBZ0IsSUFBQztZQUo1QixpQkFLRTs7WUFGQSxBQURBLEFBREEsc0NBQW9CLCtCQUNNLHVCQUNSOzs7aUZESVAsZ0JBQWdCO2NBSjVCLFNBQVM7O2tEQUtDLElBQUk7a0JBQVosS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFJQyxXQUFXO2tCQURqQixZQUFZO21CQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0ZBTDVCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGFzc2ljUHJlc2V0IH0gZnJvbSAncmV0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogYC4vY29udHJvbC5jb21wb25lbnQuaHRtbGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udHJvbC5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29tcG9uZW50PFQgZXh0ZW5kcyAndGV4dCcgfCAnbnVtYmVyJz4gaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGRhdGEhOiBDbGFzc2ljUHJlc2V0LklucHV0Q29udHJvbDxUPjtcclxuICBASW5wdXQoKSByZW5kZXJlZCE6IGFueTtcclxuXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgWyckZXZlbnQnXSlcclxuICBwdWJsaWMgcG9pbnRlcmRvd24oZXZlbnQ6IGFueSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIHRoaXMuY2RyLmRldGFjaCgpXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWVkID0gY2hhbmdlc1snc2VlZCddXHJcbiAgICBjb25zdCBkYXRhID0gY2hhbmdlc1snZGF0YSddXHJcblxyXG4gICAgaWYgKChzZWVkICYmIHNlZWQuY3VycmVudFZhbHVlICE9PSBzZWVkLnByZXZpb3VzVmFsdWUpXHJcbiAgICAgIHx8IChkYXRhICYmIGRhdGEuY3VycmVudFZhbHVlICE9PSBkYXRhLnByZXZpb3VzVmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKVxyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucmVuZGVyZWQoKSlcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGU6IEV2ZW50KSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICBjb25zdCB2YWx1ZSA9ICh0aGlzLmRhdGEudHlwZSA9PT0gJ251bWJlcidcclxuICAgICAgPyArdGFyZ2V0LnZhbHVlXHJcbiAgICAgIDogdGFyZ2V0LnZhbHVlKSBhcyBDbGFzc2ljUHJlc2V0LklucHV0Q29udHJvbDxUPlsndmFsdWUnXVxyXG5cclxuICAgIHRoaXMuZGF0YS5zZXRWYWx1ZSh2YWx1ZSlcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKVxyXG4gIH1cclxufVxyXG4iLCI8aW5wdXRcclxuICBbdmFsdWVdPVwiZGF0YS52YWx1ZVwiXHJcbiAgW3JlYWRvbmx5XT1cImRhdGEucmVhZG9ubHlcIlxyXG4gIFt0eXBlXT1cImRhdGEudHlwZVwiXHJcbiAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4vPlxyXG4iXX0=