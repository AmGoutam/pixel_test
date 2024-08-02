import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sortingAll } from "../utils/utils";
import { getAllUserData, setData, updateFilterState } from '../store/slice/UserSlice';
import { CiFilter } from "react-icons/ci";



const TableHeader = ({ ClearAll, cityRef, genderRef, dataRef }) => {

    const [filter, setFilter] = useState({
        gender: '',
        city: ''
    });


    const dispatch = useDispatch()
    const { userData, limit } = useSelector(state => state.users);



    // Filter unique data from API like gender and city
    let gender = [...new Set(userData.map((user) => user.gender))]
    let city = [...new Set(userData.map(user => user.address.city))]

    useEffect(() => {
        dispatch(getAllUserData('https://dummyjson.com/users'));
    }, [limit])



    // Handle Data change
    const handleData = (e) => {
        dispatch(setData(e.target.value));
        cityRef.current.value = "";
        genderRef.current.value = "";
    }


    // Handle Gender change
    const handleGender = (e) => {
        setFilter(prevFilter => ({ ...prevFilter, gender: e.target.value }));
    }


    // Handle City change
    const handleCity = (e) => {
        setFilter(prevFilter => ({ ...prevFilter, city: e.target.value }));
    }


    // Trigger filter on state change
    const triggerFilter = () => {
        const filterItem = sortingAll(userData, filter);
        dispatch(updateFilterState(filterItem))
    }



    // useEffect will trigger when we are doing filter like city and gender
    useEffect(() => {
        triggerFilter();
    }, [filter]);


    return (
        <div className='container d-flex justify-content-between justify-content-between my-3'>
            <h1 className='fs-3'>Employees</h1>
            <div className='d-flex'>
                <div className='me-2'>
                    <CiFilter className='clearBtn' onClick={ClearAll} />
                </div>
                <div className='me-2'>
                    <select className="form-select" onChange={e => handleData(e)} ref={dataRef}>
                        <option value={10}>10</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <div className='me-2'>
                    <select className="form-select" onChange={(e) => handleCity(e)} ref={cityRef} defaultValue={""}>
                        <option selected value={""}>City</option>
                        {
                            city.map((ele, index) => {
                                return <option key={index} value={ele}>{ele}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <select className="form-select" onChange={(e) => handleGender(e)} ref={genderRef} defaultValue={""}>
                        <option selected value={""}>Gender</option>
                        {
                            gender.map((ele, index) => {
                                return <option key={index} value={ele}>{ele}</option>
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TableHeader
