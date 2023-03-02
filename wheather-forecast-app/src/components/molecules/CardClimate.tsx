import { useSelector } from "react-redux"
import styled from "styled-components"
import store from "../../store"
import { changeModal } from "../../store/climate/actions"
import { valuesFormat } from "../../utils/DataFormated"

const CardDescribe = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    `
const CardDescribeInfo = styled.div`
    display: flex;
    border-radius: 20px;
    align-items: center;
    background-color: #0000009e;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 20px;
    cursor: pointer;
    @media screen and (max-width: 500px){
       flex-direction: column;
    }
    
    `
const CardCondition = styled.div`
    display: flex;
    width: 150px;
    align-items: center;
`
const CardMinMax = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const AreaMinMax = styled.div`
    display: flex;
    gap: 10px;
`

function groupBy(objectArray: any, property: any) {
    return objectArray.reduce(function (acc: any, obj: any) {
        var key = valuesFormat(obj[property], "dateFull");
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

const CardClimate = () => {
    const climate = useSelector((state: any) => state.climate)
    const groupedDay = Object.values(groupBy(climate.current.list, 'dt_txt'))
    const cityClickModal = groupBy(climate.current.list, 'dt_txt')


    const handleModal = (e: any) => {
        e.stopPropagation()
        store.dispatch(changeModal(cityClickModal[e.target.id]))
    }

    return (
        <>
            <div>
                <h1>{climate.current.city.name}</h1>
            </div>
            <CardDescribe>
                {groupedDay.map((dia: any) => {
                    return (
                        <CardDescribeInfo key={`${valuesFormat(dia[0].dt_txt, "dateFull")}`} id={`${valuesFormat(dia[0].dt_txt, "dateFull")}`} onClick={handleModal}>
                            <span>{valuesFormat(dia[0].dt_txt, "dateFull")}</span>
                            <AreaMinMax>
                                <CardMinMax>
                                    <span>{valuesFormat(dia[0].main.temp_min, "temper")}°C</span>
                                    <span>{valuesFormat(dia[0].main.temp_max, "temper")}°C</span>
                                </CardMinMax>
                            </AreaMinMax>
                            <CardCondition>
                                <img width={60} src={`https://openweathermap.org/img/wn/${dia[0].weather[0].icon}@2x.png`} alt={dia[0].weather[0].description} />
                                <span>{dia[0].weather[0].description}</span>
                            </CardCondition>
                        </CardDescribeInfo>
                    )
                })}
            </CardDescribe>
        </>
    )
}

export default CardClimate
