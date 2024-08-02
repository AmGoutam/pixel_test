import React, { useEffect, useRef } from 'react'
import TableComponents from './components/TableComponents'
import TableHeader from './components/TableHeader'
import { getAllUserData, setData, updateFilterStateByClear } from './store/slice/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ClearAllFilters } from './utils/utils'
import Pagination from './components/Pagination'


const App = () => {
  const dispatch = useDispatch();

  const cityRef = useRef(null);
  const genderRef = useRef(null);
  const dataRef = useRef(null);
  const { loading, userData } = useSelector(state => state.users);


  // This  useEffect will be called when page first time reload
  useEffect(() => {
    dispatch(getAllUserData("https://dummyjson.com/users"));
  }, [])

  // Clear All  filter
  const ClearAll = () => {
    cityRef.current.value = '';
    genderRef.current.value = '';
    dataRef.current.value = 10;
    const filterItem = ClearAllFilters(userData)
    dispatch(updateFilterStateByClear(filterItem));
    dispatch(setData(10))
  }

  // If In Api Any Error available then this will show error
  if (loading === "error") return <h1 className='text-danger text-center'>Error Occurred</h1>;

  // If there is no error then This Components Will be Load
  return (
    <>
      <TableHeader ClearAll={ClearAll} cityRef={cityRef} genderRef={genderRef} dataRef={dataRef} />
      <TableComponents ClearAll={ClearAll} />
      <Pagination />
    </>
  )
}

export default App
