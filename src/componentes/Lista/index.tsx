import { type } from 'os'
import { ITarefa } from '../../type/iTarefa'
import style from './Lista.module.scss'
import { AppContext } from '../../context/context';
import React, { useContext, useEffect, useState } from 'react';
import * as Icone from 'react-bootstrap-icons';
import { log } from 'console';
import Item from './Item';

const Lista = () => {


    const {tarefas} = useContext(AppContext)

    return (
        <aside className={style.container_lista}>
            <h2>Lista de Tarefas</h2>
            <ul>
                {tarefas.map((item) => <Item key={item.id} item={item}/>)}     
            </ul>
        </aside>
    )

}
export default Lista