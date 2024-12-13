import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class MiniNodeComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL21pbmltYXAvY29tcG9uZW50cy9taW5pLW5vZGUvbWluaS1ub2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBVTlELE1BQU0sT0FBTyxpQkFBaUI7SUFDbkIsSUFBSSxDQUFTO0lBQ2IsR0FBRyxDQUFTO0lBQ1osS0FBSyxDQUFTO0lBQ2QsTUFBTSxDQUFTO0lBRXhCLElBQStCLFNBQVM7UUFDdEMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsSUFBOEIsUUFBUTtRQUNwQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFDRCxJQUFnQyxVQUFVO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUNELElBQWlDLFdBQVc7UUFDMUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsRUFBRSxDQUFDLEtBQWE7UUFDZCxPQUFPLEdBQUcsS0FBSyxJQUFJLENBQUE7SUFDckIsQ0FBQzsyR0FyQlUsaUJBQWlCOzZEQUFqQixpQkFBaUI7WUFBakIscUNBQWlCLHFCQUFBLHlCQUFBLDJCQUFBOzs7aUZBQWpCLGlCQUFpQjtjQVI3QixTQUFTOzJCQUNFLG1CQUFtQixRQUd2QjtvQkFDSixhQUFhLEVBQUUsY0FBYztpQkFDOUI7Z0JBR1EsSUFBSTtrQkFBWixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBRXlCLFNBQVM7a0JBQXZDLFdBQVc7bUJBQUMsWUFBWTtZQUdLLFFBQVE7a0JBQXJDLFdBQVc7bUJBQUMsV0FBVztZQUdRLFVBQVU7a0JBQXpDLFdBQVc7bUJBQUMsYUFBYTtZQUdPLFdBQVc7a0JBQTNDLFdBQVc7bUJBQUMsY0FBYzs7a0ZBZmhCLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21pbmltYXAtbWluaS1ub2RlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWluaS1ub2RlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9taW5pLW5vZGUuY29tcG9uZW50LnNhc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnZGF0YS10ZXN0aWQnOiAnbWluaW1hcC1ub2RlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1pbmlOb2RlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBsZWZ0ITogbnVtYmVyXHJcbiAgQElucHV0KCkgdG9wITogbnVtYmVyXHJcbiAgQElucHV0KCkgd2lkdGghOiBudW1iZXJcclxuICBASW5wdXQoKSBoZWlnaHQhOiBudW1iZXJcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5sZWZ0JykgZ2V0IHN0eWxlTGVmdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnB4KHRoaXMubGVmdClcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50b3AnKSBnZXQgc3R5bGVUb3AoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5weCh0aGlzLnRvcClcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpIGdldCBzdHlsZVdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHgodGhpcy53aWR0aClcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKSBnZXQgc3R5bGVIZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5weCh0aGlzLmhlaWdodClcclxuICB9XHJcblxyXG4gIHB4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBgJHt2YWx1ZX1weGBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==