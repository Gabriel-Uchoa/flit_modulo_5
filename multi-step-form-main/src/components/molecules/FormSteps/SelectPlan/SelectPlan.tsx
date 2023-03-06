import store from "../../../../store"
import { backStep, nextStep } from "../../../../store/MultiStepForm/action"
import Button from "../../../atoms/Button"
import Describe from "../comuns/Describe"
import { ButtonsArea, FormStepStyle, FormStyle } from "../comuns/StyleComuns"
import CardPlan from "../../CardPlan/CardPlan"
import styled from "styled-components"

const SelectPlan = () => {
    const handleClickBack = () => {
        store.dispatch(backStep(1))
    }
    const handleClickNext = () => {
        store.dispatch(nextStep(1))
    }
    const CardArea = styled.div`
        display: flex;
        gap: 20px;
    `
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
                        cobrance="mo"
                        value_plan={9}
                        className="plan"
                    />
                    <CardPlan
                        icon_plan="src/components/assets/images/icon-advanced.svg"
                        name_plan="Advanced"
                        cobrance="mo"
                        value_plan={12}
                        className="plan"
                    />
                    <CardPlan
                        icon_plan="src/components/assets/images/icon-pro.svg"
                        name_plan="Pro"
                        cobrance="mo"
                        value_plan={15}
                        className="plan"
                    />
                </CardArea>
            </FormStyle>

            <ButtonsArea>
                <Button type="back" action={handleClickBack} text="Go Back" />
                <Button type="next" action={handleClickNext} text="Next Step" />
            </ButtonsArea>

        </FormStepStyle>
    )


}

export default SelectPlan