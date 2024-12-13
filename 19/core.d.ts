import { Injector } from '@angular/core';
import { BaseSchemes, CanAssignSignal, Scope } from 'rete';
import { NgElement, Position, RenderSignal } from './types';
import { RenderPreset } from './presets/types';
type Item = {
    key: string;
    ngElement: NgElement;
};
type Renderer = {
    get(element: HTMLElement): Item | undefined;
    mount(element: HTMLElement, key: string, component: any, injector: Injector, props: Record<string, unknown>): void;
    update(item: Item, props: Record<string, unknown>): void;
    unmount(element: HTMLElement): void;
};
/**
 * Signals that can be emitted by the plugin
 * @priority 10
 */
export type Produces<Schemes extends BaseSchemes> = {
    type: 'connectionpath';
    data: {
        payload: Schemes['Connection'];
        path?: string;
        points: Position[];
    };
};
type Requires<Schemes extends BaseSchemes> = RenderSignal<'node', {
    payload: Schemes['Node'];
}> | RenderSignal<'connection', {
    payload: Schemes['Connection'];
    start?: Position;
    end?: Position;
}> | {
    type: 'unmount';
    data: {
        element: HTMLElement;
    };
};
/**
 * Angular plugin. Renders nodes, connections and other elements using React.
 * @priority 9
 * @emits connectionpath
 * @listens render
 * @listens unmount
 */
export declare class AngularPlugin<Schemes extends BaseSchemes, T = Requires<Schemes>> extends Scope<Produces<Schemes>, [Requires<Schemes> | T]> {
    private params;
    presets: RenderPreset<Schemes, T>[];
    renderer: Renderer;
    owners: WeakMap<HTMLElement, RenderPreset<Schemes, T>>;
    /**
     * @constructor
     * @param params Plugin properties
     * @param params.injector Angular's Injector instance
     */
    constructor(params: {
        injector: Injector;
    });
    setParent(scope: Scope<Requires<Schemes> | T>): void;
    private unmount;
    private mount;
    /**
     * Adds a preset to the plugin.
     * @param preset Preset that can render nodes, connections and other elements.
     */
    addPreset<K>(preset: RenderPreset<Schemes, CanAssignSignal<T, K> extends true ? K : 'Cannot apply preset. Provided signals are not compatible'>): void;
}
export {};
