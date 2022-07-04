import React, {useEffect, useState} from "react";
import {getPageCount} from "../utils/pages";
import {usePosts} from "../hooks/usePosts";
import ButtonOne from "../components/UI/button/ButtonOne";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import MyModal from "../components/UI/MyModal/MyModal";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";

function Posts() {
    const [post, setPost] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPost(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPost([...post, newPost])
        setModal(false)
    }
    const sortedAndSearchedPosts = usePosts(post, filter.sort, filter.query)
    // получаємо пост з дочірнього елемента
    const removePost = (delPost) => {
        setPost(post.filter(p => p.id !== delPost.id))
    }
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }
    return (
        <div className="App">
            <ButtonOne onClick={() => setModal(true)}>
                Create
            </ButtonOne>
            <MyModal visible={modal} setVisible = {setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <br/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
            <h1>Error: ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                : <PostList remove={removePost} post={sortedAndSearchedPosts} title='Posts'/>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Posts;