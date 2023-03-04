import styled from "styled-components";

export const FormStepStyle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 20px;
`

export const FormDescribe = styled.div`
    color: ${props => props.theme.palette.primary.marine_blue};
`

export const Title = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.palette.primary.marine_blue};
`

export const Subtitle = styled.p`
    color: ${props => props.theme.palette.neutral.cool_gray};
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
`