import { useSelector } from "react-redux"
import styled from "styled-components"

const BalanceStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #cdcdcd;
`

const Balance = () => {

    const wallet = useSelector((state: any) => state.wallet)

    return (
        <BalanceStyle>
            R$ {wallet.walletValue}
        </BalanceStyle>
    )
}

export default Balance