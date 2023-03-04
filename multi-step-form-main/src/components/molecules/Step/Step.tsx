import styled from "styled-components"
import { CurrentStep, StepStyle, Subtitle, Title } from "./StyleStep"

const Step: React.FC<{ currentStep: number, step: number, title: string, subtitle: string }> = (props) => {

    const StepActive = styled(CurrentStep)`
        background-color: ${props.currentStep === props.step
            ?
            color => color.theme.palette.primary.light_blue
            :
            false
        };
         color: ${props.currentStep === props.step
            ?
            color => color.theme.palette.primary.marine_blue
            :
            color => color.theme.palette.neutral.white
        };
    `
    return (
        <StepStyle>
            <StepActive>
                {props.step}
            </StepActive>
            <div>
                <Title>{props.title}</Title>
                <Subtitle id="step_subtitle">{props.subtitle}</Subtitle>
            </div>
        </StepStyle>
    )
}

export default Step