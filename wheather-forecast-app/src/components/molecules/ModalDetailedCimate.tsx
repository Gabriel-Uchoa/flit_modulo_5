import { useSelector } from "react-redux"
import styled from "styled-components"
import store from "../../store"
import { changeModal } from "../../store/climate/actions"
import { valuesFormat } from "../../utils/DataFormated"

const ModalBack = styled.div`
    min-height: 100%;
    min-width: 100%;
    backdrop-filter: blur(5px);
    top: 0;
    position: absolute;
    background-color: #00000060;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`
const ModalContent = styled.div`
    color: black;
    width: 500px;
    padding: 20px;
    background-color: white;
    border-radius: 20px 20px 0px 0px;
    background-color: #5e6b7c;
    color: white;
`
const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    #dia{
        font-size: 40px;
        font-weight: bold;
    }
    #min_max{
        display: flex;
        padding: 5px;
        flex-direction: column;
        gap: 5px;
        border-left: 1px solid #1C2025;
    }
`
const ModalTemperHour = styled.div`
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(8, 1fr);
    margin: 20px auto;
`
const ModalInfo = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    flex-direction: column;
`
const CloseButton = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
`

const ModalDetailedCimate = () => {

    const climate = useSelector((state: any) => state.climate)

    const closeModal = (e: any) => {
        store.dispatch(changeModal(null))
    }


    return (
        <ModalBack>
            <ModalContent>
                <CloseButton onClick={closeModal}>
                    <img width={30} src="https://cdn-icons-png.flaticon.com/512/6276/6276642.png" alt="Close" />
                </CloseButton>
                <ModalHeader>
                    <p id="dia">{valuesFormat(climate.modal[0].dt_txt, "day")}</p>
                    <div id="min_max">
                        <p id="max">{valuesFormat(climate.modal[0].main.temp_max, "temper")}°C</p>
                        <p id="min">{valuesFormat(climate.modal[0].main.temp_min, "temper")}°C</p>
                    </div>
                </ModalHeader>
                <ModalTemperHour >
                    {climate.modal.map((item: any, index: any) => {
                        return (
                            <ModalInfo key={index}>
                                <p>{valuesFormat(item.dt_txt, "hour")}H</p>
                                <img width={30} src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt={item.weather[0].description} />
                                <p>{valuesFormat(item.main.temp_max, "temper")}°C </p>
                                <p>{valuesFormat(item.main.temp_min, "temper")}°C</p>
                            </ModalInfo>
                        )
                    })}
                </ModalTemperHour>
            </ModalContent>
        </ModalBack>
    )
}

export default ModalDetailedCimate
