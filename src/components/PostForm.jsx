import React, {useState} from 'react';
import MyInputOne from "./UI/input/MyInputOne";
import ButtonOne from "./UI/button/ButtonOne";

const PostForm = ({create}) => {
    const [onePost, setOnePost] = useState({title: '', description: ''})


    const addNewPost = (e) => {
        // Функція, яка заберає перезагрузку сторінки
        e.preventDefault()
        const newPost = {
            ...onePost, id: Date.now()
        }
        create(newPost)
        setOnePost({title: '', description: ''})
    }

    return (
        <form>
            {/*Керований елемент*/}
            <MyInputOne
                value={onePost.title}
                onChange={e => setOnePost({...onePost, title: e.target.value})}
                type='text'
                placeholder='назва'
            />
            {/*Некерований елемент*/}
            <MyInputOne
                value={onePost.description}
                onChange={e => setOnePost({...onePost, description: e.target.value})}
                type='text'
                placeholder='опис'
            />
            <ButtonOne onClick={addNewPost} >Додати</ButtonOne>
        </form>
    );
};

export default PostForm;