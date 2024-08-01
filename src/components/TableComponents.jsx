import { getAllUserData, updateFilterState, updatePage } from "../store/slice/UserSlice";
import UserData from "./UserData";
import { FaArrowDownLong, FaArrowUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { sortByAge, sortById, sortByName } from "../utils/utils";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';



const TableComponents = ({ ClearAll }) => {
    const dispatch = useDispatch();

    const myOrder = useSelector((state) => state.users.order);
    const { filterData, totalDataLength, loading } = useSelector(state => state.users);




    // handle ID sorting
    const handleId = (e) => {
        const filterItem = sortById(filterData, myOrder);
        dispatch(updateFilterState(filterItem))
    }


    // handle Name sorting
    const handleName = (e) => {
        const filterItem = sortByName(filterData, myOrder);
        dispatch(updateFilterState(filterItem))
    }


    // handle Age sorting
    const handleAge = (e) => {
        const filterItem = sortByAge(filterData, myOrder);
        dispatch(updateFilterState(filterItem))
    }


    // Load more data on scroll
    const loadFunc = () => {
        dispatch(getAllUserData("https://dummyjson.com/users"));
        ClearAll();
    }



    if (loading === "loading") {
        return <Loading />
    }
    return (

        <div id="scrollableDiv" style={{ height: "1000px" }}>

            <InfiniteScroll

                dataLength={filterData.length}
                next={loadFunc}
                hasMore={filterData.length < totalDataLength}
                loader={<Loading />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className="container">
                    <table className="table  table-striped  table-hover table-bordered ">
                        <thead>
                            <tr>
                                <th onClick={() => handleId()}>ID <FaArrowUp className={myOrder ? "" : "text-primary"} /> <FaArrowDownLong className={myOrder ? "text-primary" : ""} /></th>
                                <th>Image</th>
                                <th onClick={() => handleName()}>Full Name <FaArrowUp className={myOrder ? "" : "text-primary"} /> <FaArrowDownLong className={myOrder ? "text-primary" : ""} /></th>
                                <th onClick={() => handleAge()}>Demography <FaArrowUp className={myOrder ? "" : "text-primary"} /> <FaArrowDownLong className={myOrder ? "text-primary" : ""} /></th>
                                <th>Designation</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterData.map((user) => {
                                    return <UserData key={user.id} user={user} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default TableComponents;
