import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({page, changePage, totalPages}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="pagination-div">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page-current' : 'page'}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;