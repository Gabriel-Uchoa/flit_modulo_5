const CLIMATE_INITIAL_STATE = {
    current: null,
    modal: null,
    historic: []
}

const climateReducer = (state = CLIMATE_INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'ADD_CURRENT_CLIMATE':
            return {
                current: action.payload,
                historic: [...state.historic, action.payload]
            }
        case 'CHANGE_MODAL':
            return {
                current: state.current,
                modal: action.payload,
                historic: state.historic
            }
        default:
            return state
    }
}

export default climateReducer