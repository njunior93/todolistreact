import { ITarefa } from "../../../type/iTarefa"
import style from '../Lista.module.scss';
import * as Icone from 'react-bootstrap-icons';
import {useState, useContext} from 'react';
import { AppContext } from "../../../context/context";
import Cronometro from "../../Cronometro";
import { tempoParaSegundos } from "../../Tempo/Tempo";
import { truncateSync } from "fs";

interface Props{
    item: ITarefa
}

const Item = ({item}: Props) => {

    const {selecionado, setSelecionado} = useContext(AppContext);
    const {tarefas, setTarefas} = useContext(AppContext);
    const {tempoCronometro, setTempoCronometro} = useContext(AppContext);
    const {acaoBotao, setacaoBotao} = useContext(AppContext);
    const {itemSelecionado, setitemSelecionado} = useContext(AppContext);
    const {start, setStart} = useContext(AppContext);
    const {desativado, setDesativado} = useContext(AppContext);
    const {idTempo,setIdTempo} = useContext(AppContext);

 
    function selecionarTarefa(item:ITarefa){      
        setSelecionado(item.id)
        
        item.selecionado = true  
        setitemSelecionado(item)        
        setTempoCronometro(tempoParaSegundos(item.tempo))
              
    }

    function excluirTarefa(id:string){
        const novaLista: ITarefa[] = tarefas.filter((item) => item.id != id)
        setTarefas(novaLista)
        setStart(false)
    }

    return(
        <li onClick={() => selecionarTarefa(item)}  className={`${selecionado == item.id ? style.selecionado : ''}  ${tempoCronometro != 0 && start ? style.desabilitado : ''}`}> <p>{item.tarefa}</p> <p>{item.tempo}</p>
            <div className={style.icones}>
                <button onClick={() => excluirTarefa(item.id)}>Excluir</button>
            </div>
        </li>
    )
}

export default Item