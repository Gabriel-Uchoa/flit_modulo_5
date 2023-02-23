import styled from "styled-components"
import store from "../../store"
import { decrementWalletValue, incrementWalletValue } from "../../store/wallet/actions"
import Button from "../atoms/Button"

const ButtonsArea = styled.div`
  display: flex;
  gap: 20px;
`

const Inputs = () => {
    const incrementHandler = () => {
        store.dispatch(incrementWalletValue(10))
    }

    const decrementHandler = () => {
        store.dispatch(decrementWalletValue(10))
    }
    
    return (
        <ButtonsArea>
            <Button btnId="btnDepositar" action={incrementHandler}>+10</Button>
            <Button btnId="btnSacar" action={decrementHandler}>-10</Button>
        </ButtonsArea>
    )
}

export default Inputs