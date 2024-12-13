import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodeComponent } from './presets/classic/components/node/node.component';
import { ConnectionComponent } from './presets/classic/components/connection/connection.component';
import { SocketComponent } from './presets/classic/components/socket/socket.component';
import { ConnectionWrapperComponent } from './presets/classic/components/connection/connection-wrapper.component';
import { ControlComponent } from './presets/classic/components/control/control.component';
import { RefDirective } from './ref';
import * as i0 from "@angular/core";
export class ReteModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbmcxOC8uc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDbkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxPQUFPLENBQUM7O0FBdUJyQyxNQUFNLE9BQU8sVUFBVTtvR0FBVixVQUFVOzREQUFWLFVBQVU7Z0VBWG5CLFlBQVk7O2lGQVdILFVBQVU7Y0FyQnRCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osWUFBWTtvQkFDWixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkIsMEJBQTBCO29CQUMxQixlQUFlO29CQUNmLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixtQkFBbUI7b0JBQ25CLDBCQUEwQjtvQkFDMUIsZUFBZTtvQkFDZixnQkFBZ0I7aUJBQ2pCO2FBQ0Y7O3dGQUNZLFVBQVUsbUJBbkJuQixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsZUFBZTtRQUNmLGdCQUFnQixhQUdoQixZQUFZLGFBR1osWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLGVBQWU7UUFDZixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vcHJlc2V0cy9jbGFzc2ljL2NvbXBvbmVudHMvbm9kZS9ub2RlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbm5lY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3ByZXNldHMvY2xhc3NpYy9jb21wb25lbnRzL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb2NrZXRDb21wb25lbnQgfSBmcm9tICcuL3ByZXNldHMvY2xhc3NpYy9jb21wb25lbnRzL3NvY2tldC9zb2NrZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29ubmVjdGlvbldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL3ByZXNldHMvY2xhc3NpYy9jb21wb25lbnRzL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3ByZXNldHMvY2xhc3NpYy9jb21wb25lbnRzL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWZEaXJlY3RpdmUgfSBmcm9tICcuL3JlZic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUmVmRGlyZWN0aXZlLFxyXG4gICAgTm9kZUNvbXBvbmVudCxcclxuICAgIENvbm5lY3Rpb25Db21wb25lbnQsXHJcbiAgICBDb25uZWN0aW9uV3JhcHBlckNvbXBvbmVudCxcclxuICAgIFNvY2tldENvbXBvbmVudCxcclxuICAgIENvbnRyb2xDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUmVmRGlyZWN0aXZlLFxyXG4gICAgTm9kZUNvbXBvbmVudCxcclxuICAgIENvbm5lY3Rpb25Db21wb25lbnQsXHJcbiAgICBDb25uZWN0aW9uV3JhcHBlckNvbXBvbmVudCxcclxuICAgIFNvY2tldENvbXBvbmVudCxcclxuICAgIENvbnRyb2xDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXRlTW9kdWxlIHsgfVxyXG4iXX0=