import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'
import { useContext, useEffect, useState } from "react";
import { ITarefa } from "../../type/iTarefa";
import { AppContext } from "../../context/context";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";


const Cronometro = () => {
 
    const {tempoCronometro, setTempoCronometro} = useContext(AppContext)
    const {selecionado, setSelecionado} = useContext(AppContext);
    const {itemSelecionado, setitemSelecionado} = useContext(AppContext);
    const {start, setStart} = useContext(AppContext);
    const {idTempo,setIdTempo} = useContext(AppContext);
    const {acaoBotao, setacaoBotao} = useContext(AppContext);
    const {desativado, setDesativado} = useContext(AppContext);
    const {tarefas, setTarefas} = useContext(AppContext);
    const [modal, setModal] = useState(false);


    useEffect(() =>{

    if(start == false || tarefas.length == 0){
        pararContagem()
    }     
    
    },[tarefas, start])


    function acao(acao: string){

        if(acao === 'Parar'){
            pararContagem();
        }

        if(acao === 'Iniciar'){
            if(itemSelecionado.selecionado && selecionado != ''){
                iniciarContagem(tempoCronometro);       
            }else{
                clearInterval(idTempo);
                setTempoCronometro(0)
            } 
        }
    }

    function pararContagem(){
            setStart(false)
            clearInterval(idTempo);
            setTempoCronometro(0)
            setSelecionado('')
            itemSelecionado.selecionado = false
            setDesativado(false)
    }

    function iniciarContagem(tempo:number){
        setDesativado(true)
        setStart(true)

        const contar = () =>{
            
            if(tempo === 0){
                clearInterval(idIntervalo)
                setModal(true)
                const novaLista: ITarefa[] = tarefas.filter((item) => item.id != itemSelecionado.id)              
                setTarefas(novaLista)
                pararContagem()
            }

            setTempoCronometro(tempo--)
                    
        }
        
        const idIntervalo = setInterval(contar,1000);
        setIdTempo(idIntervalo)
    }

    function fecharModal(){
        setModal(false)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha a tarefa e inicie o cronometro</p>
            <div className={style.relogio}>
                <Relogio/>
            </div>

            <Botao disabled={!selecionado} type="button" onClick={() => acao(acaoBotao)} botao={selecionado != '' && start ? 'Parar':'Iniciar'}/>

            <Dialog
                open={modal}
                onClose={fecharModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Tarefa concluida com sucesso"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {`A tarefa ${itemSelecionado.tarefa} foi finalizada`}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={fecharModal}>Fechar</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default Cronometro