class Request {

    async get(url){
        const baseURL = "http://http://13.51.146.181:8080"
        console.log(url);
        const result = await fetch(url);
        return result.json();
    }
}
 
export default Request;