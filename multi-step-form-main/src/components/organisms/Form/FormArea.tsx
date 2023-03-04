import FormStep from "../../molecules/FormStep/FormStep"
import Step from "../../molecules/Step/Step"
import { Container, StepsForms, StepsSection } from "./StyleFormArea"
const FormArea = () => {
    return (
        <Container>
            <StepsSection>
                <Step currentStep={1} title="STEP 1" subtitle="YOUR INFO" />
                <Step currentStep={2} title="STEP 2" subtitle="SELECT PLAN" />
                <Step currentStep={3} title="STEP 3" subtitle="ADD-ONS" />
                <Step currentStep={4} title="STEP 4" subtitle="SUMMARY" />
            </StepsSection>
            <StepsForms>
                <FormStep/>
            </StepsForms>
        </Container>
    )
}
export default FormArea