export function debounce(cb) {
    return {
        timeout: null,
        cancel() {
            if (this.timeout) {
                window.clearTimeout(this.timeout);
                this.timeout = null;
            }
        },
        call(delay) {
            this.timeout = window.setTimeout(() => {
                cb();
            }, delay);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVib3VuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9uZzE4Ly5zcmMvcHJlc2V0cy9jb250ZXh0LW1lbnUvZGVib3VuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFFBQVEsQ0FBQyxFQUFjO0lBQ3JDLE9BQU87UUFDTCxPQUFPLEVBQUUsSUFBcUI7UUFDOUIsTUFBTTtZQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDckIsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsS0FBYTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNwQyxFQUFFLEVBQUUsQ0FBQTtZQUNOLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNYLENBQUM7S0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShjYjogKCkgPT4gdm9pZCkge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aW1lb3V0OiBudWxsIGFzIG51bGwgfCBudW1iZXIsXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcclxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYWxsKGRlbGF5OiBudW1iZXIpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNiKClcclxuICAgICAgfSwgZGVsYXkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==