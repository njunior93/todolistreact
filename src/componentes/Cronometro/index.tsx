import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'
import { useContext, useEffect, useState } from "react";
import { ITarefa } from "../../type/iTarefa";
import { AppContext } from "../../context/context";


const Cronometro = () => {
 
    const {tempoCronometro, setTempoCronometro} = useContext(AppContext)
    const {selecionado, setSelecionado} = useContext(AppContext);
    const {concluido, setConcluido} = useContext(AppContext);
    const {tarefas, setTarefas} = useContext(AppContext);
    const {start, setStart} = useContext(AppContext);
    const [contador,setContador] = useState(0)

    function regressiva(contador: number){

            setTimeout(() =>{
                if(contador > 0){
                    setTempoCronometro( contador - 1)
                    if(selecionado){
                        return regressiva(contador - 1)
                    }                   
                }
                const novaLista: ITarefa[] = tarefas.filter((item) => item.id != concluido.id)
                setTarefas(novaLista)
            },1000)  
    }

    function startBotao():void{
        if(selecionado){
            regressiva(tempoCronometro)
            setSelecionado(false)
        } else{
            stopCronometro(); 
        }       
    }

    function stopCronometro():void{
        setStart(true)
        setTempoCronometro(0)
        setContador(0)
        setSelecionado(false)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha a tarefa e inicie o cronometro</p>
            <div className={style.relogio}>
                <Relogio/>
            </div>
            <Botao disabled={start} type="button" onClick={() => startBotao()} botao={selecionado ? 'Iniciar' : 'Parar'}/>
        </div>
    )
}

export default Cronometro