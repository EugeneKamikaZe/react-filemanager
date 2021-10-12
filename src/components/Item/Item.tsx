import React, {useEffect} from 'react';
import s from './Item.module.scss'
import cn from 'classnames'

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

import Toggler from '../../assets/toggler.png'
import FolderIcon from '../../assets/folder-icon.png'
import {RootObject} from '../../types/interfaces';
import {fetchData} from "../../store/action-creator/data";

const Item = ({id, title, children, onClick}: RootObject) => {
    let {data, isError, isLoading} = useTypedSelector(state => state.childrenData)
    const dispatch = useDispatch()

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        const target = e.currentTarget
        const currentId = target.getAttribute('data-id')

        target.classList.toggle('open')

        dispatch(fetchData(`?dirId=${currentId}`))
    }

    return (
        <>
            {
                children ?
                    <>
                        <div
                            className={cn(s.folder, s.folder_w_toogler)}
                            data-id={id}
                            onClick={handleClick}
                        >
                            <span className={s.toggler}>
                                <img src={Toggler} alt=""/>
                            </span>
                            <img src={FolderIcon} alt="folder" className={s.icon}/>
                            {title}
                        </div>
                    </>
                    :
                    <>
                        <div className={s.single}>
                            {
                                title.indexOf('.') !== -1 && title.indexOf('.') !== -1
                                    ?
                                    <>
                                        <span className={cn(s.children__icon, title.split('.')[1])}/>
                                        {title}
                                    </>
                                    :
                                    title
                            }
                        </div>
                    </>
            }
        </>
    );
}

export default Item;
