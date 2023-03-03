import styled from "styled-components";

export const StepStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const CurrentStep = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: medium;
    border: 1px solid ${props => props.theme.palette.neutral.white};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: ${props => props.theme.palette.neutral.white};
`
export const Title = styled.p`
    color: ${props => props.theme.palette.neutral.light_gray};
    font-size: .7rem;
`

export const Subtitle = styled.p`
    color: ${props => props.theme.palette.neutral.white};
    font-size: .9rem;
`