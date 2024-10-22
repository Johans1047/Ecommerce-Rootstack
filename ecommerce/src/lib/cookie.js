import * as cookie from 'cookie';

export const setCookie = (name, value, expire, path, options = {}) => {
    return cookie.serialize(name, value, {
        maxAge: expire,
        path: path,
        ...options
    });
};

export const getCookie = (name) => {
    return cookie.parse(document.cookie)[name];
};

export const deleteCookie = (name) => {
    document.cookie = cookie.serialize(name, "", {
        path: '/',
        maxAge: -1,
    });
};
