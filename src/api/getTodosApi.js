import axios from "axios"

const end_point = "https://jsonplaceholder.typicode.com/todos";
const getTodos = axios.create({
    baseURL: end_point,
})
export default getTodos;
