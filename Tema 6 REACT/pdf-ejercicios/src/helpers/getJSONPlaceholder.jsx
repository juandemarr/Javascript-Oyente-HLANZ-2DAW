const apiUsers = async () => {
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        return data.json();
    }catch(e){
        console.log(e);
    }
}

const apiComments = async (id) => {
    try{
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return data.json();
    }catch(e){
        console.log(e);
    }
}
export default {apiUsers,apiComments};
