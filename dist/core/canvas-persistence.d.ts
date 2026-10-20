export interface DurableStateStatus {
    enabled: boolean;
    loaded: boolean;
    path: string | null;
    elements: number;
    files: number;
    snapshots: number;
}
export declare class CanvasPersistenceError extends Error {
    name: string;
    constructor(cause: unknown);
}
export declare class CanvasFileImmutabilityError extends Error {
    name: string;
    constructor(fileId: string);
}
export declare class CanvasFileReferenceError extends Error {
    name: string;
    constructor(fileId: string);
}
export declare function durableStateDirectory(): string | null;
export declare function durableStatePath(): string | null;
export declare function durableStateEnabled(): boolean;
export declare function durableBlobDirectory(): string | null;
export declare function acquireDurableStateLock(): void;
export declare function releaseDurableStateLock(): void;
export declare function commitCanvasMutation<T>(mutate: () => T): T;
export declare function loadDurableState(): DurableStateStatus;
//# sourceMappingURL=canvas-persistence.d.ts.map