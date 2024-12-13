import { ChangeDetectorRef, OnChanges } from '@angular/core';
import { Pin, PinData, Position } from '../../types';
import * as i0 from "@angular/core";
export declare class PinsComponent implements OnChanges {
    private cdr;
    rendered: () => void;
    pins: PinData['pins'];
    down?: (id: string) => void;
    translate?: (id: string, dx: number, dy: number) => void;
    menu?: (id: string) => void;
    getPointer?: () => Position;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    track(_: number, item: Pin): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PinsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PinsComponent, "ng-component", never, { "rendered": { "alias": "rendered"; "required": false; }; "pins": { "alias": "pins"; "required": false; }; "down": { "alias": "down"; "required": false; }; "translate": { "alias": "translate"; "required": false; }; "menu": { "alias": "menu"; "required": false; }; "getPointer": { "alias": "getPointer"; "required": false; }; }, {}, never, never, false, never>;
}
