export const nextStep = (value: any)=>{
    return {
        type: 'NEXT_STEP',
        payload: value
    }
}

export const backStep = (value: any)=>{
    return {
        type: 'BACK_STEP',
        payload: value
    }
}

export const confirm = (value: any)=>{
    return {
        type: 'CONFIRM',
        payload: value
    }
}

export const addPersonalInfo = (value: any)=>{
    return {
        type: 'ADD_PERSONAL_INFO',
        payload: value
    }
}