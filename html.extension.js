'use strict';
window.Math.randomRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
window.Number.prototype.toRad = function () {
    return this * Math.PI / 180;
};
window.Math.calculateDistance = function (lat1, lon1, lat2, lon2) {
    var R = 6371, // km
        dLat = (lat2 - lat1).toRad(),
        dLon = (lon2 - lon1).toRad(),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * Math.sin(dLon / 2) * Math.sin(dLon / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
        d = R * c;
    return d;
};
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
