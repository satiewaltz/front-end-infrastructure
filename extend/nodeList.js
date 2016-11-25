window.NodeList.prototype.addEventListener = function (eventName, handler) {
    for (var i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, handler);
    }
    return this;
};
window.NodeList.prototype.remove = function () {
    for (var i = 0; i < this.length; i++) {
        this[i].remove();
    }
    return this;
};
window.NodeList.prototype.exec = function (callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
    return this;
};
window.NodeList.prototype.setAttribute = function (key, value) {
    for (var i = 0; i < this.length; i++) {
        this[i].setAttribute(key, value);
    }
    return this;
};
window.NodeList.prototype.removeAttribute = function (key) {
    for (var i = 0; i < this.length; i++) {
        this[i].removeAttribute(key);
    }
    return this;
};
window.NodeList.prototype.addClass = function (name) {
    for (var i = 0; i < this.length; i++) {
        this[i].classList.add(name);
    }
    return this;
};
window.NodeList.prototype.removeClass = function (name) {
    for (var i = 0; i < this.length; i++) {
        this[i].classList.remove(name);
    }
    return this;
};
