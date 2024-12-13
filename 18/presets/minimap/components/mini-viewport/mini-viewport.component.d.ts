import { MinimapData } from '../../types';
import * as i0 from "@angular/core";
export declare class MiniViewportComponent {
    left: number;
    top: number;
    width: number;
    height: number;
    containerWidth: number;
    translate: MinimapData['translate'];
    drag: {
        start(e: {
            pageX: number;
            pageY: number;
        }): void;
    };
    get styleLeft(): string;
    get styleTop(): string;
    get styleWidth(): string;
    get styleHeight(): string;
    pointerdown(event: PointerEvent): void;
    px(value: number): string;
    scale(v: number): number;
    invert(v: number): number;
    onDrag(dx: number, dy: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MiniViewportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MiniViewportComponent, "minimap-mini-viewport", never, { "left": { "alias": "left"; "required": false; }; "top": { "alias": "top"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "containerWidth": { "alias": "containerWidth"; "required": false; }; "translate": { "alias": "translate"; "required": false; }; }, {}, never, never, false, never>;
}
