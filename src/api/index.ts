import axios, { AxiosResponse } from 'axios';

import { IFoo, IFooFormValues } from '../modules/foo/models/foo';

axios.defaults.baseURL = process.env.API_HOST || 'http://localhost:5000/api'


axios.interceptors.response.use( undefined, ( error ) => {

    if( error.message === 'Network Error' && !error.response){
        alert('Network error -make sure api is running!');
        return
    }
    const { status } = error.response;

    if( status === 500) alert('Server error');

    throw error.response;
});


// adding jwt
axios.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('jwt');

    if( !config.headers ) return config;
    
    if( token )
        config.headers.authorization = `Bearer ${token}` ?? '';

    return config;
}, ( error ) => Promise.reject( error ));



// axios mapping
const responseBody = ( response: AxiosResponse ) => response.data

export const requestMap = {
    get: ( url: string ) => axios.get( url ).then( responseBody ),
    post: (url: string, body: {} ) => axios.post( url, body ).then( responseBody ),
    put: ( url: string, body: {}) => axios.put( url, body ).then( responseBody ),
    delete: ( url: string ) => axios.delete( url ).then( responseBody ),
    postFile: ( url: string, media: any ) => {  //  ADD interface when media is required
        const formData = new FormData();
        formData.append('File', media.file);
        formData.append('ChannelId', media.channelId as string);
        formData.append('MessageType', '2');

        return axios.post( url, formData, {
            headers: { 'Content-Type': 'multipart/form-data'}
        }).then( responseBody );
    }
}


export * from './foo'