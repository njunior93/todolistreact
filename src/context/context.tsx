import { ReactNode, createContext, useState } from "react";
import { ITarefa } from "../type/iTarefa";

interface IContext{
    tarefas: ITarefa[],
    setTarefas: (tarefas: ITarefa[]) => void,
    tempo: string,
    setTempo: (tempo: string) => void
    tempoCronometro: number,
    setTempoCronometro: (tempoCronometro: number) => void
    selecionado: boolean,
    setSelecionado: (selecionado: boolean) => void
    concluido: any,
    setConcluido: (concluido: any) => void
    start: boolean,
    setStart: (start: any) => void
}

interface AppProvideProps{
    children: ReactNode
}

const inicial: IContext = {tarefas: [], setTarefas: () => {},tempo: "0", setTempo: () => {}, tempoCronometro: 0, setTempoCronometro: () =>{}, selecionado: false, setSelecionado: () =>{}, concluido: null, setConcluido: () => {}, start: false, setStart: () => {} }

export const AppContext = createContext<IContext>(inicial)

export const AppProvider = ({children}: AppProvideProps) => {
    
    const [tarefas, setTarefas] = useState<ITarefa[]>([])
    const [tempo, setTempo] = useState<string>("00:00")
    const [tempoCronometro, setTempoCronometro] = useState<number>(0)
    const [selecionado, setSelecionado] = useState(false);
    const [concluido, setConcluido] = useState<ITarefa>();
    const [start, setStart] = useState(true);
    
    return(
        <AppContext.Provider value={{tarefas,setTarefas,tempo,setTempo,tempoCronometro,setTempoCronometro, selecionado, setSelecionado, concluido, setConcluido, start, setStart}}>
            {children}
        </AppContext.Provider>
    )
}