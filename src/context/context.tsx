import { ReactNode, createContext, useState } from "react";
import { ITarefa } from "../type/iTarefa";

interface IContext{
    tarefas: ITarefa[],
    setTarefas: (tarefas: ITarefa[]) => void,
    tempo: string,
    setTempo: (tempo: string) => void
    tempoCronometro: number,
    setTempoCronometro: (tempoCronometro: number) => void
    selecionado: string,
    setSelecionado: (selecionado: string) => void
    itemSelecionado: ITarefa,
    setitemSelecionado: (itemSelecionado: ITarefa) => void
    start: boolean,
    setStart: (start: boolean) => void
    acaoBotao: string,
    setacaoBotao: (acaoBotao: string) => void
    desativado: boolean
    setDesativado: (desativado: boolean) => void
    idTempo: any
    setIdTempo: (id: any) => void
    
}

interface AppProvideProps{
    children: ReactNode
}

const inicial: IContext = {tarefas: [], setTarefas: () => {},tempo: "0", setTempo: () => {}, tempoCronometro: 0, setTempoCronometro: () =>{}, selecionado: '', setSelecionado: () =>{}, itemSelecionado: {id: '', tarefa: '', tempo: '',selecionado: false, concluido: false}, setitemSelecionado: () => {}, start: false, setStart: () => {}, acaoBotao: "", setacaoBotao: () => {}, desativado: false, setDesativado: () => {}, idTempo:null, setIdTempo: () => {}}

export const AppContext = createContext<IContext>(inicial)

export const AppProvider = ({children}: AppProvideProps) => {
    
    const [tarefas, setTarefas] = useState<ITarefa[]>([])
    const [tempo, setTempo] = useState<string>("00:00")
    const [tempoCronometro, setTempoCronometro] = useState<number>(0)
    const [selecionado, setSelecionado] = useState("");
    const [itemSelecionado, setitemSelecionado] = useState<ITarefa>(inicial.itemSelecionado);
    const [start, setStart] = useState(false);
    const [acaoBotao, setacaoBotao] = useState("");
    const [desativado, setDesativado] = useState(false);
    const [idTempo,setIdTempo] = useState<any>()
    
    return(
        <AppContext.Provider value={{tarefas,setTarefas,tempo,setTempo,tempoCronometro,setTempoCronometro, selecionado, setSelecionado, itemSelecionado, setitemSelecionado, start, setStart, acaoBotao, setacaoBotao, desativado, setDesativado, idTempo, setIdTempo }}>
            {children}
        </AppContext.Provider>
    )
}