import styled from "styled-components"
import Balance from "../molecules/Balance"
import Inputs from "../molecules/Inputs"
import ToggleSwitch from "../molecules/ToggleSwitch"

const WalletStyle = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`
const Wallet = () => {
    return (
        <WalletStyle>
            <ToggleSwitch/>
            <Balance />
            <Inputs />
        </WalletStyle>
    )
}
export default Wallet