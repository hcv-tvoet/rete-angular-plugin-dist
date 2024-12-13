import { Component, Input } from '@angular/core';
import { ClassicPreset } from 'rete';
import * as i0 from "@angular/core";
export class ConnectionComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9jbGFzc2ljL2NvbXBvbmVudHMvY29ubmVjdGlvbi9jb25uZWN0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25nMTgvLnNyYy9wcmVzZXRzL2NsYXNzaWMvY29tcG9uZW50cy9jb25uZWN0aW9uL2Nvbm5lY3Rpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFVckMsTUFBTSxPQUFPLG1CQUFtQjtJQUNyQixJQUFJLENBQW9FO0lBQ3hFLEtBQUssQ0FBVTtJQUNmLEdBQUcsQ0FBVTtJQUNiLElBQUksQ0FBUTs2R0FKVixtQkFBbUI7NkRBQW5CLG1CQUFtQjs7WUNYaEMsOEJBQThCO1lBQzFCLHVCQUF3QjtZQUM1QixpQkFBTTs7WUFESSxjQUFlOzs7O2lGRFVaLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLFlBQVk7Z0JBS2IsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csR0FBRztrQkFBWCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLOztrRkFKSyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENsYXNzaWNQcmVzZXQgfSBmcm9tICdyZXRlJztcclxuaW1wb3J0IHsgY2xhc3NpY0Nvbm5lY3Rpb25QYXRoIH0gZnJvbSAncmV0ZS1yZW5kZXItdXRpbHMnXHJcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29ubmVjdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nvbm5lY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nvbm5lY3Rpb24uY29tcG9uZW50LnNhc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YSE6IENsYXNzaWNQcmVzZXQuQ29ubmVjdGlvbjxDbGFzc2ljUHJlc2V0Lk5vZGUsIENsYXNzaWNQcmVzZXQuTm9kZT47XHJcbiAgQElucHV0KCkgc3RhcnQ6IFBvc2l0aW9uXHJcbiAgQElucHV0KCkgZW5kOiBQb3NpdGlvblxyXG4gIEBJbnB1dCgpIHBhdGg6IHN0cmluZ1xyXG59XHJcbiIsIjxzdmcgZGF0YS10ZXN0aWQ9XCJjb25uZWN0aW9uXCI+XHJcbiAgICA8cGF0aCBbYXR0ci5kXT1cInBhdGhcIiAvPlxyXG48L3N2Zz5cclxuIl19