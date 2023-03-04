import store from "../../../../store"
import { backStep, nextStep } from "../../../../store/MultiStepForm/action"
import Button from "../../../atoms/Button"
import Describe from "../comuns/Describe"
import { ButtonsArea, FormStepStyle } from "../comuns/StyleComuns"

const SelectPlan = () => {

    const handleClickNext = () => {
        store.dispatch(nextStep(1))
    }
    const handleClickBack = () => {
        store.dispatch(backStep(1))
    }

    return (
        <FormStepStyle>
            <Describe
                title="Select your plan"
                subtitle="You have the option of monthly or yearly billing."
            />
            <div>Plans</div>

            <ButtonsArea>
                <Button type="back" action={handleClickBack} text="Go Back" />
                <Button type="next" action={handleClickNext} text="Next Step" />
            </ButtonsArea>

        </FormStepStyle>
    )


}

export default SelectPlan