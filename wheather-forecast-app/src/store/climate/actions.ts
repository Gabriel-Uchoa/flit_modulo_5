
export const addCurrentClimate = (value: any)=>{
    return {
        type: 'ADD_CURRENT_CLIMATE',
        payload: value
    }
}

export const changeModal = (value: any)=>{
    return {
        type: 'CHANGE_MODAL',
        payload: value
    }
}