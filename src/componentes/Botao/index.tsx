import { useContext, useEffect, useState } from "react";
import { Button } from 'reactstrap';
import { AppContext } from "../../context/context";

interface Props{
    botao: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    disabled?: boolean
}

const Botao = ({botao, type, onClick, disabled}:Props) => {

    const {acaoBotao, setacaoBotao} = useContext(AppContext);
    setacaoBotao(botao)

    return (
        <Button disabled={disabled} color="primary" type={type} onClick={onClick}>
            {botao}
        </Button>
    )

}
export default Botao