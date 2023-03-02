import styled from "styled-components"
import Form from "./Form"

const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const Header = () => {
    return (
        <HeaderStyled>
            <div>
                Previsão do Tempo
            </div>
            <Form />
        </HeaderStyled>
    )
}
export default Header