import { ContextMenuComponent } from './components/menu/menu.component';
/**
 * Preset for rendering context menu.
 */
export function setup(props) {
    const delay = typeof props?.delay === 'undefined' ? 1000 : props.delay;
    return {
        update(context) {
            if (context.data.type === 'contextmenu') {
                return {
                    items: context.data.items,
                    delay,
                    searchBar: context.data.searchBar,
                    onHide: context.data.onHide
                };
            }
        },
        mount(context, plugin) {
            const parent = plugin.parentScope();
            const emit = parent.emit.bind(parent);
            const rendered = () => {
                emit({ type: 'rendered', data: context.data });
            };
            if (context.data.type === 'contextmenu') {
                return {
                    key: 'context-menu',
                    component: ContextMenuComponent,
                    props: {
                        items: context.data.items,
                        delay,
                        searchBar: context.data.searchBar,
                        onHide: context.data.onHide,
                        rendered
                    }
                };
            }
            return null;
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9jb250ZXh0LW1lbnUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHeEU7O0dBRUc7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUEyRCxLQUEwQjtJQUN4RyxNQUFNLEtBQUssR0FBRyxPQUFPLEtBQUssRUFBRSxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFFdEUsT0FBTztRQUNMLE1BQU0sQ0FBQyxPQUFPO1lBQ1osSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUUsQ0FBQztnQkFDeEMsT0FBTztvQkFDTCxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUN6QixLQUFLO29CQUNMLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVM7b0JBQ2pDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU07aUJBQzVCLENBQUE7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUNELEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUNuQixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDbkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDckMsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO2dCQUNwQixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFTLENBQUMsQ0FBQTtZQUN2RCxDQUFDLENBQUE7WUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRSxDQUFDO2dCQUN4QyxPQUFPO29CQUNMLEdBQUcsRUFBRSxjQUFjO29CQUNuQixTQUFTLEVBQUUsb0JBQW9CO29CQUMvQixLQUFLLEVBQUU7d0JBQ0wsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDekIsS0FBSzt3QkFDTCxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTO3dCQUNqQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNO3dCQUMzQixRQUFRO3FCQUNUO2lCQUNGLENBQUE7WUFDSCxDQUFDO1lBQ0QsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDO0tBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlU2NoZW1lcyB9IGZyb20gJ3JldGUnO1xyXG5cclxuaW1wb3J0IHsgQ29udGV4dE1lbnVSZW5kZXIgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlbmRlclByZXNldCB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBQcmVzZXQgZm9yIHJlbmRlcmluZyBjb250ZXh0IG1lbnUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXA8U2NoZW1lcyBleHRlbmRzIEJhc2VTY2hlbWVzLCBLIGV4dGVuZHMgQ29udGV4dE1lbnVSZW5kZXI+KHByb3BzPzogeyBkZWxheT86IG51bWJlciB9KTogUmVuZGVyUHJlc2V0PFNjaGVtZXMsIEs+IHtcclxuICBjb25zdCBkZWxheSA9IHR5cGVvZiBwcm9wcz8uZGVsYXkgPT09ICd1bmRlZmluZWQnID8gMTAwMCA6IHByb3BzLmRlbGF5XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGUoY29udGV4dCkge1xyXG4gICAgICBpZiAoY29udGV4dC5kYXRhLnR5cGUgPT09ICdjb250ZXh0bWVudScpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXRlbXM6IGNvbnRleHQuZGF0YS5pdGVtcyxcclxuICAgICAgICAgIGRlbGF5LFxyXG4gICAgICAgICAgc2VhcmNoQmFyOiBjb250ZXh0LmRhdGEuc2VhcmNoQmFyLFxyXG4gICAgICAgICAgb25IaWRlOiBjb250ZXh0LmRhdGEub25IaWRlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnQoY29udGV4dCwgcGx1Z2luKSB7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHBsdWdpbi5wYXJlbnRTY29wZSgpXHJcbiAgICAgIGNvbnN0IGVtaXQgPSBwYXJlbnQuZW1pdC5iaW5kKHBhcmVudClcclxuICAgICAgY29uc3QgcmVuZGVyZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgZW1pdCh7IHR5cGU6ICdyZW5kZXJlZCcsIGRhdGE6IGNvbnRleHQuZGF0YSB9IGFzIGFueSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbnRleHQuZGF0YS50eXBlID09PSAnY29udGV4dG1lbnUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGtleTogJ2NvbnRleHQtbWVudScsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IENvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgaXRlbXM6IGNvbnRleHQuZGF0YS5pdGVtcyxcclxuICAgICAgICAgICAgZGVsYXksXHJcbiAgICAgICAgICAgIHNlYXJjaEJhcjogY29udGV4dC5kYXRhLnNlYXJjaEJhcixcclxuICAgICAgICAgICAgb25IaWRlOiBjb250ZXh0LmRhdGEub25IaWRlLFxyXG4gICAgICAgICAgICByZW5kZXJlZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=