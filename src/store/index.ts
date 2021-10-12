import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {dataReducer} from "./reducers/dataReducer";

export const rootReducer = combineReducers({
    rootData: dataReducer,
    childrenData: dataReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
