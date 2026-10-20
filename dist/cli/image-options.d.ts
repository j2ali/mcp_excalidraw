import type { ExportImageOptions, ImageRenderer } from '../types.js';
export declare const IMAGE_FLAG_SPEC: {
    readonly out: {
        readonly takesValue: true;
    };
    readonly format: {
        readonly takesValue: true;
    };
    readonly 'no-background': {
        readonly takesValue: false;
    };
    readonly renderer: {
        readonly takesValue: true;
    };
    readonly dark: {
        readonly takesValue: false;
    };
    readonly scale: {
        readonly takesValue: true;
    };
    readonly padding: {
        readonly takesValue: true;
    };
    readonly ids: {
        readonly takesValue: true;
    };
    readonly frame: {
        readonly takesValue: true;
    };
    readonly 'embed-scene': {
        readonly takesValue: false;
    };
    readonly 'no-embed-fonts': {
        readonly takesValue: false;
    };
};
export declare const IMAGE_FLAG_USAGE = "[--format png|svg] [--no-background] [--dark] [--scale N] [--padding N] [--ids a,b,c] [--frame <id>] [--embed-scene] [--no-embed-fonts]";
type Flags = Record<string, string | boolean | string[] | undefined>;
export declare function imageFormatFromFlags(flags: Flags, fallback?: 'png' | 'svg'): 'png' | 'svg';
export declare function imageRendererFromFlags(flags: Flags): ImageRenderer;
export declare function imageOptionsFromFlags(flags: Flags, format: 'png' | 'svg'): ExportImageOptions;
export {};
//# sourceMappingURL=image-options.d.ts.map