class Request {


    get = (url) => {
        fetch(url)
        .then(res=>res.json())
    }
}
 
export default Request;