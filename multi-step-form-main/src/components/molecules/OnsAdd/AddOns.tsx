import { useEffect } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import store from "../../../store"
import { addPlan } from "../../../store/MultiStepForm/action"
import { iAddOns } from "../../../types/product.interface"
import { iStore } from "../../../types/store.interface"

const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    //height: 200px;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: ease-in-out 1s;
`

const AddOns = (props: iAddOns) => {
    const FormStep: iStore = useSelector((state: any) => state.multiStep)

    const CardChecked = styled(Card)`
        background-color: ${FormStep.plan.name_plan === props.name_plan ? `hsl(217, 100%, 97%)` : "none"};
        outline: ${FormStep.plan.name_plan === props.name_plan ? `1px solid hsl(213, 96%, 18%)` : "none"};
        
    `

    const handleClick = () => {
        store.dispatch(addPlan({
            name_plan: props.name_plan,
            icon_plan: props.describe_plan,
            value_plan: props.value_plan,
        }))
    }

    return (
        <CardChecked onClick={handleClick}>
            <input type="checkbox" name="" id="" />
            <div>
                <p>{props.name_plan}</p>
                <p>{props.describe_plan}</p>
            </div>
            <div>
                <p>{props.value_plan}</p>
            </div>
        </CardChecked>
    )
}
export default AddOns