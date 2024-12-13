import { getUID, ClassicPreset, Scope } from 'rete';
import { getDOMSocketPosition, loopConnectionPath, classicConnectionPath } from 'rete-render-utils';
import * as i0 from '@angular/core';
import { Directive, Input, Component, HostBinding, HostListener, EventEmitter, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BaseAreaPlugin } from 'rete-area-plugin';
import { createCustomElement } from '@angular/elements';

class RefDirective {
    el;
    data;
    emit;
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
        this.emit({ type: 'render', data: { ...this.data, element: this.el.nativeElement } });
    }
    ngOnDestroy() {
        this.emit({ type: 'unmount', data: { element: this.el.nativeElement } });
    }
    static ɵfac = function RefDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RefDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RefDirective, selectors: [["", "refComponent", ""]], inputs: { data: "data", emit: "emit" }, features: [i0.ɵɵNgOnChangesFeature] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RefDirective, [{
        type: Directive,
        args: [{
                selector: '[refComponent]'
            }]
    }], () => [{ type: i0.ElementRef }], { data: [{
            type: Input
        }], emit: [{
            type: Input
        }] }); })();

const _c0$1 = (a0, a1, a2, a3) => ({ type: "socket", side: "output", key: a0, nodeId: a1, payload: a2, seed: a3 });
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
    i0.ɵɵproperty("data", i0.ɵɵpureFunction4(4, _c0$1, output_r1.key, ctx_r1.data.id, output_r1.value == null ? null : output_r1.value.socket, ctx_r1.seed))("emit", ctx_r1.emit);
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
class NodeComponent {
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
        } }, dependencies: [i1.NgForOf, i1.NgIf, RefDirective, i1.KeyValuePipe], styles: ["[_nghost-%COMP%]{display:block;background:#6e88ffcc;border:2px solid #4e58bf;border-radius:10px;cursor:pointer;box-sizing:border-box;width:180px;height:auto;padding-bottom:6px;position:relative;-webkit-user-select:none;user-select:none;line-height:initial;font-family:Arial}[_nghost-%COMP%]:hover{background:#8299ffcc}.selected[_nghost-%COMP%]{background:#ffd92c;border-color:#e3c000}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-family:sans-serif;font-size:18px;padding:8px}[_nghost-%COMP%]   .output[_ngcontent-%COMP%]{text-align:right}[_nghost-%COMP%]   .input[_ngcontent-%COMP%]{text-align:left}[_nghost-%COMP%]   .input-title[_ngcontent-%COMP%], [_nghost-%COMP%]   .output-title[_ngcontent-%COMP%]{vertical-align:middle;color:#fff;display:inline-block;font-family:sans-serif;font-size:14px;margin:6px;line-height:24px}[_nghost-%COMP%]   .input-title[hidden][_ngcontent-%COMP%], [_nghost-%COMP%]   .output-title[hidden][_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .output-socket[_ngcontent-%COMP%]{text-align:right;margin-right:-18px;display:inline-block}[_nghost-%COMP%]   .input-socket[_ngcontent-%COMP%]{text-align:left;margin-left:-18px;display:inline-block}[_nghost-%COMP%]   .input-control[_ngcontent-%COMP%]{z-index:1;width:calc(100% - 36px);vertical-align:middle;display:inline-block}[_nghost-%COMP%]   .control[_ngcontent-%COMP%]{padding:6px 18px}"] });
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

class SocketComponent {
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

class ControlComponent {
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

class ConnectionComponent {
    data;
    start;
    end;
    path;
    static ɵfac = function ConnectionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConnectionComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConnectionComponent, selectors: [["connection"]], inputs: { data: "data", start: "start", end: "end", path: "path" }, decls: 2, vars: 1, consts: [["data-testid", "connection"]], template: function ConnectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 0);
            i0.ɵɵelement(1, "path");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵattribute("d", ctx.path);
        } }, styles: ["svg[_ngcontent-%COMP%]{overflow:visible!important;position:absolute;pointer-events:none;width:9999px;height:9999px}svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:none;stroke-width:5px;stroke:#4682b4;pointer-events:auto}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConnectionComponent, [{
        type: Component,
        args: [{ selector: 'connection', template: "<svg data-testid=\"connection\">\r\n    <path [attr.d]=\"path\" />\r\n</svg>\r\n", styles: ["svg{overflow:visible!important;position:absolute;pointer-events:none;width:9999px;height:9999px}svg path{fill:none;stroke-width:5px;stroke:#4682b4;pointer-events:auto}\n"] }]
    }], null, { data: [{
            type: Input
        }], start: [{
            type: Input
        }], end: [{
            type: Input
        }], path: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConnectionComponent, { className: "ConnectionComponent", filePath: "presets/classic/components/connection/connection.component.ts", lineNumber: 12 }); })();

