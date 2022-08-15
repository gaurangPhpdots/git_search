import axios from 'axios';

export const API = 'https://api.github.com';

export const fetchData = async query => {
    // console.log("query",query)
    const url = `${API}/users/${query}`;

    return axios.get(url);
};

export const userRepos = async query => {

    const url = `${API}/users/${query}/repos`;

    return axios.get(url);
    
}