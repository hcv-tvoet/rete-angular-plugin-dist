export declare function debounce(cb: () => void): {
    timeout: null | number;
    cancel(): void;
    call(delay: number): void;
};
