export const fetchWrapper = {
    get,
  
};

function get(url:string ) {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(url, requestOptions).then(handleResponse);
}


// helper functions

function handleResponse(response: Response): Promise<any> {
    return response.text().then((text: string) => {
        
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data.results)
        return data.results;
    });
}