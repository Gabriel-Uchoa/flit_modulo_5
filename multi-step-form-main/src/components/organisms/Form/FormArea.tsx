import { useSelector } from "react-redux"
import { iStore } from "../../../types/store.interface"
import Finishing from "../../molecules/FormSteps/Finishing/Finishing"
import PersonalInfo from "../../molecules/FormSteps/PersonalInfo/PersonalInfo"
import PickAddOns from "../../molecules/FormSteps/PickAddOns/PickAddOns"
import SelectPlan from "../../molecules/FormSteps/SelectPlan/SelectPlan"
import Step from "../../molecules/Step/Step"
import { Container, StepsForms, StepsSection } from "./StyleFormArea"

function renderStep(step: number) {
    switch (step) {
        case 1:
            return <PersonalInfo />
        case 2:
            return <SelectPlan />
        case 3:
            return <PickAddOns />
        case 4:
            return <Finishing />
    }
}

const FormArea = () => {
    const FormStep: iStore = useSelector((state: any) => state.multiStep)
    return (
        <Container>
            <StepsSection>
                <Step currentStep={FormStep.step} step={1} title="STEP 1" subtitle="YOUR INFO" />
                <Step currentStep={FormStep.step} step={2} title="STEP 2" subtitle="SELECT PLAN" />
                <Step currentStep={FormStep.step} step={3} title="STEP 3" subtitle="ADD-ONS" />
                <Step currentStep={FormStep.step} step={4} title="STEP 4" subtitle="SUMMARY" />
            </StepsSection>
            <StepsForms>
                {renderStep(FormStep.step)}
            </StepsForms>
        </Container>
    )
}
export default FormArea