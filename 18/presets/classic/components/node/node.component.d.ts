import { ChangeDetectorRef, OnChanges } from '@angular/core';
import { ClassicPreset as Classic } from 'rete';
import { KeyValue } from '@angular/common';
import * as i0 from "@angular/core";
type NodeExtraData = {
    width?: number;
    height?: number;
};
type SortValue<N extends Classic.Node> = (N['controls'] | N['inputs'] | N['outputs'])[string];
export declare class NodeComponent implements OnChanges {
    private cdr;
    data: Classic.Node & NodeExtraData;
    emit: (data: any) => void;
    rendered: () => void;
    seed: number;
    get width(): number;
    get height(): number;
    get selected(): boolean;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    sortByIndex<N extends Classic.Node, I extends KeyValue<string, SortValue<N>>>(a: I, b: I): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<NodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NodeComponent, "ng-component", never, { "data": { "alias": "data"; "required": false; }; "emit": { "alias": "emit"; "required": false; }; "rendered": { "alias": "rendered"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
