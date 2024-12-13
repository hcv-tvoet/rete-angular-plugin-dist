import { ChangeDetectorRef, OnChanges, ElementRef } from '@angular/core';
import { MinimapData } from '../../types';
import * as i0 from "@angular/core";
export declare class MinimapComponent implements OnChanges {
    el: ElementRef;
    private cdr;
    rendered: () => void;
    size: number;
    ratio: MinimapData['ratio'];
    nodes: MinimapData['nodes'];
    viewport: MinimapData['viewport'];
    translate: MinimapData['translate'];
    point: MinimapData['point'];
    get width(): string;
    get height(): string;
    pointerdown(event: PointerEvent): void;
    dblclick(event: MouseEvent): void;
    constructor(el: ElementRef, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    px(value: number): string;
    scale(value: number): number;
    identifyMiniNode(_: number, item: MinimapData['nodes'][number]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MinimapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MinimapComponent, "ng-component", never, { "rendered": { "alias": "rendered"; "required": false; }; "size": { "alias": "size"; "required": false; }; "ratio": { "alias": "ratio"; "required": false; }; "nodes": { "alias": "nodes"; "required": false; }; "viewport": { "alias": "viewport"; "required": false; }; "translate": { "alias": "translate"; "required": false; }; "point": { "alias": "point"; "required": false; }; }, {}, never, never, false, never>;
}
