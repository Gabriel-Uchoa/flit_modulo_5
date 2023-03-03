import { CurrentStep, StepStyle, Subtitle, Title } from "./StyleStep"

const Step:React.FC<{currentStep: number, title: string, subtitle: string}> = (props) => {
    return(
        <StepStyle>
            <CurrentStep>
                {props.currentStep}
            </CurrentStep>
            <div>
                <Title>{props.title}</Title>
                <Subtitle id="step_subtitle">{props.subtitle}</Subtitle>
            </div>
        </StepStyle>
    )
}

export default Step