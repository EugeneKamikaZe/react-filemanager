import {DataAction, DataActionTypes} from "../../types/data";
import {DataState} from "../../types/interfaces";

const initialState: DataState = {
    data: [],
    isLoading: false,
    isError: null,
}

export const dataReducer = (state = initialState, action: DataAction): DataState => {
    switch (action.type) {
        case DataActionTypes.FETCH_DATA:
            return {isLoading: true, isError: null, data: []}
        case DataActionTypes.FETCH_DATA_SUCCESS:
            return {isLoading: false, isError: null, data: action.payload}
        case DataActionTypes.FETCH_DATA_ERROR:
            return {isLoading: false, isError: action.payload, data: []}
        default:
            return state
    }
}
