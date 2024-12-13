import { ChangeDetectorRef, OnChanges, EventEmitter } from '@angular/core';
import { Position } from '../../types';
import * as i0 from "@angular/core";
export declare class PinComponent implements OnChanges {
    private cdr;
    position: Position;
    selected?: boolean;
    getPointer: () => Position;
    menu: EventEmitter<void>;
    translate: EventEmitter<{
        dx: number;
        dy: number;
    }>;
    down: EventEmitter<void>;
    drag: {
        start(e: {
            pageX: number;
            pageY: number;
        }): void;
    };
    get _selected(): boolean;
    get top(): string;
    get left(): string;
    pointerdown(event: PointerEvent): void;
    contextmenu(event: MouseEvent): void;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PinComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PinComponent, "reroute-pin", never, { "position": { "alias": "position"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "getPointer": { "alias": "getPointer"; "required": false; }; }, { "menu": "menu"; "translate": "translate"; "down": "down"; }, never, never, true, never>;
}
