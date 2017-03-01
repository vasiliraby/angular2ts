export class HttpService {
    makeRequest = (url: string) => {
        return fetch(url).then((response) => {
            return response.json();
        });
    };
};