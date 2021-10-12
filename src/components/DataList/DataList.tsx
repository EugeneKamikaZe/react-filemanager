import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchData} from "../../store/action-creator/data";

import s from './DataList.module.scss'

import {RootObject} from "../../types/interfaces";
import Item from "../Item/Item";

const DataList: React.FC = () => {
    const {data, isError, isLoading} = useTypedSelector(state => state.rootData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    if (isLoading) {
        return <div className={s.loading}>Loading...</div>
    }
    if (isError) {
        return <div className={s.error}>Loading Error</div>
    }

    return (
        <>
            {data.children && data.children.map((folder: RootObject) => (
                <Item
                    key={folder.id}
                    id={folder.id}
                    title={folder.title}
                    children={folder.children}
                />
            ))}
        </>
    );
}

export default DataList;
