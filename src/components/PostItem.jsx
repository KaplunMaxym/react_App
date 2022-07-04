import React from "react";
import ButtonOne from "./UI/button/ButtonOne";
import {useNavigate} from "react-router";

const PostItem = (props) => {
    let navigate = useNavigate();

    return(
        <div className="post">
            <div className="content" >
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_btn">
                <ButtonOne onClick={() => navigate("/posts/" + props.post.id)}>open</ButtonOne>
                <ButtonOne onClick={() => props.remove(props.post)}>delete</ButtonOne>
            </div>
        </div>
    )
}
export default PostItem;
