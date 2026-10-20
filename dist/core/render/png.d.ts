export interface PngOptions {
    scale: number;
    fontFiles: string[];
    loadSystemFonts: boolean;
    defaultFontFamily: string;
}
export interface PngResult {
    data: Buffer;
    width: number;
    height: number;
}
export declare function inlineSymbolImages(svg: string): string;
export declare function svgToPng(svg: string, options: PngOptions): PngResult;
export declare function svgToPngIsolated(svg: string, options: PngOptions): Promise<PngResult>;
//# sourceMappingURL=png.d.ts.map