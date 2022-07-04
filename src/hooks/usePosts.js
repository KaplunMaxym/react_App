import {useMemo} from "react";

export const useSortedPosts = (post, sort) => {
    //useMemo - хук (визивається тільки тоді коли одна з залежностей міняється)
    const sortedPost = useMemo(() => {
        if(sort){
            return [...post].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return post;
    }, [sort, post])
    return sortedPost;
}

export const usePosts = (post, sort, query) => {
    const sortedPost = useSortedPosts(post, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPost])

    return sortedAndSearchedPosts;
}