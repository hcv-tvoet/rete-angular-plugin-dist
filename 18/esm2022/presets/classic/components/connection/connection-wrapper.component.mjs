import { Component, Input, ChangeDetectorRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ClassicPreset } from 'rete';
import * as i0 from "@angular/core";
export class ConnectionWrapperComponent {
    cdr;
    viewContainerRef;
    componentFactoryResolver;
    data;
    start;
    end;
    path;
    rendered;
    connectionComponent;
    ref;
    startOb = null;
    get _start() {
        return 'x' in this.start ? this.start : this.startOb;
    }
    endOb = null;
    get _end() {
        return 'x' in this.end ? this.end : this.endOb;
    }
    _path;
    constructor(cdr, viewContainerRef, componentFactoryResolver) {
        this.cdr = cdr;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.cdr.detach();
    }
    async ngOnChanges() {
        await this.updatePath();
        requestAnimationFrame(() => this.rendered());
        this.cdr.detectChanges();
        this.update();
    }
    async updatePath() {
        if (this._start && this._end) {
            this._path = await this.path(this._start, this._end);
        }
    }
    ngOnInit() {
        if (typeof this.start === 'function') {
            this.start(async (value) => {
                this.startOb = value;
                await this.updatePath();
                this.cdr.detectChanges();
                this.update();
            });
        }
        if (typeof this.end === 'function') {
            this.end(async (value) => {
                this.endOb = value;
                await this.updatePath();
                this.cdr.detectChanges();
                this.update();
            });
        }
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.connectionComponent);
        this.viewContainerRef.clear();
        this.ref = this.viewContainerRef.createComponent(componentFactory);
        this.update();
    }
    update() {
        this.ref.instance.data = this.data;
        this.ref.instance.start = this._start;
        this.ref.instance.end = this._end;
        this.ref.instance.path = this._path;
    }
    static ɵfac = function ConnectionWrapperComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConnectionWrapperComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConnectionWrapperComponent, selectors: [["ng-component"]], inputs: { data: "data", start: "start", end: "end", path: "path", rendered: "rendered", connectionComponent: "connectionComponent" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function ConnectionWrapperComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConnectionWrapperComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }], { data: [{
            type: Input
        }], start: [{
            type: Input
        }], end: [{
            type: Input
        }], path: [{
            type: Input
        }], rendered: [{
            type: Input
        }], connectionComponent: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConnectionWrapperComponent, { className: "ConnectionWrapperComponent", filePath: "presets/classic/components/connection/connection-wrapper.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi13cmFwcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL2NsYXNzaWMvY29tcG9uZW50cy9jb25uZWN0aW9uL2Nvbm5lY3Rpb24td3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsaUJBQWlCLEVBQWEsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ2pKLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBUXJDLE1BQU0sT0FBTywwQkFBMEI7SUFvQmpCO0lBQStCO0lBQTRDO0lBbkJ0RixJQUFJLENBQW9FO0lBQ3hFLEtBQUssQ0FBNkI7SUFDbEMsR0FBRyxDQUE2QjtJQUNoQyxJQUFJLENBQXNEO0lBQzFELFFBQVEsQ0FBTTtJQUNkLG1CQUFtQixDQUFNO0lBRWxDLEdBQUcsQ0FBb0I7SUFFdkIsT0FBTyxHQUFvQixJQUFJLENBQUE7SUFDL0IsSUFBSSxNQUFNO1FBQ1IsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN0RCxDQUFDO0lBQ0QsS0FBSyxHQUFvQixJQUFJLENBQUE7SUFDN0IsSUFBSSxJQUFJO1FBQ04sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNoRCxDQUFDO0lBQ0QsS0FBSyxDQUFRO0lBRWIsWUFBb0IsR0FBc0IsRUFBUyxnQkFBa0MsRUFBVSx3QkFBa0Q7UUFBN0gsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBUyxxQkFBZ0Is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QUFLOztrRkFOSywwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkNoYW5nZXMsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENsYXNzaWNQcmVzZXQgfSBmcm9tICdyZXRlJztcclxuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XHJcblxyXG50eXBlIFBvc2l0aW9uV2F0Y2hlciA9IChjYjogKHZhbHVlOiBQb3NpdGlvbikgPT4gdm9pZCkgPT4gKCgpID0+IHZvaWQpXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25XcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXN7XHJcbiAgQElucHV0KCkgZGF0YSE6IENsYXNzaWNQcmVzZXQuQ29ubmVjdGlvbjxDbGFzc2ljUHJlc2V0Lk5vZGUsIENsYXNzaWNQcmVzZXQuTm9kZT47XHJcbiAgQElucHV0KCkgc3RhcnQhOiBQb3NpdGlvbiB8IFBvc2l0aW9uV2F0Y2hlclxyXG4gIEBJbnB1dCgpIGVuZCE6IFBvc2l0aW9uIHwgUG9zaXRpb25XYXRjaGVyXHJcbiAgQElucHV0KCkgcGF0aCE6IChzdGFydDogUG9zaXRpb24sIGVuZDogUG9zaXRpb24pID0+IFByb21pc2U8c3RyaW5nPlxyXG4gIEBJbnB1dCgpIHJlbmRlcmVkITogYW55XHJcbiAgQElucHV0KCkgY29ubmVjdGlvbkNvbXBvbmVudCE6IGFueVxyXG5cclxuICByZWYhOiBDb21wb25lbnRSZWY8YW55PlxyXG5cclxuICBzdGFydE9iOiBQb3NpdGlvbiB8IG51bGwgPSBudWxsXHJcbiAgZ2V0IF9zdGFydCgpOiBQb3NpdGlvbiB8IG51bGwge1xyXG4gICAgcmV0dXJuICd4JyBpbiB0aGlzLnN0YXJ0ID8gdGhpcy5zdGFydCA6IHRoaXMuc3RhcnRPYlxyXG4gIH1cclxuICBlbmRPYjogUG9zaXRpb24gfCBudWxsID0gbnVsbFxyXG4gIGdldCBfZW5kKCk6IFBvc2l0aW9uIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gJ3gnIGluIHRoaXMuZW5kID8gdGhpcy5lbmQgOiB0aGlzLmVuZE9iXHJcbiAgfVxyXG4gIF9wYXRoOiBzdHJpbmdcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgIHtcclxuICAgIHRoaXMuY2RyLmRldGFjaCgpXHJcbiAgfVxyXG5cclxuICBhc3luYyBuZ09uQ2hhbmdlcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IHRoaXMudXBkYXRlUGF0aCgpXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXJlZCgpKVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpXHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVQYXRoKCkge1xyXG4gICAgaWYgKHRoaXMuX3N0YXJ0ICYmIHRoaXMuX2VuZCkge1xyXG4gICAgICB0aGlzLl9wYXRoID0gYXdhaXQgdGhpcy5wYXRoKHRoaXMuX3N0YXJ0LCB0aGlzLl9lbmQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5zdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLnN0YXJ0KGFzeW5jIHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLnN0YXJ0T2IgPSB2YWx1ZVxyXG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlUGF0aCgpXHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmVuZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLmVuZChhc3luYyB2YWx1ZSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbmRPYiA9IHZhbHVlXHJcbiAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVQYXRoKClcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKClcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb25uZWN0aW9uQ29tcG9uZW50KTtcclxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG5cclxuICAgIHRoaXMucmVmID0gdGhpcy52aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcclxuICAgIHRoaXMudXBkYXRlKClcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMucmVmLmluc3RhbmNlLmRhdGEgPSB0aGlzLmRhdGFcclxuICAgIHRoaXMucmVmLmluc3RhbmNlLnN0YXJ0ID0gdGhpcy5fc3RhcnRcclxuICAgIHRoaXMucmVmLmluc3RhbmNlLmVuZCA9IHRoaXMuX2VuZFxyXG4gICAgdGhpcy5yZWYuaW5zdGFuY2UucGF0aCA9IHRoaXMuX3BhdGhcclxuICB9XHJcbn1cclxuIl19