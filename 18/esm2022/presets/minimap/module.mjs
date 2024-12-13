import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimapComponent } from './components/minimap/minimap.component';
import { MiniViewportComponent } from './components/mini-viewport/mini-viewport.component';
import { MiniNodeComponent } from './components/mini-node/mini-node.component';
import * as i0 from "@angular/core";
export class ReteMinimapModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbmcxOC8uc3JjL3ByZXNldHMvbWluaW1hcC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0FBaUIvRSxNQUFNLE9BQU8saUJBQWlCOzJHQUFqQixpQkFBaUI7NERBQWpCLGlCQUFpQjtnRUFSMUIsWUFBWTs7aUZBUUgsaUJBQWlCO2NBZjdCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQixpQkFBaUI7aUJBQ2xCO2FBQ0Y7O3dGQUNZLGlCQUFpQixtQkFiMUIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixpQkFBaUIsYUFHakIsWUFBWSxhQUdaLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1pbmltYXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWluaW1hcC9taW5pbWFwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1pbmlWaWV3cG9ydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9taW5pLXZpZXdwb3J0L21pbmktdmlld3BvcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWluaU5vZGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWluaS1ub2RlL21pbmktbm9kZS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1pbmltYXBDb21wb25lbnQsXHJcbiAgICBNaW5pVmlld3BvcnRDb21wb25lbnQsXHJcbiAgICBNaW5pTm9kZUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBNaW5pbWFwQ29tcG9uZW50LFxyXG4gICAgTWluaVZpZXdwb3J0Q29tcG9uZW50LFxyXG4gICAgTWluaU5vZGVDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXRlTWluaW1hcE1vZHVsZSB7fVxyXG4iXX0=