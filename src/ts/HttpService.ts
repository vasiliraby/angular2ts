export default class HttpService {
    makeRequest = (url: string) => {
        return window.fetch(url);
    };
};