# ImageScript
##### zero-dependency JavaScript image manipulation
[![Discord Server](https://img.shields.io/discord/691713541262147687.svg?label=Discord&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2&style=for-the-badge)](https://discord.gg/8hPrwAH)
[![Documentation](https://img.shields.io/badge/Documentationn-informational?style=for-the-badge)](https://oss-is.dreadful.tech/)
[![Github](https://img.shields.io/badge/Github-Repository-181717?logo=github&style=for-the-badge)](https://github.com/matmen/ImageScript)
[![deno.land](https://img.shields.io/badge/deno.land-181717?logo=deno&style=for-the-badge)](https://deno.land/x/imagescript)  
[![NPM](https://nodei.co/npm/imagescript.png)](https://www.npmjs.com/package/imagescript)

---

**ImageScript** is a zero-dependency alternative to common JavaScript bitmap image manipulation tools.
It can achieve much more performant results by utilizing lower-level memory access, less memory copying and WebAssembly for compression and encoding.

---

### Features
- [Decoding images](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#decode)
  - PNGs (grayscale, RGB, indexed colors) with and without alpha channels
  - JPEGs (grayscale, RGB, CMYK)
  - TIFFs
- [Decoding GIFs](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.gif.html#decode)
- [Rendering SVGs](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#rendersvg)
- [Rendering vector fonts](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#rendertext)
- Image manipulation
  functions ([crop](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#crop)
  , [rotate](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#rotate)
  , [composite](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#composite), ...)
- Color manipulation
  functions ([invert](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#invert)
  , [hueShift](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#hueshift), ...)
- Color information
  functions ([averageColor](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#averagecolor)
  , [dominantColor](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#dominantcolor), ...)
- Encoding images as [PNGs](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#encode)
  , [JPEGs](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.image.html#encodejpeg)
  and [GIFs](https://oss-is.dreadful.tech/classes/_imagescript_.gif.html#encode)
- [Encoding GIFs](https://oss-is.dreadful.tech/classes/_imagescript_._imagescript_-1.gif.html#encode)

---

### Example
[![Example](https://raw.githubusercontent.com/matmen/ImageScript/master/tests/targets/readme.png)](https://github.com/matmen/ImageScript/blob/master/tests/readme.js)

---

If you have any additional questions, feel free to join the [discord support server](https://discord.gg/8hPrwAH).
