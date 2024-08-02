import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: [],
    filterData: [],
    page: 1,
    limit: 10,
    numerOfTotalPages: null,
    order: true,
    loading: "idleState",
    totalDataLength: 0,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        showAllUser(state, action) {
            state.userData = action.payload;
            state.filterData = state.userData;
        },
        updateFilterState(state, action) {
            state.order = !state.order;
            state.filterData = action.payload;
        },
        updateLoadingStatus(state, action) {
            state.loading = action.payload
        },
        updateFilterStateByClear(state, action) {
            state.filterData = action.payload
        },
        updatePage(state, action) {
            state.page = action.payload;
        },
        updateDataLength(state, action) {
            state.totalDataLength = action.payload;
        },
        setData(state, action) {
            state.limit = action.payload;
        }
    }
})
export default userSlice.reducer;
export const {
    showAllUser,
    updateFilterState,
    updateLoadingStatus,
    updateFilterStateByClear,
    updatePage,
    updateDataLength,
    setData
}
    = userSlice.actions;




// ***************************

// Middleware funtion here fetch data from api and dispatch action to update state
export function getAllUserData(url) {
    const fetchAllUserData = async (dispatch, getState) => {
        const { page, limit, loading } = getState().users;


        if (loading === "loading") return; // Stop if already loading or if all data is loaded
        dispatch(updateLoadingStatus("loading"))


        try {
            const response = await fetch(`${url}?limit=${limit}&skip=${(page - 1) * limit}`);
            const results = await response.json();

            dispatch(showAllUser(results.users))
            dispatch(updateLoadingStatus("success"));
            dispatch(updateDataLength(results.total))

        } catch (error) {
            console.log(error);
            dispatch(updateLoadingStatus("error"));
        }
    }
    return fetchAllUserData;
}