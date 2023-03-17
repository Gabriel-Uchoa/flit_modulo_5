import store from "../../../../store"
import { backStep, nextStep } from "../../../../store/MultiStepForm/action"
import Button from "../../../atoms/Button"
import Describe from "../comuns/Describe"
import { ButtonsArea, CardArea, FormStepStyle, FormStyle } from "../comuns/StyleComuns"
import CardPlan from "../../CardPlan/CardPlan"
import styled from "styled-components"
import ToggleSwitch from "../../../atoms/ToggleSwitch"
import { ChangeEvent, useState } from "react"

const SelectPlan = () => {
    const [checked, setChecked] = useState(false);
    const handleClickBack = () => {
        store.dispatch(backStep(1))
    }
    const handleClickNext = () => {
        store.dispatch(nextStep(1))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };


    return (
        <FormStepStyle>
            <Describe
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />
            <FormStyle >
                <CardArea>
                    <CardPlan
                        icon_plan="src/components/assets/images/icon-arcade.svg"
                        name_plan="Arcade"
                        cobrance={checked ? "yr" : "mo"}
                        free_period={checked ? "2 months free" : ""}
                        value_plan={9}
                    />
                    <CardPlan
                        icon_plan="src/components/assets/images/icon-advanced.svg"
                        name_plan="Advanced"
                        cobrance={checked ? "yr" : "mo"}
                        free_period={checked ? "2 months free" : ""}
                        value_plan={12}
                    />
                    <CardPlan
                        icon_plan="src/components/assets/images/icon-pro.svg"
                        name_plan="Pro"
                        cobrance={checked ? "yr" : "mo"}
                        free_period={checked ? "2 months free" : ""}
                        value_plan={15}
                    />
                </CardArea>
            </FormStyle>

            <ToggleSwitch checked={checked} handleChange={handleChange} />

            <ButtonsArea>
                <Button type="back" action={handleClickBack} text="Go Back" />
                <Button type="next" action={handleClickNext} text="Next Step" />
            </ButtonsArea>

        </FormStepStyle>
    )


}

export default SelectPlan