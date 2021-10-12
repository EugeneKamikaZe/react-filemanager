export enum DataActionTypes {
    FETCH_DATA= 'FETCH_DATA',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
}

interface FetchDataAction {
    type: DataActionTypes.FETCH_DATA,
}
interface FetchDataSuccessAction {
    type: DataActionTypes.FETCH_DATA_SUCCESS,
    payload: any[]
}
interface FetchDataErrorAction {
    type: DataActionTypes.FETCH_DATA_ERROR,
    payload: string
}

export type DataAction = FetchDataAction | FetchDataSuccessAction | FetchDataErrorAction
