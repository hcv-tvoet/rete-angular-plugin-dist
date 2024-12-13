import { Type } from '@angular/core';
import { Scope } from 'rete';
import { SocketPositionWatcher } from 'rete-render-utils';
import { AngularArea2D, ClassicScheme, ExtractPayload } from './types';
import { RenderPreset } from '../types';
type AngularComponent = Type<any>;
type CustomizationProps<Schemes extends ClassicScheme> = {
    node?: (data: ExtractPayload<Schemes, 'node'>) => AngularComponent | null;
    connection?: (data: ExtractPayload<Schemes, 'connection'>) => AngularComponent | null;
    socket?: (data: ExtractPayload<Schemes, 'socket'>) => AngularComponent | null;
    control?: (data: ExtractPayload<Schemes, 'control'>) => AngularComponent | null;
};
type ClassicProps<Schemes extends ClassicScheme, K> = {
    socketPositionWatcher?: SocketPositionWatcher<Scope<never, [K]>>;
    customize?: CustomizationProps<Schemes>;
};
/**
 * Classic preset for rendering nodes, connections, controls and sockets.
 */
export declare function setup<Schemes extends ClassicScheme, K extends AngularArea2D<Schemes>>(props?: ClassicProps<Schemes, K>): RenderPreset<Schemes, K>;
export {};
