import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserData, updatePage } from '../store/slice/UserSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const { totalDataLength, page, limit } = useSelector(state => state.users);



    useEffect(() => {
        dispatch(getAllUserData('https://dummyjson.com/users'));
    }, [page])


    const numberOfPage = Math.ceil(totalDataLength / limit);
    const myPage = [...Array(numberOfPage + 1).keys()].slice(1)


    const handlePageChange = (pageNum) => {
        dispatch(updatePage(pageNum));
    }



    const nextBtn = (page) => {
        if (page === myPage.length) return alert("You've reached last page");
        dispatch(updatePage(page + 1));
    }


    const PrevBtn = (page) => {
        if (page === 1) return;
        dispatch(updatePage(page - 1));
    }


    return (
        <div className='container'>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#" onClick={() => PrevBtn(page)}>Previous</a></li>
                    {
                        myPage.map((ele) => {
                            return <li className="page-item" key={ele}><a className={`page-link ${ele === page ? "active" : ""}`} href="#" onClick={() => handlePageChange(ele)}>{ele}</a></li>
                        })
                    }
                    <li className="page-item"><a className="page-link" href="#" onClick={() => nextBtn(page)}>Next</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Pagination