class ConnectionWrapperComponent {
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

/**
 * Classic preset for rendering nodes, connections, controls and sockets.
 */
function setup$3(props) {
    const positionWatcher = typeof props?.socketPositionWatcher === 'undefined'
        ? getDOMSocketPosition() // fix Type instantiation is excessively deep and possibly infinite.
        : props?.socketPositionWatcher;
    const { node, connection, socket, control } = props?.customize || {};
    return {
        attach(plugin) {
            positionWatcher.attach(plugin);
        },
        update(context) {
            const data = context.data.payload;
            if (context.data.type === 'connection') {
                const { start, end } = context.data;
                return {
                    data,
                    ...(start ? { start } : {}),
                    ...(end ? { end } : {}),
                };
            }
            return { data };
        },
        mount(context, plugin) {
            const parent = plugin.parentScope();
            const emit = parent.emit.bind(parent);
            const rendered = () => {
                emit({ type: 'rendered', data: context.data });
            };
            if (context.data.type === 'node') {
                const component = node ? node(context.data) : NodeComponent;
                return {
                    key: `node-${context.data.payload.id}`,
                    component,
                    props: {
                        data: context.data.payload,
                        emit,
                        rendered
                    }
                };
            }
            if (context.data.type === 'connection') {
                const component = connection ? connection(context.data) : ConnectionComponent;
                const id = context.data.payload.id;
                const { sourceOutput, targetInput, source, target } = context.data.payload;
                const { start, end, payload } = context.data;
                return {
                    key: `connection-${id}`,
                    component: ConnectionWrapperComponent,
                    props: {
                        connectionComponent: component,
                        data: payload,
                        start: start || ((change) => positionWatcher.listen(source, 'output', sourceOutput, change)),
                        end: end || ((change) => positionWatcher.listen(target, 'input', targetInput, change)),
                        path: async (start, end) => {
                            const response = await plugin.emit({ type: 'connectionpath', data: { payload, points: [start, end] } });
                            if (!response)
                                return '';
                            const { path, points } = response.data;
                            const curvature = 0.3;
                            if (!path && points.length !== 2)
                                throw new Error('cannot render connection with a custom number of points');
                            if (!path)
                                return payload.isLoop
                                    ? loopConnectionPath(points, curvature, 120)
                                    : classicConnectionPath(points, curvature);
                            return path;
                        },
                        rendered
                    }
                };
            }
            if (context.data.type === 'socket') {
                const component = socket ? socket(context.data) : SocketComponent;
                return {
                    key: `socket-${getUID()}`,
                    component,
                    props: {
                        data: context.data.payload,
                        rendered
                    }
                };
            }
            if (context.data.type === 'control') {
                const component = control
                    ? control(context.data)
                    : (context.data.payload instanceof ClassicPreset.InputControl
                        ? ControlComponent
                        : null);
                if (component) {
                    return {
                        key: `control-${context.data.payload.id}`,
                        component,
                        props: {
                            data: context.data.payload,
                            rendered
                        }
                    };
                }
                return;
            }
            return;
        }
    };
}

var index$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setup: setup$3
});

function debounce(cb) {
    return {
        timeout: null,
        cancel() {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
                this.timeout = null;
            }
        },
        call(delay) {
            this.timeout = window.setTimeout(() => {
                cb();
            }, delay);
        }
    };
}

