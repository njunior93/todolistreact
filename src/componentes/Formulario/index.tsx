import React, { useContext, useState } from 'react';
import Botao from '../Botao';
import { Input } from 'reactstrap';
import style from './Formulario.module.scss'
import Lista from '../Lista';
import { ITarefa } from '../../type/iTarefa';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../../context/context';
import Cronometro from '../Cronometro';

const Formulario = () => {

    const {tarefas, setTarefas} = useContext(AppContext)
    const [tarefa, setTarefa] = useState<any>("");
    const {tempo,setTempo} = useContext(AppContext)

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(([...tarefas, {id: uuidv4() ,tarefa:tarefa, tempo:tempo, selecionado:false, concluido:false}]))
    }

    return (
        <main className={style.container}>
            <form onSubmit={adicionarTarefa}>  
                <div>
                    <label htmlFor='tarefa'>Adicione uma tarefa</label>
                    <Input id="tarefa" value={tarefa} onChange={valor => setTarefa(valor.target.value)} placeholder='Digite aqui' required/>
                    <label htmlFor="tempo">Tempo</label>
                    <Input type="time" step="1" name='tempo' id='tempo' value={tempo} onChange={valor => setTempo(valor.target.value)}   min="00:00:00" max="01:30:00"/>
                    <Botao botao="Adicionar" type="submit"/>
                </div>                
            </form>  
            <Cronometro/>
            <Lista/>       
        </main>
    )

}
export default Formulario