import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentByPostId(id)
        setComment(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            {isLoading
                ? <Loader/>
                : <div><h3>{post.id}</h3>{post.title}</div>
            }
            <br/>
            <h3>
                Comments:
            </h3>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comment.map(comm =>
                        <div style={{marginTop: 15}} key={comm.id}>
                            <h4>{comm.email}</h4>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;