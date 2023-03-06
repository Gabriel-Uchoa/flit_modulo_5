import { useSelector } from "react-redux"
import { iStore } from "../../../types/store.interface"
import renderStep from "../../molecules/FormSteps"
import Step from "../../molecules/Step/Step"
import { Container, StepsForms, StepsSection } from "./StyleFormArea"

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