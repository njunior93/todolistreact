import { useContext } from "react";
import { AppContext } from "../../../context/context";

const Relogio = () => {

    const {tempoCronometro, setTempoCronometro} = useContext(AppContext)

    const minutos = Math.floor(tempoCronometro / 60);
    const segundos = tempoCronometro % 60;

    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');

    return(
        <>
        <span>{minutoDezena}</span>
        <span>{minutoUnidade}</span>
        <span>:</span>
        <span>{segundoDezena}</span>
        <span>{segundoUnidade}</span>
        </>
    )
}

export default Relogio