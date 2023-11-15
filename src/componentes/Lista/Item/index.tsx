import { ITarefa } from "../../../type/iTarefa"
import style from '../Lista.module.scss';
import * as Icone from 'react-bootstrap-icons';
import {useState, useContext} from 'react';
import { AppContext } from "../../../context/context";
import Cronometro from "../../Cronometro";
import { tempoParaSegundos } from "../../Tempo/Tempo";

interface Props{
    item: ITarefa
}

const Item = ({item}: Props) => {

    const {selecionado, setSelecionado} = useContext(AppContext);
    const {tarefas, setTarefas} = useContext(AppContext);
    const {tempoCronometro, setTempoCronometro} = useContext(AppContext);
    const {concluido, setConcluido} = useContext(AppContext);
    const {start, setStart} = useContext(AppContext);

 
    function selecionarTarefa(item:ITarefa){      
        setSelecionado(!selecionado)
        setStart(false)

        if(!selecionado){
           setTempoCronometro(tempoParaSegundos(item.tempo))
           item.selecionado = true
           setConcluido(item)
        }else{
            setTempoCronometro(0)
            item.selecionado = false
        }
        
    }

    function finalizarTarefa(id:string){
        const novaLista: ITarefa[] = tarefas.filter((item) => item.id != id)
        setTarefas(novaLista)
    }

    return(
        <li  onClick={() => selecionarTarefa(item)} className={item.selecionado ? style.selecionado : ''}> <h3>{item.tarefa}</h3> {item.tempo}
            <div className={style.icones}>
                <i onClick={() => finalizarTarefa(item.id)}><Icone.XSquareFill color='red'/></i>
            </div>
        </li>
    )
}

export default Item