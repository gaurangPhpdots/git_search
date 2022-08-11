import { toast } from 'react-toastify';
import { api } from '../services/api';

export async function searchUse(username) {
    try {
        return await api.get(`users/${username}`)
            .then(response => {
                console.log("response", response)
                // setUser(response.data);
                return response;
            });
    } catch {
        toast.error('Username was not found!', { theme: "colored" });
        console.log("Username was not found!", await api.get(`users/${username}`)
            .then(response => {
                console.log("response", response)
                // setUser(response.data);
                return response;
            }))
        return 0;
    }
}