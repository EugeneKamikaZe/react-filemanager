import {DataAction, DataActionTypes} from "../../types/data";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchData = (id: string = '') => {
    return async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({type: DataActionTypes.FETCH_DATA})

            const url = `http://164.90.161.80:3000/api/content${id}`
            const response = await axios.get(url)

            dispatch({type: DataActionTypes.FETCH_DATA_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: DataActionTypes.FETCH_DATA_ERROR, payload: 'Some error with fetch'})
        }
    }
}
