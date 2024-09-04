"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ImageElement = ({ src, alt = '', width, height, }) => {
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', src);
    imageElement.setAttribute('alt', alt);
    if (width) {
        imageElement.setAttribute('width', width);
    }
    if (height) {
        imageElement.setAttribute('height', height);
    }
    return imageElement;
};
exports.default = ImageElement;
