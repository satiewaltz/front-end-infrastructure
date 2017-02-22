'use strict';

(function () {
    'use strict';

    var targetUrl = "";
    if (!document.head.querySelector(':scope > meta[name="lzsoft-api-url"]')) {
        throw new RangeError('You must specify API url in <meta name="lzsoft-api-url" /> tag to use front.end.infrastructure module.');
    } else {
        var metaTags = document.head.querySelector(':scope > meta[name="lzsoft-api-url"]').content.split(',');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = metaTags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var m = _step.value;

                var url = new window.URL(m);
                if (window.location.hostname === url.hostname) {
                    targetUrl = m;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (!targetUrl) {
            targetUrl = metaTags[0];
        }
    }
    window.Lzsoft.Api.Core = function (path, requestData, requestContentType) {
        var Auth = window.Lzsoft.Auth;
        var headers = new Headers();
        headers.append('Content-Type', requestContentType);
        headers.append("Authorization", Auth.Get());
        var request = {
            method: "POST",
            mode: "cors",
            body: requestData,
            headers: headers
        };
        if (targetUrl) {
            return fetch(targetUrl + path, request);
        } else {
            throw new RangeError('You must specify API url in <meta name="lzsoft-api-url" /> tag to use front.end.infrastructure module.');
            return new Promise(function (resolve, reject) {
                resolve();
            });
        }
    };
})();
//# sourceMappingURL=api.dist.map
