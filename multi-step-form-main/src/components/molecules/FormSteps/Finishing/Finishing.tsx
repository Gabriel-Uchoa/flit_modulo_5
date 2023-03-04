import store from "../../../../store"
import { backStep, confirm } from "../../../../store/MultiStepForm/action"
import Button from "../../../atoms/Button"
import Describe from "../comuns/Describe"
import { ButtonsArea, FormStepStyle } from "../comuns/StyleComuns"

const Finishing = () => {

    const handleClickConfirm = () => {
        console.log("confimr")
    }
    const handleClickBack = () => {
        store.dispatch(backStep(1))
    }

    return (
        <FormStepStyle>
            <Describe
                title="Finishing up"
                subtitle="Double-check everything looks OK before confirming."
            />

            <div>Finishing</div>

            <ButtonsArea>
                <Button type="back" action={handleClickBack} text="Go Back" />
                <Button type="confirm" action={handleClickConfirm} text="Confirm" />
            </ButtonsArea>
        </FormStepStyle>
    )


}

export default Finishing