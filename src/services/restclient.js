import Axios from 'axios';

let getAll = async () => {
    let result = await Axios.get('http://localhost:3000/api/postaus')
    return result.data;
}

let getOne = async (id) => {
    let getPost = await Axios.get('http://localhost:3000/api/postaus/' + id, {
    })
    return getPost.data;
}

let addNew = async (p) => {
    let newOne = await Axios.post('http://localhost:3000/api/postaus', p)
    return newOne;
}

let deletePost = async (id) => {
    let delOne = await Axios.delete('http://localhost:3000/api/postaus/' + id, {
    })
    return delOne;
}

let editPost = async (id, p) => {
    let edited = await Axios.put('http://localhost:3000/api/postaus/' + id, p)
    return edited;
}

let editLike = async (id, p) => {
    let edited = await Axios.put('http://localhost:3000/api/postaus/' + id, p)
    return edited.data;
}

export { getAll, getOne, addNew, deletePost, editPost, editLike }
