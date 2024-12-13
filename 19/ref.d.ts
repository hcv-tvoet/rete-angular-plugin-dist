import { ElementRef, OnChanges, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RefDirective implements OnChanges, OnDestroy {
    private el;
    data: any;
    emit: any;
    constructor(el: ElementRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RefDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RefDirective, "[refComponent]", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; }, {}, never, never, true, never>;
}
