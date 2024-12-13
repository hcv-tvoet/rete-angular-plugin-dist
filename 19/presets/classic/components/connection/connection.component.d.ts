import { ClassicPreset } from 'rete';
import { Position } from '../../../../types';
import * as i0 from "@angular/core";
export declare class ConnectionComponent {
    data: ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>;
    start: Position;
    end: Position;
    path: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConnectionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConnectionComponent, "connection", never, { "data": { "alias": "data"; "required": false; }; "start": { "alias": "start"; "required": false; }; "end": { "alias": "end"; "required": false; }; "path": { "alias": "path"; "required": false; }; }, {}, never, never, true, never>;
}
