import { ChangeEvent, useState } from "react"
import store from "../../../../store"
import { backStep, nextStep } from "../../../../store/MultiStepForm/action"
import Button from "../../../atoms/Button"
import AddOns from "../../OnsAdd/AddOns"
import Describe from "../comuns/Describe"
import { AddOnsArea, ButtonsArea, CardArea, FormStepStyle, FormStyle } from "../comuns/StyleComuns"

const PickAddOns = () => {
    const [checked, setChecked] = useState(false);

    const handleClickNext = () => {
        store.dispatch(nextStep(1))
    }
    const handleClickBack = () => {
        store.dispatch(backStep(1))
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };


    return (
        <FormStepStyle>
            <Describe
                title="Pick add-ons"
                subtitle="Add-ons help enhance your gaming experience."
            />
            <FormStyle >
                <AddOnsArea>
                    <AddOns
                        name_plan="Online Service"
                        describe_plan="Access to multiplayer games"
                        value_plan={10}
                    />
                    <AddOns
                        name_plan="Larger Storage"
                        describe_plan="Extra 1TB of cloud save"
                        value_plan={20}
                    />
                    <AddOns
                        name_plan="Customizable Profile"
                        describe_plan="Custom theme on your profile"
                        value_plan={15}
                    />
                </AddOnsArea>
            </FormStyle>

            <ButtonsArea>
                <Button type="back" action={handleClickBack} text="Go Back" />
                <Button type="next" action={handleClickNext} text="Next Step" />
            </ButtonsArea>

        </FormStepStyle>
    )


}

export default PickAddOns