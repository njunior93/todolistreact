import React from 'react';
import { Button } from 'reactstrap';

interface Props{
    botao: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    disabled?: boolean
}

const Botao = ({botao, type, onClick, disabled}:Props) => {
    return (
        <Button disabled={disabled} color="primary" type={type} onClick={onClick}>
            {botao}
        </Button>
    )

}
export default Botao