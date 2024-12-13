import { OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { ClassicPreset } from 'rete';
import * as i0 from "@angular/core";
export declare class ControlComponent<T extends 'text' | 'number'> implements OnChanges {
    private cdr;
    data: ClassicPreset.InputControl<T>;
    rendered: any;
    pointerdown(event: any): void;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    onChange(e: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ControlComponent<any>, "ng-component", never, { "data": { "alias": "data"; "required": false; }; "rendered": { "alias": "rendered"; "required": false; }; }, {}, never, never, true, never>;
}
