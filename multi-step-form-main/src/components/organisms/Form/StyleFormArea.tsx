import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 15px;
    height: 500px;
    width: 60vw;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: ${props => props.theme.palette.neutral.white};
`

export const StepsSection = styled.section`
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    margin-right: 20px;
    gap: 20px;
    border-radius: 10px;
    background-image: url("src/components/assets/images/bg-sidebar-desktop.svg");
    background-repeat: no-repeat;
    background-size: cover;
`

export const StepsForms = styled.section`
    flex-grow: 2;
    border-radius: 10px;
`    
