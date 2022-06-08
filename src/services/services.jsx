import axios from "axios";

export const getAllCaps = async () => {
    const response = await axios.get('http://159.89.2.247:8003/api/caps/');
    return response.data.results;
}

export const getCapById = async (id) => {
    const response = await axios.get(`http://159.89.2.247:8003/api/caps/${id}/`);
    return response.data;
}

export const getAllUsers = async () => {
    const response = await axios.get(`http://159.89.2.247:8003/api/users/`);
    return response.data.results;
}

export const getUserById = async (id) => {
    const response = await axios.get(`http://159.89.2.247:8003/api/users/${id}/`);
    return response.data;
}

export const createUser = async (user) => {
    await axios.post("http://159.89.2.247:8003/api/users/signup/", user);
}

export const signInUser = async (user) => {
    await axios.post("http://159.89.2.247:8003/api/users/signin/", user);
}


