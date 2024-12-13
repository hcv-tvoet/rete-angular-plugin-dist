import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Item } from '../../types';
import * as i0 from "@angular/core";
export declare class ContextMenuItemComponent {
    private cdr;
    subitems?: Item[];
    delay: number;
    select: EventEmitter<void>;
    hide: EventEmitter<void>;
    get block(): boolean;
    get hasSubitems(): Item[];
    click(event: MouseEvent): void;
    pointerdown(event: PointerEvent): void;
    wheel(event: MouseEvent): void;
    hideSubitems: {
        timeout: null | number;
        cancel(): void;
        call(delay: number): void;
    };
    visibleSubitems: boolean;
    pointerover(): void;
    pointerleave(): void;
    constructor(cdr: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ContextMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContextMenuItemComponent, "context-menu-item", never, { "subitems": { "alias": "subitems"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; }, { "select": "select"; "hide": "hide"; }, never, ["*"], false, never>;
}
