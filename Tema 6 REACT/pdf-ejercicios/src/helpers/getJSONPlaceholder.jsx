const apiUser = async () => {
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        return data.json();
    }catch(e){
        console.log(e);
    }
}
export default apiUser;