class ContextMenuSearchComponent {
    value;
    update = new EventEmitter();
    static ɵfac = function ContextMenuSearchComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContextMenuSearchComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContextMenuSearchComponent, selectors: [["context-menu-search"]], inputs: { value: "value" }, outputs: { update: "update" }, decls: 1, vars: 1, consts: [["data-testid", "context-menu-search-input", 1, "search", 3, "input", "value"]], template: function ContextMenuSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("input", function ContextMenuSearchComponent_Template_input_input_0_listener($event) { return ctx.update.emit(($event.target == null ? null : $event.target.value) || ""); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("value", ctx.value);
        } }, styles: [".search[_ngcontent-%COMP%]{color:#fff;padding:1px 8px;border:1px solid white;border-radius:10px;font-size:16px;font-family:serif;width:100%;box-sizing:border-box;background:transparent}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContextMenuSearchComponent, [{
        type: Component,
        args: [{ selector: 'context-menu-search', template: "<input class=\"search\" [value]=\"value\" (input)=\"update.emit($any($event.target)?.value || '')\"\r\n  data-testid=\"context-menu-search-input\" />\r\n", styles: [".search{color:#fff;padding:1px 8px;border:1px solid white;border-radius:10px;font-size:16px;font-family:serif;width:100%;box-sizing:border-box;background:transparent}\n"] }]
    }], null, { value: [{
            type: Input
        }], update: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContextMenuSearchComponent, { className: "ContextMenuSearchComponent", filePath: "presets/context-menu/components/search/search.component.ts", lineNumber: 8 }); })();

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
class ContextMenuItemComponent {
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
class ContextMenuComponent {
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
        } }, dependencies: [i1.NgForOf, i1.NgIf, ContextMenuSearchComponent, ContextMenuItemComponent], styles: ["[_nghost-%COMP%]{display:block;padding:10px;width:120px;margin-top:-20px;margin-left:-60px}", ".block[_ngcontent-%COMP%]{display:block;color:#fff;padding:4px;border-bottom:1px solid rgba(69,103,255,.8);background-color:#6e88ffcc;cursor:pointer;width:100%;position:relative}.block[_ngcontent-%COMP%]:first-child{border-top-left-radius:5px;border-top-right-radius:5px}.block[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.block[_ngcontent-%COMP%]:hover{background-color:#8299ffcc}"] });
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

/**
 * Preset for rendering context menu.
 */
function setup$2(props) {
    const delay = typeof props?.delay === 'undefined' ? 1000 : props.delay;
    return {
        update(context) {
            if (context.data.type === 'contextmenu') {
                return {
                    items: context.data.items,
                    delay,
                    searchBar: context.data.searchBar,
                    onHide: context.data.onHide
                };
            }
        },
        mount(context, plugin) {
            const parent = plugin.parentScope();
            const emit = parent.emit.bind(parent);
            const rendered = () => {
                emit({ type: 'rendered', data: context.data });
            };
            if (context.data.type === 'contextmenu') {
                return {
                    key: 'context-menu',
                    component: ContextMenuComponent,
                    props: {
                        items: context.data.items,
                        delay,
                        searchBar: context.data.searchBar,
                        onHide: context.data.onHide,
                        rendered
                    }
                };
            }
            return null;
        }
    };
}

var index$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setup: setup$2
});

function useDrag(translate, getPointer) {
    return {
        start(e) {
            let previous = { ...getPointer(e) };
            function move(moveEvent) {
                const current = { ...getPointer(moveEvent) };
                const dx = current.x - previous.x;
                const dy = current.y - previous.y;
                previous = current;
                translate(dx, dy);
            }
            function up() {
                window.removeEventListener('pointermove', move);
                window.removeEventListener('pointerup', up);
                window.removeEventListener('pointercancel', up);
            }
            window.addEventListener('pointermove', move);
            window.addEventListener('pointerup', up);
            window.addEventListener('pointercancel', up);
        }
    };
}

class MiniViewportComponent {
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

class MiniNodeComponent {
    left;
    top;
    width;
    height;
    get styleLeft() {
        return this.px(this.left);
    }
    get styleTop() {
        return this.px(this.top);
    }
    get styleWidth() {
        return this.px(this.width);
    }
    get styleHeight() {
        return this.px(this.height);
    }
    px(value) {
        return `${value}px`;
    }
    static ɵfac = function MiniNodeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MiniNodeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MiniNodeComponent, selectors: [["minimap-mini-node"]], hostAttrs: ["data-testid", "minimap-node"], hostVars: 8, hostBindings: function MiniNodeComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵstyleProp("left", ctx.styleLeft)("top", ctx.styleTop)("width", ctx.styleWidth)("height", ctx.styleHeight);
        } }, inputs: { left: "left", top: "top", width: "width", height: "height" }, decls: 0, vars: 0, template: function MiniNodeComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%]{display:block;position:absolute;background:#6e88ffcc;border:1px solid rgba(192,206,212,.6)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MiniNodeComponent, [{
        type: Component,
        args: [{ selector: 'minimap-mini-node', host: {
                    'data-testid': 'minimap-node'
                }, template: "", styles: [":host{display:block;position:absolute;background:#6e88ffcc;border:1px solid rgba(192,206,212,.6)}\n"] }]
    }], null, { left: [{
            type: Input
        }], top: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MiniNodeComponent, { className: "MiniNodeComponent", filePath: "presets/minimap/components/mini-node/mini-node.component.ts", lineNumber: 11 }); })();

