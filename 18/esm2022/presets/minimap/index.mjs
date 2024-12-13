import { MinimapComponent } from './components/minimap/minimap.component';
/**
 * Preset for rendering minimap.
 */
export function setup(props) {
    return {
        update(context) {
            if (context.data.type === 'minimap') {
                return {
                    nodes: context.data.nodes,
                    size: props?.size || 200,
                    ratio: context.data.ratio,
                    viewport: context.data.viewport,
                    translate: context.data.translate,
                    point: context.data.point
                };
            }
            return null;
        },
        mount(context, plugin) {
            const parent = plugin.parentScope();
            const emit = parent.emit.bind(parent);
            const rendered = () => {
                emit({ type: 'rendered', data: context.data });
            };
            if (context.data.type === 'minimap') {
                return {
                    key: 'rete-minimap',
                    component: MinimapComponent,
                    props: {
                        nodes: context.data.nodes,
                        size: props?.size || 200,
                        ratio: context.data.ratio,
                        viewport: context.data.viewport,
                        translate: context.data.translate,
                        point: context.data.point,
                        rendered
                    }
                };
            }
            return null;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9taW5pbWFwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFFOztHQUVHO0FBQ0gsTUFBTSxVQUFVLEtBQUssQ0FBdUQsS0FBeUI7SUFDbkcsT0FBTztRQUNMLE1BQU0sQ0FBQyxPQUFPO1lBQ1osSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztnQkFDcEMsT0FBTztvQkFDTCxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUN6QixJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxHQUFHO29CQUN4QixLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUN6QixRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUMvQixTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUNqQyxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLO2lCQUMxQixDQUFBO1lBQ0gsQ0FBQztZQUNELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQztRQUNELEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUNuQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDbkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDckMsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO2dCQUNwQixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFTLENBQUMsQ0FBQTtZQUN2RCxDQUFDLENBQUE7WUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUNwQyxPQUFPO29CQUNMLEdBQUcsRUFBRSxjQUFjO29CQUNuQixTQUFTLEVBQUUsZ0JBQWdCO29CQUMzQixLQUFLLEVBQUU7d0JBQ0wsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDekIsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksR0FBRzt3QkFDeEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDekIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUTt3QkFDL0IsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUzt3QkFDakMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDekIsUUFBUTtxQkFDVDtpQkFDRixDQUFBO1lBQ0gsQ0FBQztZQUNELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQztLQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVNjaGVtZXMgfSBmcm9tICdyZXRlJztcclxuXHJcbmltcG9ydCB7IFJlbmRlclByZXNldCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgTWluaW1hcFJlbmRlciB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBNaW5pbWFwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21pbmltYXAvbWluaW1hcC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIFByZXNldCBmb3IgcmVuZGVyaW5nIG1pbmltYXAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXA8U2NoZW1lcyBleHRlbmRzIEJhc2VTY2hlbWVzLCBLIGV4dGVuZHMgTWluaW1hcFJlbmRlcj4ocHJvcHM/OiB7IHNpemU/OiBudW1iZXIgfSk6IFJlbmRlclByZXNldDxTY2hlbWVzLCBLPiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZShjb250ZXh0KSB7XHJcbiAgICAgIGlmIChjb250ZXh0LmRhdGEudHlwZSA9PT0gJ21pbmltYXAnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5vZGVzOiBjb250ZXh0LmRhdGEubm9kZXMsXHJcbiAgICAgICAgICBzaXplOiBwcm9wcz8uc2l6ZSB8fCAyMDAsXHJcbiAgICAgICAgICByYXRpbzogY29udGV4dC5kYXRhLnJhdGlvLFxyXG4gICAgICAgICAgdmlld3BvcnQ6IGNvbnRleHQuZGF0YS52aWV3cG9ydCxcclxuICAgICAgICAgIHRyYW5zbGF0ZTogY29udGV4dC5kYXRhLnRyYW5zbGF0ZSxcclxuICAgICAgICAgIHBvaW50OiBjb250ZXh0LmRhdGEucG9pbnRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH0sXHJcbiAgICBtb3VudChjb250ZXh0LCBwbHVnaW4pIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gcGx1Z2luLnBhcmVudFNjb3BlKClcclxuICAgICAgY29uc3QgZW1pdCA9IHBhcmVudC5lbWl0LmJpbmQocGFyZW50KVxyXG4gICAgICBjb25zdCByZW5kZXJlZCA9ICgpID0+IHtcclxuICAgICAgICBlbWl0KHsgdHlwZTogJ3JlbmRlcmVkJywgZGF0YTogY29udGV4dC5kYXRhIH0gYXMgYW55KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29udGV4dC5kYXRhLnR5cGUgPT09ICdtaW5pbWFwJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBrZXk6ICdyZXRlLW1pbmltYXAnLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBNaW5pbWFwQ29tcG9uZW50LFxyXG4gICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbm9kZXM6IGNvbnRleHQuZGF0YS5ub2RlcyxcclxuICAgICAgICAgICAgc2l6ZTogcHJvcHM/LnNpemUgfHwgMjAwLFxyXG4gICAgICAgICAgICByYXRpbzogY29udGV4dC5kYXRhLnJhdGlvLFxyXG4gICAgICAgICAgICB2aWV3cG9ydDogY29udGV4dC5kYXRhLnZpZXdwb3J0LFxyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IGNvbnRleHQuZGF0YS50cmFuc2xhdGUsXHJcbiAgICAgICAgICAgIHBvaW50OiBjb250ZXh0LmRhdGEucG9pbnQsXHJcbiAgICAgICAgICAgIHJlbmRlcmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==