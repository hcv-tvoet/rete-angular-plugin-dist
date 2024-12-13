import { ChangeDetectorRef, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SocketComponent implements OnChanges {
    private cdr;
    data: any;
    rendered: any;
    get title(): any;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SocketComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SocketComponent, "ng-component", never, { "data": { "alias": "data"; "required": false; }; "rendered": { "alias": "rendered"; "required": false; }; }, {}, never, never, false, never>;
}
