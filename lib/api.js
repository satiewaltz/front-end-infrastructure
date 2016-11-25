'use strict';
window.Lzsoft.Api.Core = async function (subPath, requestMethod, requestData, requestContentType) {
    const Auth = window.Auth;
    const serverPath = 'http://localhost:8000';
    let headers = new Headers();
    headers.append('Content-Type', requestContentType);
    headers.append("Authorization", Auth.Code());
    let request = {
        method: requestMethod,
        mode: "cors",
        body: requestData,
        headers: headers
    };
    let response = await fetch(serverPath + subPath, request);
    return response;
};
window.Lzsoft.Api.Get = async function (subPath) {
    let response = await window.Api.Core(subPath, "GET");
    let json = await response.json();
    return json;
};
window.Lzsoft.Api.Post = async function (subPath, data) {
    let response = await window.Api.Core(subPath, "POST", data, "application/json");
    let json = await response.json();
    return json;
};
window.Lzsoft.Api.Upload = async function (file) {
    let response = await window.Api.Core("/file/upload", "POST", file, file.type);
    let json = await response.json();
    return json;
};
