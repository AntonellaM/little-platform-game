'use strict';

const scale = 20;

function createElement (type, className) {
    let element = document.createElement(type);
    className && element.classList.add(className);
    return element;
}

function DOMDisplay (parent, level) {
    this.wrap = parent.appendChild(createElement('div', 'game'));
    this.level = level;

    //this.wrap.appendChild();
    this.drawBackground = function () {
        let table = createElement('table', 'background');
        table.style.width = this.level.width * scale + 'px';
    }
}