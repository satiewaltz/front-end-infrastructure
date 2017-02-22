"use strict";

window.location.staticAssign = function (val) {
    window.history.pushState(null, null, val);
    window.dispatchEvent(new Event("popstate"));
};
window.location.pathLastSection = function () {
    var path = window.location.path;
    return window.location.pathname.split('/').pop();
};
window.location.GetParam = function (name) {
    var params = {};
    var ps = window.location.search.substr(1).split("&");
    for (var i = 0; i < ps.length; i++) {
        var a = ps[i].split("=");
        params[a[0]] = a[1];
    }
    return params[name];
};
//# sourceMappingURL=location.dist.map
