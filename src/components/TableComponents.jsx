import { updateFilterState } from "../store/slice/UserSlice";
import UserData from "./UserData";
import { FaArrowDownLong, FaArrowUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { sortByIdAndAge, sortByName } from "../utils/utils";
import Loading from "./Loading";



const TableComponents = ({ ClearAll }) => {
    const dispatch = useDispatch();

    const myOrder = useSelector((state) => state.users.order);
    const { filterData, loading } = useSelector(state => state.users);




    // handle ID sorting
    const handleId = (e) => {
        const filterItem = sortByIdAndAge(filterData, myOrder, "id");
        dispatch(updateFilterState(filterItem))
    }


    // handle Name sorting
    const handleName = (e) => {
        const filterItem = sortByName(filterData, myOrder);
        dispatch(updateFilterState(filterItem))
    }


    // handle Age sorting
    const handleAge = (e) => {
        const filterItem = sortByIdAndAge(filterData, myOrder, "age");
        dispatch(updateFilterState(filterItem))
    }




    return (

        <div className="container table-responsive">
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
                        (loading === "loading") ? <Loading /> : filterData.map((user) => {
                            return <UserData key={user.id} user={user} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TableComponents;
