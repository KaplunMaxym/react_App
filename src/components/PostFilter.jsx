import React from 'react';
import MyInputOne from "./UI/input/MyInputOne";
import MySelectOne from "./UI/select/MySelectOne";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInputOne
                placeholder='search'
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelectOne
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="sort by"
                options={[
                    {value: 'title', name: 'sort by title'},
                    {value: 'description', name: 'sort by descr'}
                ]}
            />
        </div>
    );
};

export default PostFilter;