function MinimapComponent_minimap_mini_node_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "minimap-mini-node", 2);
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("left", ctx_r1.scale(node_r1.left))("top", ctx_r1.scale(node_r1.top))("width", ctx_r1.scale(node_r1.width))("height", ctx_r1.scale(node_r1.height));
} }
class MinimapComponent {
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
        } }, dependencies: [i1.NgForOf, MiniViewportComponent, MiniNodeComponent], styles: ["[_nghost-%COMP%]{position:absolute;right:24px;bottom:24px;background:#e5eaefa6;padding:20px;overflow:hidden;border:1px solid #b1b7ff;border-radius:8px;box-sizing:border-box}"] });
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

/**
 * Preset for rendering minimap.
 */
function setup$1(props) {
    return {
        update(context) {
            if (context.data.type === 'minimap') {
                return {
                    nodes: context.data.nodes,
                    size: props?.size || 200,
                    ratio: context.data.ratio,
                    viewport: context.data.viewport,
                    translate: context.data.translate,
                    point: context.data.point
                };
            }
            return null;
        },
        mount(context, plugin) {
            const parent = plugin.parentScope();
            const emit = parent.emit.bind(parent);
            const rendered = () => {
                emit({ type: 'rendered', data: context.data });
            };
            if (context.data.type === 'minimap') {
                return {
                    key: 'rete-minimap',
                    component: MinimapComponent,
                    props: {
                        nodes: context.data.nodes,
                        size: props?.size || 200,
                        ratio: context.data.ratio,
                        viewport: context.data.viewport,
                        translate: context.data.translate,
                        point: context.data.point,
                        rendered
                    }
                };
            }
            return null;
        }
    };
}

var index$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setup: setup$1
});

const pinSize = 20;
class PinComponent {
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
class PinsComponent {
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
        } }, dependencies: [i1.NgForOf, PinComponent], encapsulation: 2 });
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

/**
 * Preset for rendering pins.
 */
function setup(props) {
    const getProps = () => ({
        menu: props?.contextMenu || (() => null),
        translate: props?.translate || (() => null),
        down: props?.pointerdown || (() => null)
    });
    return {
        update(context) {
            if (context.data.type === 'reroute-pins') {
                return {
                    ...getProps(),
                    pins: context.data.data.pins
                };
            }
            return null;
        },
        mount(context, plugin) {
            const area = plugin.parentScope(BaseAreaPlugin);
            const rendered = () => {
                area.emit({ type: 'rendered', data: context.data });
            };
            if (context.data.type === 'reroute-pins') {
                return {
                    key: 'rete-reroute',
                    component: PinsComponent,
                    props: {
                        ...getProps(),
                        pins: context.data.data.pins,
                        rendered,
                        getPointer: () => area.area.pointer
                    }
                };
            }
            return null;
        }
    };
}

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setup: setup
});

/**
 * Built-in presets, responsible for rendering different parts of the editor.
 * @module
 */

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    classic: index$4,
    contextMenu: index$3,
    minimap: index$2,
    reroute: index$1
});

class ReteModule {
    static ɵfac = function ReteModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReteModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ReteModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReteModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    RefDirective,
                    NodeComponent,
                    ConnectionComponent,
                    ConnectionWrapperComponent,
                    SocketComponent,
                    ControlComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    RefDirective,
                    NodeComponent,
                    ConnectionComponent,
                    ConnectionWrapperComponent,
                    SocketComponent,
                    ControlComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ReteModule, { declarations: [RefDirective,
        NodeComponent,
        ConnectionComponent,
        ConnectionWrapperComponent,
        SocketComponent,
        ControlComponent], imports: [CommonModule], exports: [RefDirective,
        NodeComponent,
        ConnectionComponent,
        ConnectionWrapperComponent,
        SocketComponent,
        ControlComponent] }); })();

class ReteContextMenuModule {
    static ɵfac = function ReteContextMenuModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReteContextMenuModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ReteContextMenuModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReteContextMenuModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ContextMenuComponent,
                    ContextMenuSearchComponent,
                    ContextMenuItemComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    ContextMenuComponent,
                    ContextMenuSearchComponent,
                    ContextMenuItemComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ReteContextMenuModule, { declarations: [ContextMenuComponent,
        ContextMenuSearchComponent,
        ContextMenuItemComponent], imports: [CommonModule], exports: [ContextMenuComponent,
        ContextMenuSearchComponent,
        ContextMenuItemComponent] }); })();

