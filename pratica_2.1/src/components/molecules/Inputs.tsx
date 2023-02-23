import { useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import store from "../../store"
import { decrementWalletValue, incrementWalletValue } from "../../store/wallet/actions"
import Button from "../atoms/Button"

const ButtonsArea = styled.div`
  display: flex;
  gap: 20px;
`

const InputStyle = styled.input`
    border-radius: 20px;
    padding: 10px;
`

const Inputs = () => {
    const [current, setCurrent] = useState("")

    const walletBalanceCurrent = useSelector((state: any) => state.wallet)

    const handleChange = (e: any) => {
        if (e.target.value) {
            setCurrent(e.target.value)
        }
    }

    const Validation = (value: any) => {
        if (value && parseFloat(value) > 0) {
            return true
        } else {
            alert("Informe um valor válido e acima de 0!")
            return false
        }
    }

    const incrementHandler = () => {
        if (Validation(current)) {
            store.dispatch(incrementWalletValue(parseFloat(current)))
        }
        setCurrent("")
    }

    const decrementHandler = () => {
        if (Validation(current)) {
            if (walletBalanceCurrent > parseFloat(current)) {
                store.dispatch(decrementWalletValue(parseFloat(current)))
            } else {
                alert("Saldo indisponivel!")
            }
        }
        setCurrent("")
    }

    return (
        <ButtonsArea>
            <Button btnId="btnDepositar" action={incrementHandler}>Depositar</Button>
            <InputStyle type="number" onChange={handleChange} value={current} placeholder="Informe a quantia..." />
            <Button btnId="btnSacar" action={decrementHandler}>Sacar</Button>
        </ButtonsArea>
    )
}

export default Inputs