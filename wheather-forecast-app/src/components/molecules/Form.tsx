import { useState } from "react"
import styled from "styled-components"
import getClimate from "../../api/getClimate"
import getCoordinatesByName from "../../api/getCoordinatesByName"
import store from "../../store"
import { addCurrentClimate } from "../../store/climate/actions"

const controllerAPI = async (city: string) => {
    //Adiconar verificação se cidade já foi pesquisada
    const coordinatesCity = await getCoordinatesByName(city)
    const climateCity = await getClimate(coordinatesCity)
    store.dispatch(addCurrentClimate(climateCity))
}

const InputStyled = styled.input`
    border-radius: 20px;
    padding: 5px 10px;
`
const ButtonStyled = styled.button`
    border-radius: 20px;
    width: 40%;
    padding: 5px 10px;
`
const FormStyled = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: row;
`
const Form = () => {
    const [current, setCurrent] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        controllerAPI(current)
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            <InputStyled type="text" value={current} onChange={(e) => setCurrent(e.target.value)} required />
            <ButtonStyled type="submit">Pesquisar</ButtonStyled>
        </FormStyled>
    )
}

export default Form