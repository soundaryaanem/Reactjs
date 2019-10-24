/**
 * Description: Api creater
 * Date: 4/23/2019
 */

import axios from 'axios/index';

let apiRoot;

export const xApi = (optional) => {

    let headers = {
        // Authorization: `Bearer ${localStorage.token}`,
        'Content-Type': optional
    }

    let xApi = axios.create({
        baseURL: apiRoot,
        headers: headers
    });

    return xApi;
};
