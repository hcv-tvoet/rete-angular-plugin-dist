import { BaseAreaPlugin } from 'rete-area-plugin';
import { PinsComponent } from './components/pins/pins.component';
/**
 * Preset for rendering pins.
 */
export function setup(props) {
    const getProps = () => ({
        menu: props?.contextMenu || (() => null),
        translate: props?.translate || (() => null),
        down: props?.pointerdown || (() => null)
    });
    return {
        update(context) {
            if (context.data.type === 'reroute-pins') {
                return {
                    ...getProps(),
                    pins: context.data.data.pins
                };
            }
            return null;
        },
        mount(context, plugin) {
            const area = plugin.parentScope(BaseAreaPlugin);
            const rendered = () => {
                area.emit({ type: 'rendered', data: context.data });
            };
            if (context.data.type === 'reroute-pins') {
                return {
                    key: 'rete-reroute',
                    component: PinsComponent,
                    props: {
                        ...getProps(),
                        pins: context.data.data.pins,
                        rendered,
                        getPointer: () => area.area.pointer
                    }
                };
            }
            return null;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9yZXJvdXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUlsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFRakU7O0dBRUc7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFvRCxLQUFhO0lBQ3BGLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDeEMsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDM0MsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDekMsQ0FBQyxDQUFBO0lBRUYsT0FBTztRQUNMLE1BQU0sQ0FBQyxPQUFPO1lBQ1osSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLEVBQUUsQ0FBQztnQkFDekMsT0FBTztvQkFDTCxHQUFHLFFBQVEsRUFBRTtvQkFDYixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtpQkFDN0IsQ0FBQTtZQUNILENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQTtRQUNiLENBQUM7UUFDRCxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU07WUFDbkIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBc0MsY0FBYyxDQUFDLENBQUE7WUFDcEYsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7WUFDckQsQ0FBQyxDQUFBO1lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLEVBQUUsQ0FBQztnQkFDekMsT0FBTztvQkFDTCxHQUFHLEVBQUUsY0FBYztvQkFDbkIsU0FBUyxFQUFFLGFBQWE7b0JBQ3hCLEtBQUssRUFBRTt3QkFDTCxHQUFHLFFBQVEsRUFBRTt3QkFDYixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTt3QkFDNUIsUUFBUTt3QkFDUixVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO3FCQUNwQztpQkFDRixDQUFBO1lBQ0gsQ0FBQztZQUNELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQztLQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVNjaGVtZXMgfSBmcm9tICdyZXRlJztcclxuaW1wb3J0IHsgQmFzZUFyZWFQbHVnaW4gfSBmcm9tICdyZXRlLWFyZWEtcGx1Z2luJztcclxuXHJcbmltcG9ydCB7IFJlbmRlclByZXNldCB9IGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgeyBQaW5zUmVuZGVyIH0gZnJvbSAnLi90eXBlcyc7XHJcbmltcG9ydCB7IFBpbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGlucy9waW5zLmNvbXBvbmVudCc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHRyYW5zbGF0ZT86IChpZDogc3RyaW5nLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkXHJcbiAgY29udGV4dE1lbnU/OiAoaWQ6IHN0cmluZykgPT4gdm9pZFxyXG4gIHBvaW50ZXJkb3duPzogKGlkOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG5cclxuLyoqXHJcbiAqIFByZXNldCBmb3IgcmVuZGVyaW5nIHBpbnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXA8U2NoZW1lcyBleHRlbmRzIEJhc2VTY2hlbWVzLCBLIGV4dGVuZHMgUGluc1JlbmRlcj4ocHJvcHM/OiBQcm9wcyk6IFJlbmRlclByZXNldDxTY2hlbWVzLCBLPiB7XHJcbiAgY29uc3QgZ2V0UHJvcHMgPSAoKSA9PiAoe1xyXG4gICAgbWVudTogcHJvcHM/LmNvbnRleHRNZW51IHx8ICgoKSA9PiBudWxsKSxcclxuICAgIHRyYW5zbGF0ZTogcHJvcHM/LnRyYW5zbGF0ZSB8fCAoKCkgPT4gbnVsbCksXHJcbiAgICBkb3duOiBwcm9wcz8ucG9pbnRlcmRvd24gfHwgKCgpID0+IG51bGwpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZShjb250ZXh0KSB7XHJcbiAgICAgIGlmIChjb250ZXh0LmRhdGEudHlwZSA9PT0gJ3Jlcm91dGUtcGlucycpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uZ2V0UHJvcHMoKSxcclxuICAgICAgICAgIHBpbnM6IGNvbnRleHQuZGF0YS5kYXRhLnBpbnNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH0sXHJcbiAgICBtb3VudChjb250ZXh0LCBwbHVnaW4pIHtcclxuICAgICAgY29uc3QgYXJlYSA9IHBsdWdpbi5wYXJlbnRTY29wZTxCYXNlQXJlYVBsdWdpbjxTY2hlbWVzLCBQaW5zUmVuZGVyPj4oQmFzZUFyZWFQbHVnaW4pXHJcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gKCkgPT4ge1xyXG4gICAgICAgIGFyZWEuZW1pdCh7IHR5cGU6ICdyZW5kZXJlZCcsIGRhdGE6IGNvbnRleHQuZGF0YSB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29udGV4dC5kYXRhLnR5cGUgPT09ICdyZXJvdXRlLXBpbnMnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGtleTogJ3JldGUtcmVyb3V0ZScsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IFBpbnNDb21wb25lbnQsXHJcbiAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAuLi5nZXRQcm9wcygpLFxyXG4gICAgICAgICAgICBwaW5zOiBjb250ZXh0LmRhdGEuZGF0YS5waW5zLFxyXG4gICAgICAgICAgICByZW5kZXJlZCxcclxuICAgICAgICAgICAgZ2V0UG9pbnRlcjogKCkgPT4gYXJlYS5hcmVhLnBvaW50ZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19