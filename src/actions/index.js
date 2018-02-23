import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

const BASE_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "davidjocic93";

export function fetchPosts(id) {

    let url;
    id ? url = `${BASE_URL}/posts/${id}` : url = `${BASE_URL}/posts`;

    const request = axios.get(url, {
        params: {
            key: API_KEY
        }
    });

    if (id) {
        return {
            type: FETCH_POST,
            payload: request
        };
    } else {
        return {
            type: FETCH_POSTS,
            payload: request
        };
    }
}

export function createPost(props) {
    const request = axios.post(`${BASE_URL}/posts`, props, {
        params: {
            key: API_KEY
        }
    });

    return {
        type: CREATE_POST,
        payload: request
    };

}

export function deletePost(id) {
    const request = axios.delete(`${BASE_URL}/posts/${id}`, {
        params: {
            key: API_KEY
        }
    });

    return {
        type: DELETE_POST,
        payload: request
    };
}