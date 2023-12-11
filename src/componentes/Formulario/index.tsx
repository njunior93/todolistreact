import React, { useContext, useState } from 'react';
import Botao from '../Botao';
import { Input } from 'reactstrap';
import style from './Formulario.module.scss'
import Lista from '../Lista';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../../context/context';
import Cronometro from '../Cronometro';

const Formulario = () => {

    const {tarefas, setTarefas} = useContext(AppContext)
    const [tarefa, setTarefa] = useState<any>("");
    const {tempo,setTempo} = useContext(AppContext)
    const {desativado, setDesativado} = useContext(AppContext);
    const {start, setStart} = useContext(AppContext);

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(([...tarefas, {id: uuidv4() ,tarefa:tarefa, tempo:tempo, selecionado:false, concluido:false}]))
        setTarefa("");
        setTempo("00:00")
    }

    return (
        <main className={style.container}>
            <div className={style.formulario}>
                <form  onSubmit={adicionarTarefa}>  
                    <div>
                        <label htmlFor='tarefa'>Adicione uma tarefa</label>
                        <Input disabled = {desativado} id="tarefa" value={tarefa} onChange={valor => setTarefa(valor.target.value)} placeholder='Digite aqui' required maxLength={12}/>
                        <label htmlFor="tempo">Tempo</label>
                        <Input disabled = {desativado} type="time" step="1" name='tempo' id='tempo' value={tempo} onChange={valor => setTempo(valor.target.value)} min="00:00:01" max="01:30:00" required/>
                        <Botao disabled = {desativado} botao="Adicionar" type="submit"/>
                    </div>                
                </form> 
            </div>

            <div className={style.lista}>
                <Lista/>
            </div> 

            <div className={style.cronometro}>
                <Cronometro/>
            </div>
          
        </main>   
    )

}
export default Formulario