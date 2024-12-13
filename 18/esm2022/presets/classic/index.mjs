import { ClassicPreset, getUID } from 'rete';
import { classicConnectionPath, loopConnectionPath, getDOMSocketPosition } from 'rete-render-utils';
import { NodeComponent } from './components/node/node.component';
import { SocketComponent } from './components/socket/socket.component';
import { ControlComponent } from './components/control/control.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { ConnectionWrapperComponent } from './components/connection/connection-wrapper.component';
/**
 * Classic preset for rendering nodes, connections, controls and sockets.
 */
export function setup(props) {
    const positionWatcher = typeof props?.socketPositionWatcher === 'undefined'
        ? getDOMSocketPosition() // fix Type instantiation is excessively deep and possibly infinite.
        : props?.socketPositionWatcher;
    const { node, connection, socket, control } = props?.customize || {};
    return {
        attach(plugin) {
            positionWatcher.attach(plugin);
        },
        update(context) {
            const data = context.data.payload;
            if (context.data.type === 'connection') {
                const { start, end } = context.data;
                return {
                    data,
                    ...(start ? { start } : {}),
                    ...(end ? { end } : {}),
                };
            }
            return { data };
        },
        mount(context, plugin) {
            const parent = plugin.parentScope();
            const emit = parent.emit.bind(parent);
            const rendered = () => {
                emit({ type: 'rendered', data: context.data });
            };
            if (context.data.type === 'node') {
                const component = node ? node(context.data) : NodeComponent;
                return {
                    key: `node-${context.data.payload.id}`,
                    component,
                    props: {
                        data: context.data.payload,
                        emit,
                        rendered
                    }
                };
            }
            if (context.data.type === 'connection') {
                const component = connection ? connection(context.data) : ConnectionComponent;
                const id = context.data.payload.id;
                const { sourceOutput, targetInput, source, target } = context.data.payload;
                const { start, end, payload } = context.data;
                return {
                    key: `connection-${id}`,
                    component: ConnectionWrapperComponent,
                    props: {
                        connectionComponent: component,
                        data: payload,
                        start: start || ((change) => positionWatcher.listen(source, 'output', sourceOutput, change)),
                        end: end || ((change) => positionWatcher.listen(target, 'input', targetInput, change)),
                        path: async (start, end) => {
                            const response = await plugin.emit({ type: 'connectionpath', data: { payload, points: [start, end] } });
                            if (!response)
                                return '';
                            const { path, points } = response.data;
                            const curvature = 0.3;
                            if (!path && points.length !== 2)
                                throw new Error('cannot render connection with a custom number of points');
                            if (!path)
                                return payload.isLoop
                                    ? loopConnectionPath(points, curvature, 120)
                                    : classicConnectionPath(points, curvature);
                            return path;
                        },
                        rendered
                    }
                };
            }
            if (context.data.type === 'socket') {
                const component = socket ? socket(context.data) : SocketComponent;
                return {
                    key: `socket-${getUID()}`,
                    component,
                    props: {
                        data: context.data.payload,
                        rendered
                    }
                };
            }
            if (context.data.type === 'control') {
                const component = control
                    ? control(context.data)
                    : (context.data.payload instanceof ClassicPreset.InputControl
                        ? ControlComponent
                        : null);
                if (component) {
                    return {
                        key: `control-${context.data.payload.id}`,
                        component,
                        props: {
                            data: context.data.payload,
                            rendered
                        }
                    };
                }
                return;
            }
            return;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9jbGFzc2ljL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFTLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBeUIsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUzSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBaUJsRzs7R0FFRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQ25CLEtBQWdDO0lBRWhDLE1BQU0sZUFBZSxHQUFHLE9BQU8sS0FBSyxFQUFFLHFCQUFxQixLQUFLLFdBQVc7UUFDekUsQ0FBQyxDQUFDLG9CQUFvQixFQUFnQixDQUFDLG9FQUFvRTtRQUMzRyxDQUFDLENBQUMsS0FBSyxFQUFFLHFCQUFxQixDQUFBO0lBQ2hDLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxLQUFLLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQTtJQUdwRSxPQUFPO1FBQ0wsTUFBTSxDQUFDLE1BQU07WUFDWCxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQXNDLENBQUMsQ0FBQTtRQUNoRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU87WUFDWixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtZQUVqQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRSxDQUFDO2dCQUN2QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUE7Z0JBRW5DLE9BQU87b0JBQ0wsSUFBSTtvQkFDSixHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDeEIsQ0FBQTtZQUNILENBQUM7WUFDRCxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUE7UUFDakIsQ0FBQztRQUNELEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUNuQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDbkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDckMsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO2dCQUNwQixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtZQUNoRCxDQUFDLENBQUE7WUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRSxDQUFDO2dCQUNqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQTtnQkFFM0QsT0FBTztvQkFDTCxHQUFHLEVBQUUsUUFBUSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLFNBQVM7b0JBQ1QsS0FBSyxFQUFFO3dCQUNMLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU87d0JBQzFCLElBQUk7d0JBQ0osUUFBUTtxQkFDVDtpQkFDRixDQUFBO1lBQ0gsQ0FBQztZQUNELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFLENBQUM7Z0JBQ3ZDLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUE7Z0JBQzdFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQTtnQkFDbEMsTUFBTSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO2dCQUMxRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO2dCQUU1QyxPQUFPO29CQUNMLEdBQUcsRUFBRSxjQUFjLEVBQUUsRUFBRTtvQkFDdkIsU0FBUyxFQUFFLDBCQUEwQjtvQkFDckMsS0FBSyxFQUFFO3dCQUNMLG1CQUFtQixFQUFFLFNBQVM7d0JBQzlCLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDakcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUMzRixJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTs0QkFDekIsTUFBTSxRQUFRLEdBQUcsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7NEJBRXZHLElBQUksQ0FBQyxRQUFRO2dDQUFFLE9BQU8sRUFBRSxDQUFBOzRCQUV4QixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUE7NEJBQ3RDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQTs0QkFFckIsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7Z0NBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFBOzRCQUM1RyxJQUFJLENBQUMsSUFBSTtnQ0FBRSxPQUFPLE9BQU8sQ0FBQyxNQUFNO29DQUM5QixDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBOEIsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDO29DQUNwRSxDQUFDLENBQUMscUJBQXFCLENBQUMsTUFBOEIsRUFBRSxTQUFTLENBQUMsQ0FBQTs0QkFFcEUsT0FBTyxJQUFJLENBQUE7d0JBQ2IsQ0FBQzt3QkFDRCxRQUFRO3FCQUNUO2lCQUNGLENBQUE7WUFDSCxDQUFDO1lBQ0QsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUE7Z0JBRWpFLE9BQU87b0JBQ0wsR0FBRyxFQUFFLFVBQVUsTUFBTSxFQUFFLEVBQUU7b0JBQ3pCLFNBQVM7b0JBQ1QsS0FBSyxFQUFFO3dCQUNMLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU87d0JBQzFCLFFBQVE7cUJBQ1Q7aUJBQ0YsQ0FBQTtZQUNILENBQUM7WUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUNwQyxNQUFNLFNBQVMsR0FBRyxPQUFPO29CQUN2QixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxDQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxZQUFZLGFBQWEsQ0FBQyxZQUFZO3dCQUN4RCxDQUFDLENBQUMsZ0JBQWdCO3dCQUNsQixDQUFDLENBQUMsSUFBSSxDQUNULENBQUE7Z0JBRUgsSUFBSSxTQUFTLEVBQUUsQ0FBQztvQkFDZCxPQUFPO3dCQUNMLEdBQUcsRUFBRSxXQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTt3QkFDekMsU0FBUzt3QkFDVCxLQUFLLEVBQUU7NEJBQ0wsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTzs0QkFDMUIsUUFBUTt5QkFDVDtxQkFDRixDQUFBO2dCQUNILENBQUM7Z0JBQ0QsT0FBTTtZQUNSLENBQUM7WUFDRCxPQUFNO1FBQ1IsQ0FBQztLQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDbGFzc2ljUHJlc2V0LCBnZXRVSUQsIFNjb3BlIH0gZnJvbSAncmV0ZSc7XHJcbmltcG9ydCB7IGNsYXNzaWNDb25uZWN0aW9uUGF0aCwgbG9vcENvbm5lY3Rpb25QYXRoLCBTb2NrZXRQb3NpdGlvbldhdGNoZXIsIGdldERPTVNvY2tldFBvc2l0aW9uIH0gZnJvbSAncmV0ZS1yZW5kZXItdXRpbHMnO1xyXG5pbXBvcnQgeyBBbmd1bGFyQXJlYTJELCBDbGFzc2ljU2NoZW1lLCBFeHRyYWN0UGF5bG9hZCB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25vZGUvbm9kZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTb2NrZXRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc29ja2V0L3NvY2tldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb25uZWN0aW9uL2Nvbm5lY3Rpb24td3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuaW1wb3J0IHsgUmVuZGVyUHJlc2V0IH0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG50eXBlIEFuZ3VsYXJDb21wb25lbnQgPSBUeXBlPGFueT5cclxudHlwZSBDdXN0b21pemF0aW9uUHJvcHM8U2NoZW1lcyBleHRlbmRzIENsYXNzaWNTY2hlbWU+ID0ge1xyXG4gIG5vZGU/OiAoZGF0YTogRXh0cmFjdFBheWxvYWQ8U2NoZW1lcywgJ25vZGUnPikgPT4gQW5ndWxhckNvbXBvbmVudCB8IG51bGxcclxuICBjb25uZWN0aW9uPzogKGRhdGE6IEV4dHJhY3RQYXlsb2FkPFNjaGVtZXMsICdjb25uZWN0aW9uJz4pID0+IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsXHJcbiAgc29ja2V0PzogKGRhdGE6IEV4dHJhY3RQYXlsb2FkPFNjaGVtZXMsICdzb2NrZXQnPikgPT4gQW5ndWxhckNvbXBvbmVudCB8IG51bGxcclxuICBjb250cm9sPzogKGRhdGE6IEV4dHJhY3RQYXlsb2FkPFNjaGVtZXMsICdjb250cm9sJz4pID0+IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsXHJcbn1cclxuXHJcbnR5cGUgQ2xhc3NpY1Byb3BzPFNjaGVtZXMgZXh0ZW5kcyBDbGFzc2ljU2NoZW1lLCBLPiA9IHtcclxuICBzb2NrZXRQb3NpdGlvbldhdGNoZXI/OiBTb2NrZXRQb3NpdGlvbldhdGNoZXI8U2NvcGU8bmV2ZXIsIFtLXT4+XHJcbiAgY3VzdG9taXplPzogQ3VzdG9taXphdGlvblByb3BzPFNjaGVtZXM+XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDbGFzc2ljIHByZXNldCBmb3IgcmVuZGVyaW5nIG5vZGVzLCBjb25uZWN0aW9ucywgY29udHJvbHMgYW5kIHNvY2tldHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXA8U2NoZW1lcyBleHRlbmRzIENsYXNzaWNTY2hlbWUsIEsgZXh0ZW5kcyBBbmd1bGFyQXJlYTJEPFNjaGVtZXM+PihcclxuICBwcm9wcz86IENsYXNzaWNQcm9wczxTY2hlbWVzLCBLPlxyXG4pOiBSZW5kZXJQcmVzZXQ8U2NoZW1lcywgSz4ge1xyXG4gIGNvbnN0IHBvc2l0aW9uV2F0Y2hlciA9IHR5cGVvZiBwcm9wcz8uc29ja2V0UG9zaXRpb25XYXRjaGVyID09PSAndW5kZWZpbmVkJ1xyXG4gICAgPyBnZXRET01Tb2NrZXRQb3NpdGlvbjxTY2hlbWVzLCBhbnk+KCkgLy8gZml4IFR5cGUgaW5zdGFudGlhdGlvbiBpcyBleGNlc3NpdmVseSBkZWVwIGFuZCBwb3NzaWJseSBpbmZpbml0ZS5cclxuICAgIDogcHJvcHM/LnNvY2tldFBvc2l0aW9uV2F0Y2hlclxyXG4gIGNvbnN0IHsgbm9kZSwgY29ubmVjdGlvbiwgc29ja2V0LCBjb250cm9sIH0gPSBwcm9wcz8uY3VzdG9taXplIHx8IHt9XHJcblxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYXR0YWNoKHBsdWdpbikge1xyXG4gICAgICBwb3NpdGlvbldhdGNoZXIuYXR0YWNoKHBsdWdpbiBhcyB1bmtub3duIGFzIFNjb3BlPG5ldmVyLCBbS10+KVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZShjb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjb250ZXh0LmRhdGEucGF5bG9hZFxyXG5cclxuICAgICAgaWYgKGNvbnRleHQuZGF0YS50eXBlID09PSAnY29ubmVjdGlvbicpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNvbnRleHQuZGF0YVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgZGF0YSxcclxuICAgICAgICAgIC4uLihzdGFydCA/IHsgc3RhcnQgfSA6IHt9KSxcclxuICAgICAgICAgIC4uLihlbmQgPyB7IGVuZCB9IDoge30pLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4geyBkYXRhIH1cclxuICAgIH0sXHJcbiAgICBtb3VudChjb250ZXh0LCBwbHVnaW4pIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gcGx1Z2luLnBhcmVudFNjb3BlKClcclxuICAgICAgY29uc3QgZW1pdCA9IHBhcmVudC5lbWl0LmJpbmQocGFyZW50KVxyXG4gICAgICBjb25zdCByZW5kZXJlZCA9ICgpID0+IHtcclxuICAgICAgICBlbWl0KHsgdHlwZTogJ3JlbmRlcmVkJywgZGF0YTogY29udGV4dC5kYXRhIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb250ZXh0LmRhdGEudHlwZSA9PT0gJ25vZGUnKSB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbm9kZSA/IG5vZGUoY29udGV4dC5kYXRhKSA6IE5vZGVDb21wb25lbnRcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGtleTogYG5vZGUtJHtjb250ZXh0LmRhdGEucGF5bG9hZC5pZH1gLFxyXG4gICAgICAgICAgY29tcG9uZW50LFxyXG4gICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGF0YTogY29udGV4dC5kYXRhLnBheWxvYWQsXHJcbiAgICAgICAgICAgIGVtaXQsXHJcbiAgICAgICAgICAgIHJlbmRlcmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb250ZXh0LmRhdGEudHlwZSA9PT0gJ2Nvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29ubmVjdGlvbiA/IGNvbm5lY3Rpb24oY29udGV4dC5kYXRhKSA6IENvbm5lY3Rpb25Db21wb25lbnRcclxuICAgICAgICBjb25zdCBpZCA9IGNvbnRleHQuZGF0YS5wYXlsb2FkLmlkXHJcbiAgICAgICAgY29uc3QgeyBzb3VyY2VPdXRwdXQsIHRhcmdldElucHV0LCBzb3VyY2UsIHRhcmdldCB9ID0gY29udGV4dC5kYXRhLnBheWxvYWRcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQsIHBheWxvYWQgfSA9IGNvbnRleHQuZGF0YVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2V5OiBgY29ubmVjdGlvbi0ke2lkfWAsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IENvbm5lY3Rpb25XcmFwcGVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbkNvbXBvbmVudDogY29tcG9uZW50LFxyXG4gICAgICAgICAgICBkYXRhOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICBzdGFydDogc3RhcnQgfHwgKChjaGFuZ2U6IGFueSkgPT4gcG9zaXRpb25XYXRjaGVyLmxpc3Rlbihzb3VyY2UsICdvdXRwdXQnLCBzb3VyY2VPdXRwdXQsIGNoYW5nZSkpLFxyXG4gICAgICAgICAgICBlbmQ6IGVuZCB8fCAoKGNoYW5nZTogYW55KSA9PiBwb3NpdGlvbldhdGNoZXIubGlzdGVuKHRhcmdldCwgJ2lucHV0JywgdGFyZ2V0SW5wdXQsIGNoYW5nZSkpLFxyXG4gICAgICAgICAgICBwYXRoOiBhc3luYyAoc3RhcnQsIGVuZCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcGx1Z2luLmVtaXQoeyB0eXBlOiAnY29ubmVjdGlvbnBhdGgnLCBkYXRhOiB7IHBheWxvYWQsIHBvaW50czogW3N0YXJ0LCBlbmRdIH0gfSlcclxuXHJcbiAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkgcmV0dXJuICcnXHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHsgcGF0aCwgcG9pbnRzIH0gPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgICAgY29uc3QgY3VydmF0dXJlID0gMC4zXHJcblxyXG4gICAgICAgICAgICAgIGlmICghcGF0aCAmJiBwb2ludHMubGVuZ3RoICE9PSAyKSB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCByZW5kZXIgY29ubmVjdGlvbiB3aXRoIGEgY3VzdG9tIG51bWJlciBvZiBwb2ludHMnKVxyXG4gICAgICAgICAgICAgIGlmICghcGF0aCkgcmV0dXJuIHBheWxvYWQuaXNMb29wXHJcbiAgICAgICAgICAgICAgICA/IGxvb3BDb25uZWN0aW9uUGF0aChwb2ludHMgYXMgW1Bvc2l0aW9uLCBQb3NpdGlvbl0sIGN1cnZhdHVyZSwgMTIwKVxyXG4gICAgICAgICAgICAgICAgOiBjbGFzc2ljQ29ubmVjdGlvblBhdGgocG9pbnRzIGFzIFtQb3NpdGlvbiwgUG9zaXRpb25dLCBjdXJ2YXR1cmUpXHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBwYXRoXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbmRlcmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb250ZXh0LmRhdGEudHlwZSA9PT0gJ3NvY2tldCcpIHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBzb2NrZXQgPyBzb2NrZXQoY29udGV4dC5kYXRhKSA6IFNvY2tldENvbXBvbmVudFxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2V5OiBgc29ja2V0LSR7Z2V0VUlEKCl9YCxcclxuICAgICAgICAgIGNvbXBvbmVudCxcclxuICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGRhdGE6IGNvbnRleHQuZGF0YS5wYXlsb2FkLFxyXG4gICAgICAgICAgICByZW5kZXJlZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoY29udGV4dC5kYXRhLnR5cGUgPT09ICdjb250cm9sJykge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbnRyb2xcclxuICAgICAgICAgID8gY29udHJvbChjb250ZXh0LmRhdGEpXHJcbiAgICAgICAgICA6IChcclxuICAgICAgICAgICAgY29udGV4dC5kYXRhLnBheWxvYWQgaW5zdGFuY2VvZiBDbGFzc2ljUHJlc2V0LklucHV0Q29udHJvbFxyXG4gICAgICAgICAgICAgID8gQ29udHJvbENvbXBvbmVudFxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgKVxyXG5cclxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXk6IGBjb250cm9sLSR7Y29udGV4dC5kYXRhLnBheWxvYWQuaWR9YCxcclxuICAgICAgICAgICAgY29tcG9uZW50LFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgIGRhdGE6IGNvbnRleHQuZGF0YS5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgIHJlbmRlcmVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==