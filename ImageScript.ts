declare module "utils/crc32" {
    function _exports(buffer: any): number;
    export = _exports;
}
declare module "utils/buffer" {
    export = Buffer;
    class Buffer {
        static concat(...arrays: any[]): Uint8Array;
    }
}
declare module "utils/wasm/zlib" {
    export function compress(buffer: any, level?: number): Uint8Array;
    export function decompress(buffer: any, limit?: number): Uint8Array;
    export function compress_raw(buffer: any, level?: number): Uint8Array;
    export function decompress_raw(buffer: any, limit?: number): Uint8Array;
    export function decompress_with(buffer: any, limit: number, transform: any): any;
    export function decompress_raw_with(buffer: any, limit: number, transform: any): any;
    export function init(): Promise<void>;
    export function init(): Promise<void>;
}
declare module "utils/png" {
    export function encode(data: any, { text, width, height, channels, depth, level }: {
        text: any;
        width: any;
        height: any;
        channels: any;
        depth?: number;
        level?: number;
    }): Promise<Uint8Array>;
    export function encode(data: any, { text, width, height, channels, depth, level }: {
        text: any;
        width: any;
        height: any;
        channels: any;
        depth?: number;
        level?: number;
    }): Promise<Uint8Array>;
    export function decode(array: any): Promise<{
        width: number;
        height: number;
        pixels: Uint8Array;
    }>;
    export function decode(array: any): Promise<{
        width: number;
        height: number;
        pixels: Uint8Array;
    }>;
    export function filter_1(slice: any, pixels: any, p_offset: any, bytespp: any, row_length: any): void;
    export function filter_1(slice: any, pixels: any, p_offset: any, bytespp: any, row_length: any): void;
    export function filter_2(slice: any, pixels: any, p_offset: any, bytespp: any, row_length: any): void;
    export function filter_2(slice: any, pixels: any, p_offset: any, bytespp: any, row_length: any): void;
    export function filter_3(slice: any, pixels: any, p_offset: any, bytespp: any, row_length: any): void;
    export function filter_3(slice: any, pixels: any, p_offset: any, bytespp: any, row_length: any): void;
    export function filter_4(slice: any, pixels: any, p_offset: any, bytespp: any, row_length: any): void;
    export function filter_4(slice: any, pixels: any, p_offset: any, bytespp: any, row_length: any): void;
}
declare module "utils/wasm/font" {
    export class Font {
        constructor(scale: any, buffer: any);
        scale: any;
        ptr: any;
        free(): void;
        has(char: any): any;
        metrics(char: any, scale?: any): any;
        rasterize(char: any, scale?: any): {
            buffer: Uint8Array;
            metrics: any;
        };
    }
    export class Layout {
        ptr: any;
        refs: any[];
        clear(): void;
        lines(): any;
        free(): void;
        reset(options?: {}): void;
        append(font: any, text: any, init: any): void;
        rasterize(r: any, g: any, b: any): {
            width: any;
            height: any;
            buffer: Uint8Array;
        };
    }
    export function init(): Promise<void>;
    export function init(): Promise<void>;
}
declare module "utils/wasm/svg" {
    export function rasterize(buffer: any, fit: any, scale: any): {
        width: any;
        height: any;
        buffer: Uint8Array;
    };
    export function init(): Promise<void>;
    export function init(): Promise<void>;
}
declare module "utils/wasm/jpeg" {
    export function encode(buffer: any, width: any, height: any, quality: any): Uint8Array;
    export function decode(buffer: any, width: any, height: any): {
        width: any;
        height: any;
        format: any;
        buffer: Uint8Array;
    };
    export function init(): Promise<void>;
    export function init(): Promise<void>;
}
declare module "utils/wasm/tiff" {
    export function decode(buffer: any): {
        width: any;
        height: any;
        buffer: Uint8Array;
    };
    export function init(): Promise<void>;
    export function init(): Promise<void>;
}
declare module "utils/wasm/gif" {
    export class Encoder {
        constructor(width: any, height: any, loops?: number);
        slices: any[];
        ptr: any;
        cb(buffer: any): void;
        free(): void;
        u8(): Uint8Array;
        add(x: any, y: any, delay: any, width: any, height: any, buffer: any, quality: any): void;
    }
    export class Decoder {
        constructor(buffer: any, limit?: number);
        ptr: any;
        width: any;
        height: any;
        free(): void;
        frames(): {};
        frame(): {
            x: any;
            y: any;
            delay: any;
            width: any;
            height: any;
            buffer: Uint8Array;
        };
    }
    export function init(): Promise<void>;
    export function init(): Promise<void>;
}
declare module "ImageScript" {
    export type colorFunction = (x: number, y: number) => number;
    export type PNGMetadata = {
        /**
         * The images title
         */
        title?: string;
        /**
         * The images author
         */
        author?: string;
        /**
         * The images description
         */
        description?: string;
        /**
         * The images copyright info
         */
        copyright?: string;
        /**
         * The images creation timestamp
         */
        creationTime?: string | number | Date;
        /**
         * The software used to create this image
         */
        software?: string;
        /**
         * A disclaimer for the image
         */
        disclaimer?: string;
        /**
         * A warning for the image
         */
        warning?: string;
        /**
         * The images source
         */
        source?: string;
        /**
         * A comment for the image
         */
        comment?: string;
    };
    /**
     * Represents an image; provides utility functions
     */
    export class Image {
        /**
         * Converts RGBA components to an RGBA value
         * @param {number} r red (0..255)
         * @param {number} g green (0..255)
         * @param {number} b blue (0..255)
         * @param {number} a alpha (0..255)
         * @returns {number} RGBA value
         */
        static rgbaToColor(r: number, g: number, b: number, a: number): number;
        /**
         * Converts RGB components to an RGBA value (assuming alpha = 255)
         * @param {number} r red (0..255)
         * @param {number} g green (0..255)
         * @param {number} b blue (0..255)
         * @returns {number} RGBA value
         */
        static rgbToColor(r: number, g: number, b: number): number;
        /**
         * Converts HSLA colors to RGBA colors
         * @param {number} h hue (0..1)
         * @param {number} s saturation (0..1)
         * @param {number} l lightness (0..1)
         * @param {number} a opacity (0..1)
         * @returns {number} color
         */
        static hslaToColor(h: number, s: number, l: number, a: number): number;
        /**
         * Converts HSL colors to RGBA colors (assuming an opacity of 255)
         * @param {number} h hue (0..1)
         * @param {number} s saturation (0..1)
         * @param {number} l lightness (0..1)
         * @returns {number} color
         */
        static hslToColor(h: number, s: number, l: number): number;
        /**
         * Converts an RGBA value to an array of HSLA values
         * @param r {number} (0..255)
         * @param g {number} (0..255)
         * @param b {number} (0..255)
         * @param a {number} (0..255)
         * @returns {(number)[]} The HSLA values ([H, S, L, A])
         */
        static rgbaToHSLA(r: number, g: number, b: number, a: number): (number)[];
        /**
         * Converts a color value to an array of RGBA values
         * @param {number} color The color value to convert
         * @returns {number[]} The RGBA values ([R, G, B, A])
         */
        static colorToRGBA(color: number): number[];
        /**
         * Converts a color value to an array of RGB values (ignoring the colors alpha)
         * @param {number} color The color value to convert
         * @returns {number[]} The RGB values ([R, G, B])
         */
        static colorToRGB(color: number): number[];
        /**
         * @private
         */
        private static get __out_of_bounds__();
        /**
         * Use {@link https://en.wikipedia.org/wiki/Image_scaling#Nearest-neighbor_interpolation Nearest-neighbor} resizing.
         * @returns {string}
         */
        static get RESIZE_NEAREST_NEIGHBOR(): string;
        /**
         * Used for automatically preserving an images aspect ratio when resizing.
         * @returns {number}
         */
        static get RESIZE_AUTO(): number;
        /**
         * @private
         * @param {number} fg
         * @param {number} bg
         * @returns {number}
         */
        private static __alpha_blend__;
        /**
         * @param {Image} src
         * @param {Image} out
         * @param {number} x0
         * @param {number} y0
         * @param {number} x1
         * @param {number} y1
         * @private
         */
        private static __interpolate__;
        /** @private */
        private static __pawn__;
        /**
         * Creates a multi-point gradient generator
         * @param {Object<number, number>} colors The gradient points to use (e.g. `{0: 0xff0000ff, 1: 0x00ff00ff}`)
         * @return {(function(number): number)} The gradient generator. The function argument is the position in the gradient (0..1).
         */
        static gradient(colors: {
            [x: number]: number;
        }): ((arg0: number) => number);
        /**
         * @private
         */
        private static __gradient__;
        /**
         * Decodes an image (PNG, JPEG or TIFF)
         * @param {Buffer|Uint8Array} data The binary data to decode
         * @return {Promise<Image>} The decoded image
         */
        static decode(data: any | Uint8Array): Promise<Image>;
        /**
         * Scale the SVG by the given amount. For use with {@link Image.renderSVG}
         * @return {number}
         */
        static get SVG_MODE_SCALE(): number;
        /**
         * Scale the SVG to fit the given width. For use with {@link Image.renderSVG}
         * @return {number}
         */
        static get SVG_MODE_WIDTH(): number;
        /**
         * Scale the SVG to fit the given height. For use with {@link Image.renderSVG}
         * @return {number}
         */
        static get SVG_MODE_HEIGHT(): number;
        /**
         * Creates a new image from the given SVG
         * @param {string} svg The SVG content
         * @param {number} size The size to use
         * @param {number} mode The SVG resizing mode to use (one of {@link SVG_MODE_SCALE}, {@link SVG_MODE_WIDTH}, {@link SVG_MODE_HEIGHT})
         * @return {Promise<Image>} The rendered SVG graphic
         */
        static renderSVG(svg: string, size?: number, mode?: number): Promise<Image>;
        /**
         * Creates a new image containing the rendered text.
         * @param {Uint8Array} font TrueType (ttf/ttc) or OpenType (otf) font buffer to use
         * @param {number} scale Font size to use
         * @param {string} text Text to render
         * @param {number} color Text color to use
         * @param {TextLayout} layout The text layout to use
         * @return {Promise<Image>} The rendered text
         */
        static renderText(font: Uint8Array, scale: number, text: string, color?: number, layout?: TextLayout): Promise<Image>;
        /**
         * Creates a new image with the given dimensions
         * @param {number} width
         * @param {number} height
         * @returns {Image}
         */
        constructor(width: number, height: number);
        /** @private */
        private __width__;
        /** @private */
        private __height__;
        /** @private */
        private __buffer__;
        /** @private */
        private __view__;
        /** @private */
        private __u32__;
        /**
         * The images RGBA pixel data
         * @type {Uint8ClampedArray}
         */
        bitmap: Uint8ClampedArray;
        /**
         * @private
         * @returns {string}
         */
        private toString;
        /**
         * The images width
         * @returns {number}
         */
        get width(): number;
        /**
         * The images height
         * @returns {number}
         */
        get height(): number;
        /**
         * Yields an [x,y] array for every pixel in the image
         * @yields {[number, number]} The coordinates of the pixel
         * @returns {void}
         */
        [Symbol.iterator](): void;
        /**
         * Yields an [x,y,color] array for every pixel in the image
         * @yields {[number, number, number]} The coordinates and color of the pixel
         */
        iterateWithColors(): {};
        /**
         * Gets the pixel color at the specified position
         * @param {number} x
         * @param {number} y
         * @returns {number} The color value
         */
        getPixelAt(x: number, y: number): number;
        /**
         * Gets the pixel color at the specified position
         * @param {number} x
         * @param {number} y
         * @returns {Uint8ClampedArray} The RGBA value
         */
        getRGBAAt(x: number, y: number): Uint8ClampedArray;
        /**
         * Sets the pixel color for the specified position
         * @param {number} x
         * @param {number} y
         * @param {number} pixelColor
         */
        setPixelAt(x: number, y: number, pixelColor: number): Image;
        /**
         * @private
         * @param {number} x
         * @param {number} y
         * @param {number} pixelColor
         */
        private __set_pixel__;
        /**
         * @private
         * @param {number} x
         * @param {number} y
         */
        private __check_boundaries__;
        /**
         * @callback colorFunction
         * @param {number} x
         * @param {number} y
         * @returns {number} pixel color
         */
        /**
         * Fills the image data with the supplied color
         * @param {number|colorFunction} color
         * @returns {Image}
         */
        fill(color: number | colorFunction): Image;
        /**
         * Clones the current image
         * @returns {Image}
         */
        clone(): Image;
        /**
         * Resizes the image by the given factor
         * @param {number} factor The factor to resize the image with
         * @param {string} [mode=Image.RESIZE_NEAREST_NEIGHBOR] The resizing mode to use
         * @returns {Image}
         */
        scale(factor: number, mode?: string): Image;
        /** @private */
        private __scale__;
        /**
         * Resizes the image to the given dimensions.
         * Use {@link Image.RESIZE_AUTO} as either width or height to automatically preserve the aspect ratio.
         * @param {number} width The new width
         * @param {number} height The new height
         * @param {string} [mode=Image.RESIZE_NEAREST_NEIGHBOR] The resizing mode to use
         * @returns {Image} The resized image
         */
        resize(width: number, height: number, mode?: string): Image;
        /** @private */
        private __resize__;
        /**
         * @private
         * @param {number} width The new width
         * @param {number} height The new height
         */
        private __resize_nearest_neighbor__;
        /**
         * Crops an image to the specified dimensions
         * @param {number} x The x offset
         * @param {number} y The y offset
         * @param {number} width The new images width
         * @param {number} height The new images height
         * @returns {Image}
         */
        crop(x: number, y: number, width: number, height: number): Image;
        /**
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @returns {Image}
         * @private
         */
        private __crop__;
        /**
         * Draws a box at the specified coordinates
         * @param {number} x The x offset
         * @param {number} y The y offset
         * @param {number} width The box width
         * @param {number} height The box height
         * @param {number|colorFunction} color The color to fill the box in with
         * @returns {Image}
         */
        drawBox(x: number, y: number, width: number, height: number, color: number | colorFunction): Image;
        /**
         * @private
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @param {number} color
         */
        private __fast_box__;
        /**
         * Draws a circle at the specified coordinates with the specified radius
         * @param {number} x The center x position
         * @param {number} y The center y position
         * @param {number} radius The circles radius
         * @param {number|colorFunction} color
         * @returns {Image}
         */
        drawCircle(x: number, y: number, radius: number, color: number | colorFunction): Image;
        /**
         * Crops the image into a circle
         * @param {boolean} [max=false] Whether to use the larger dimension for the size
         * @param {number} [feathering=0] How much feathering to apply to the edges
         * @returns {Image}
         */
        cropCircle(max?: boolean, feathering?: number): Image;
        /**
         * Sets the images opacity
         * @param {number} opacity The opacity to apply (0..1)
         * @param {boolean} absolute Whether to scale the current opacity (false) or just set the new opacity (true)
         * @returns {Image}
         */
        opacity(opacity: number, absolute?: boolean): Image;
        /**
         * Sets the red channels saturation
         * @param {number} saturation The saturation to apply (0..1)
         * @param {boolean} absolute Whether to scale the current saturation (false) or just set the new saturation (true)
         * @returns {Image}
         */
        red(saturation: number, absolute?: boolean): Image;
        /**
         * Sets the green channels saturation
         * @param {number} saturation The saturation to apply (0..1)
         * @param {boolean} absolute Whether to scale the current saturation (false) or just set the new saturation (true)
         * @returns {Image}
         */
        green(saturation: number, absolute?: boolean): Image;
        /**
         * Sets the blue channels saturation
         * @param {number} saturation The saturation to apply (0..1)
         * @param {boolean} absolute Whether to scale the current saturation (false) or just set the new saturation (true)
         * @returns {Image}
         */
        blue(saturation: number, absolute?: boolean): Image;
        /**
         * @private
         * @param {number} value
         * @param {boolean} absolute
         * @param {number} offset
         */
        private __set_channel_value__;
        /**
         * Sets the brightness of the image
         * @param {number} value The lightness to apply (0..1)
         * @param {boolean} absolute Whether to scale the current lightness (false) or just set the new lightness (true)
         * @returns {Image}
         */
        lightness(value: number, absolute?: boolean): Image;
        /**
         * Sets the saturation of the image
         * @param {number} value The saturation to apply (0..1)
         * @param {boolean} absolute Whether to scale the current saturation (false) or just set the new saturation (true)
         * @returns {Image}
         */
        saturation(value: number, absolute?: boolean): Image;
        /**
         * Composites (overlays) the source onto this image at the specified coordinates
         * @param {Image} source The image to place
         * @param {number} [x=0] The x position to place the image at
         * @param {number} [y=0] The y position to place the image at
         * @returns {Image}
         */
        composite(source: Image, x?: number, y?: number): Image;
        /**
         * Inverts the images colors
         * @returns {Image}
         */
        invert(): Image;
        /**
         * Inverts the images value (lightness)
         * @returns {Image}
         */
        invertValue(): Image;
        /**
         * Inverts the images saturation
         * @returns {Image}
         */
        invertSaturation(): Image;
        /**
         * Inverts the images hue
         * @returns {Image}
         */
        invertHue(): Image;
        /**
         * Shifts the images hue
         * @param {number} degrees How many degrees to shift the hue by
         */
        hueShift(degrees: number): Image;
        /**
         * Gets the average color of the image
         * @returns {number}
         */
        averageColor(): number;
        /**
         * Gets the images dominant color
         * @param {boolean} [ignoreBlack=true] Whether to ignore dark colors below the threshold
         * @param {boolean} [ignoreWhite=true] Whether to ignore light colors above the threshold
         * @param {number} [bwThreshold=0xf] The black/white threshold (0-64)
         * @return {number} The images dominant color
         */
        dominantColor(ignoreBlack?: boolean, ignoreWhite?: boolean, bwThreshold?: number): number;
        /**
         * Rotates the image the given amount of degrees
         * @param {number} angle The angle to rotate the image for (in degrees)
         * @param {boolean} resize Whether to resize the image so it fits all pixels or just ignore outlying pixels
         */
        rotate(angle: number, resize?: boolean): Image | Frame;
        /**
         * @returns {Image}
         * @private
         */
        private __rotate_180__;
        /**
         * @private
         * @param {Image|Frame} image
         * @returns {Image|Frame}
         */
        private __apply__;
        /**
         * Rounds the images corners
         * @param {number} [radius=min(width,height)/4] The radius of the corners
         * @return {Image}
         */
        roundCorners(radius?: number): Image;
        fisheye(radius?: number): Image | Frame;
        /**
         * @typedef {object} PNGMetadata
         * @property {string} [title] The images title
         * @property {string} [author] The images author
         * @property {string} [description] The images description
         * @property {string} [copyright] The images copyright info
         * @property {string|number|Date} [creationTime=Date.now()] The images creation timestamp
         * @property {string} [software="github.com/matmen/ImageScript vX.X.X"] The software used to create this image
         * @property {string} [disclaimer] A disclaimer for the image
         * @property {string} [warning] A warning for the image
         * @property {string} [source] The images source
         * @property {string} [comment] A comment for the image
         */
        /**
         * Encodes the image into a PNG
         * @param {number} compression The compression level to use (0-3)
         * @param {PNGMetadata} [meta={}] Image metadata
         * @return {Promise<Uint8Array>} The encoded data
         */
        encode(compression?: number, { title, author, description, copyright, creationTime, software, disclaimer, warning, source, comment }?: PNGMetadata): Promise<Uint8Array>;
        /**
         * Encodes the image into a JPEG
         * @param {number} [quality=90] The JPEG quality to use
         * @return {Promise<Uint8Array>}
         */
        encodeJPEG(quality?: number): Promise<Uint8Array>;
    }
    /**
     * Represents a GIF image as an array of frames
     * @extends Array<Frame>
     */
    export class GIF extends Array<Frame> {
        /**
         * Decodes a GIF image
         * @param {Buffer|Uint8Array} data The binary data to decode
         * @param {boolean} [onlyExtractFirstFrame=false] Whether to end GIF decoding after the first frame
         * @return {Promise<GIF>} The decoded GIF
         */
        static decode(data: any | Uint8Array, onlyExtractFirstFrame?: boolean): Promise<GIF>;
        /**
         * Creates a new GIF image.
         * @param {Frame[]} frames The frames to create the GIF from
         * @param {number} [loopCount=0] How often to loop the GIF for (-1 = unlimited)
         * @property {number} loopCount How often the GIF will loop for
         */
        constructor(frames: Frame[], loopCount?: number);
        width: number;
        height: number;
        loopCount: number;
        /**
         * @returns {Generator<Frame, void, *>}
         */
        [Symbol.iterator](): any;
        /**
         * The GIFs duration (in ms)
         * @return {number}
         */
        get duration(): number;
        /**
         * Encodes the image into a GIF
         * @param {number} [quality=10] GIF quality ((best) 1..30 (worst))
         * @return {Promise<Uint8Array>} The encoded data
         */
        encode(quality?: number): Promise<Uint8Array>;
    }
    /**
     * Represents a frame in a GIF
     * @extends Image
     */
    export class Frame extends Image {
        /**
         * Converts an Image instance to a Frame, cloning it in the process
         * @param {Image} image The image to create the frame from
         * @param {number} [duration = 100] The frames duration (in ms)
         * @param {number} [xOffset=0] The frames offset on the x-axis
         * @param {number} [yOffset=0] The frames offset on the y-axis
         * @return {Frame}
         */
        static from(image: Image, duration?: number, xOffset?: number, yOffset?: number): Frame;
        /**
         * Creates a new, blank frame
         * @param {number} width
         * @param {number} height
         * @param {number} [duration = 100] The frames duration (in ms)
         * @param {number} [xOffset=0] The frames offset on the x-axis
         * @param {number} [yOffset=0] The frames offset on the y-axis
         * @return {Frame}
         */
        constructor(width: number, height: number, duration?: number, xOffset?: number, yOffset?: number);
        duration: number;
        xOffset: number;
        yOffset: number;
    }
    export class TextLayout {
        /**
         * Layout options for {@link renderText}
         * @param {object} options
         * @param {number} [options.maxWidth=Infinity] The texts max width
         * @param {number} [options.maxHeight=Infinity] The texts max height
         * @param {string} [options.wrapStyle='string'] The texts wrap style when reaching the max width (word, char)
         * @param {string} [options.verticalAlign='left'] The vertical align mode (left, center, right)
         * @param {string} [options.horizontalAlign='top'] The horizontal align mode (top, middle, bottom)
         * @param {string} [options.wrapHardBreaks=true] Whether to force wrap at new line characters
         */
        constructor(options: {
            maxWidth?: number;
            maxHeight?: number;
            wrapStyle?: string;
            verticalAlign?: string;
            horizontalAlign?: string;
            wrapHardBreaks?: string;
        });
        maxWidth: number;
        maxHeight: number;
        wrapStyle: string;
        verticalAlign: string;
        horizontalAlign: string;
        wrapHardBreaks: boolean;
    }
    export class ImageType {
        /**
         * Gets an images type (png, jpeg, tiff, gif)
         * @param {Buffer|Uint8Array} data The image binary to get the type of
         * @returns {string|null} The image type (png, jpeg, tiff, gif, null)
         */
        static getType(data: any | Uint8Array): string | null;
        /**
         * @param {DataView} view
         * @returns {boolean}
         */
        static isPNG(view: DataView): boolean;
        /**
         * @param {DataView} view
         * @returns {boolean}
         */
        static isJPEG(view: DataView): boolean;
        /**
         * @param {DataView} view
         * @returns {boolean}
         */
        static isTIFF(view: DataView): boolean;
        /**
         * @param {DataView} view
         * @returns {boolean}
         */
        static isGIF(view: DataView): boolean;
    }
    /**
     * Decodes the given image binary
     * @param {Uint8Array|Buffer} data The image data
     * @param {boolean} [onlyExtractFirstFrame] Whether to end GIF decoding after the first frame
     * @returns {Promise<GIF|Image>} The decoded image
     */
    export function decode(data: Uint8Array | any, onlyExtractFirstFrame?: boolean): Promise<GIF | Image>;
}
