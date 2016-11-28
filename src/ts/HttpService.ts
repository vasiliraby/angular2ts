export default class HttpService {
    makeRequest = (url: string) => {
        return window.fetch(url).then((response) => {
            return response.json()
        });
    };
};