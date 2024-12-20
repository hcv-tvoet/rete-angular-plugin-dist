export function useDrag(translate, getPointer) {
    return {
        start(e) {
            let previous = { ...getPointer(e) };
            function move(moveEvent) {
                const current = { ...getPointer(moveEvent) };
                const dx = current.x - previous.x;
                const dy = current.y - previous.y;
                previous = current;
                translate(dx, dy);
            }
            function up() {
                window.removeEventListener('pointermove', move);
                window.removeEventListener('pointerup', up);
                window.removeEventListener('pointercancel', up);
            }
            window.addEventListener('pointermove', move);
            window.addEventListener('pointerup', up);
            window.addEventListener('pointercancel', up);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25nMTgvLnNyYy9zaGFyZWQvZHJhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxNQUFNLFVBQVUsT0FBTyxDQUFDLFNBQW9CLEVBQUUsVUFBdUM7SUFDbkYsT0FBTztRQUNMLEtBQUssQ0FBQyxDQUFhO1lBQ2pCLElBQUksUUFBUSxHQUFHLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtZQUVuQyxTQUFTLElBQUksQ0FBQyxTQUFxQjtnQkFDakMsTUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFBO2dCQUM1QyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUE7Z0JBQ2pDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQTtnQkFFakMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtnQkFFbEIsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUNuQixDQUFDO1lBQ0QsU0FBUyxFQUFFO2dCQUNULE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQy9DLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBQzNDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDakQsQ0FBQztZQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDNUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQTtZQUN4QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzlDLENBQUM7S0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG50eXBlIFRyYW5zbGF0ZSA9IChkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkXHJcbnR5cGUgU3RhcnRFdmVudCA9IHsgcGFnZVg6IG51bWJlciwgcGFnZVk6IG51bWJlciB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRHJhZyh0cmFuc2xhdGU6IFRyYW5zbGF0ZSwgZ2V0UG9pbnRlcjogKGU6IFN0YXJ0RXZlbnQpID0+IFBvc2l0aW9uKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXJ0KGU6IFN0YXJ0RXZlbnQpIHtcclxuICAgICAgbGV0IHByZXZpb3VzID0geyAuLi5nZXRQb2ludGVyKGUpIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG1vdmUobW92ZUV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHsgLi4uZ2V0UG9pbnRlcihtb3ZlRXZlbnQpIH1cclxuICAgICAgICBjb25zdCBkeCA9IGN1cnJlbnQueCAtIHByZXZpb3VzLnhcclxuICAgICAgICBjb25zdCBkeSA9IGN1cnJlbnQueSAtIHByZXZpb3VzLnlcclxuXHJcbiAgICAgICAgcHJldmlvdXMgPSBjdXJyZW50XHJcblxyXG4gICAgICAgIHRyYW5zbGF0ZShkeCwgZHkpXHJcbiAgICAgIH1cclxuICAgICAgZnVuY3Rpb24gdXAoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgbW92ZSlcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdXApXHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB1cClcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgbW92ZSlcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHVwKVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHVwKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=