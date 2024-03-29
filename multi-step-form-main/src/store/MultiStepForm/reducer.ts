import { iStore } from "../../types/store.interface"

const MULTI_STEP_INITIAL_STATE: iStore = {
    personal_info: {
        name: '',
        email: '',
        phone: ''
    },
    step: 1,
    plan: { cobrance: '', free_period: '', icon_plan: '', name_plan: 'Arcade', value_plan: 9 },
    addOns: [],
    summary: {
        personal_info: {
            name: '',
            email: '',
            phone: ''
        },
        plan: { cobrance: '', free_period: '', icon_plan: '', name_plan: '', value_plan: 0 },
        addOns: [],
    },
}

const multiStepFormReducer = (state = MULTI_STEP_INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'ADD_PERSONAL_INFO':
            return {
                ...state,
                personal_info: action.payload,
                summary: {...state.summary, personal_info: state.personal_info}
            }
        case 'ADD_PLAN':
            return {
                ...state,
                plan: action.payload,
                summary: {...state.summary, personal_info: state.plan}
            }
        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step + 1,
            }
        case 'BACK_STEP':
            return {
                ...state,
                step: state.step - 1,
            }
        case 'CONFIRM':
            return {
                ...state,
                summary: action.payload
            }
        default:
            return state
    }
}

export default multiStepFormReducer