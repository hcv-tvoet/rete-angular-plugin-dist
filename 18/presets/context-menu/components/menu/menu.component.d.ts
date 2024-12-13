import { ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { Item } from '../../types';
import * as i0 from "@angular/core";
export declare class ContextMenuComponent implements OnChanges, OnDestroy {
    private cdr;
    items: Item[];
    delay: number;
    searchBar?: boolean;
    onHide: () => void;
    rendered: () => void;
    filter: string;
    hide: {
        timeout: null | number;
        cancel(): void;
        call(delay: number): void;
    };
    customAttribute: string;
    pointerover(): void;
    pointerleave(): void;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    setFilter(value: string): void;
    getItems(): Item[];
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextMenuComponent, "ng-component", never, { "items": { "alias": "items"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "searchBar": { "alias": "searchBar"; "required": false; }; "onHide": { "alias": "onHide"; "required": false; }; "rendered": { "alias": "rendered"; "required": false; }; }, {}, never, never, false, never>;
}