class ReteMinimapModule {
    static ɵfac = function ReteMinimapModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReteMinimapModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ReteMinimapModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReteMinimapModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MinimapComponent,
                    MiniViewportComponent,
                    MiniNodeComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MinimapComponent,
                    MiniViewportComponent,
                    MiniNodeComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ReteMinimapModule, { declarations: [MinimapComponent,
        MiniViewportComponent,
        MiniNodeComponent], imports: [CommonModule], exports: [MinimapComponent,
        MiniViewportComponent,
        MiniNodeComponent] }); })();

class ReteRerouteModule {
    static ɵfac = function ReteRerouteModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReteRerouteModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ReteRerouteModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReteRerouteModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    PinsComponent,
                    PinComponent,
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    PinsComponent,
                    PinComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ReteRerouteModule, { declarations: [PinsComponent,
        PinComponent], imports: [CommonModule], exports: [PinsComponent,
        PinComponent] }); })();

function getRenderer() {
    const elements = new WeakMap();
    return {
        get(element) {
            return elements.get(element);
        },
        mount(element, key, component, injector, props) {
            // LIMITATION: If an element is remounted with the same identifier, the component cannot be replaced
            const exists = customElements.get(key);
            if (!exists) {
                customElements.define(key, createCustomElement(component, { injector }));
            }
            const ngElement = document.createElement(key);
            Object.keys(props).forEach(key => {
                ngElement[key] = props[key];
            });
            element.appendChild(ngElement);
            elements.set(element, { key, ngElement });
        },
        update({ ngElement }, props) {
            Object.keys(props).forEach(key => {
                ngElement.ngElementStrategy.setInputValue(key, props[key]);
            });
            ngElement.ngElementStrategy.setInputValue('seed', Math.random());
        },
        unmount(element) {
            const existing = elements.get(element);
            if (existing) {
                existing.ngElement.remove();
                elements.delete(element);
            }
        }
    };
}
/**
 * Angular plugin. Renders nodes, connections and other elements using React.
 * @priority 9
 * @emits connectionpath
 * @listens render
 * @listens unmount
 */
class AngularPlugin extends Scope {
    params;
    presets = [];
    renderer;
    owners = new WeakMap();
    /**
     * @constructor
     * @param params Plugin properties
     * @param params.injector Angular's Injector instance
     */
    constructor(params) {
        super('angular-render');
        this.params = params;
        this.renderer = getRenderer();
        this.addPipe(context => {
            if (!context || typeof context !== 'object' || !('type' in context))
                return context;
            if (context.type === 'unmount') {
                this.unmount(context.data.element);
            }
            else if (context.type === 'render') {
                if ('filled' in context.data && context.data.filled) {
                    return context;
                }
                if (this.mount(context.data.element, context)) {
                    return {
                        ...context,
                        data: {
                            ...context.data,
                            filled: true
                        }
                    };
                }
            }
            return context;
        });
    }
    setParent(scope) {
        super.setParent(scope);
        this.presets.forEach(preset => {
            if (preset.attach)
                preset.attach(this);
        });
    }
    unmount(element) {
        this.owners.delete(element);
        this.renderer.unmount(element);
    }
    mount(element, context) {
        const existing = this.renderer.get(element);
        if (existing) {
            this.presets.forEach(preset => {
                if (this.owners.get(element) !== preset)
                    return;
                const result = preset.update(context, this);
                if (result) {
                    this.renderer.update(existing, result);
                }
            });
            return true;
        }
        for (const preset of this.presets) {
            const result = preset.mount(context, this);
            if (!result)
                continue;
            const { key, component, props } = result;
            this.renderer.mount(element, key, component, this.params.injector, props);
            this.owners.set(element, preset);
            return true;
        }
        return;
    }
    /**
     * Adds a preset to the plugin.
     * @param preset Preset that can render nodes, connections and other elements.
     */
    addPreset(preset) {
        const local = preset;
        if (local.attach)
            local.attach(this);
        this.presets.push(local);
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { AngularPlugin, ConnectionComponent, ConnectionWrapperComponent, ContextMenuComponent, ContextMenuItemComponent, ContextMenuSearchComponent, ControlComponent, MiniNodeComponent, MiniViewportComponent, MinimapComponent, NodeComponent, PinComponent, PinsComponent, index as Presets, RefDirective, ReteContextMenuModule, ReteMinimapModule, ReteModule, ReteRerouteModule, SocketComponent };
//# sourceMappingURL=rete-angular-plugin-ng18.mjs.map
