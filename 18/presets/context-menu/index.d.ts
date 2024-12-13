import { BaseSchemes } from 'rete';
import { ContextMenuRender } from './types';
import { RenderPreset } from '../types';
/**
 * Preset for rendering context menu.
 */
export declare function setup<Schemes extends BaseSchemes, K extends ContextMenuRender>(props?: {
    delay?: number;
}): RenderPreset<Schemes, K>;
