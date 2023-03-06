import { useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import store from "../../../store"
import { addPlan } from "../../../store/MultiStepForm/action"
import { Plan } from "../../../types/product.interface"
import { iStore } from "../../../types/store.interface"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    gap: 20px;
    height: 200px;
    width: 150px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const CardPlan = (props: Plan) => {
    const FormStep: iStore = useSelector((state: any) => state.multiStep)
    const [checked, setChecked] = useState(false)

    const CardChecked = styled(Card)`
        background-color: ${FormStep.plan.name_plan === props.name_plan ? `hsl(217, 100%, 97%)` : "none"};
        outline: ${FormStep.plan.name_plan === props.name_plan ? `1px solid hsl(213, 96%, 18%)` : "none"};
    `

    const handleClick = () => {
        store.dispatch(addPlan({
            name_plan: props.name_plan,
            icon_plan: props.icon_plan,
            value_plan: props.value_plan,
            cobrance: props.cobrance
        }))
    }

    return (
        <CardChecked onClick={handleClick}>
            <img src={props.icon_plan} alt={props.name_plan} />
            <div>
                <p>{props.name_plan}</p>
                <p>${props.value_plan}/{props.cobrance}</p>
                <p>{props.free_period}</p>
            </div>
        </CardChecked>
    )
}
export default CardPlan