class Request {

    constructor(){
    this.baseURL = "http://localhost:8080";
    }

    async get(url){
        console.log(this.baseURL + url);
        const result = await fetch(this.baseURL + url);
        return result.json();
    }
}
 
export default Request;