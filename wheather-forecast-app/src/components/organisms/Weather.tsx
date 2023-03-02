import { useSelector } from "react-redux"
import styled from "styled-components"
import CardClimate from "../molecules/CardClimate"
import Header from "../molecules/Header"
import ModalDetailedCimate from "../molecules/ModalDetailedCimate"

const Main = styled.main`
    width: 80vw;
    background-color: #798aa0;
    padding: 20px;
    border-radius: 20px;
`
const Content = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1C2025;
    color: white;
    padding: 20px;
`
const Weather = () => {
    const climate = useSelector((state: any) => state.climate)
    return (
        <Content>
            {climate.modal ? <ModalDetailedCimate /> : false}
            <Header />
            {climate.current ? <Main><CardClimate /> </Main> : false}

        </Content>
    )
}

export default Weather