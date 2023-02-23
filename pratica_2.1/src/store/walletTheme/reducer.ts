const DARK_MODE_STATE = {
    isDarkTheme: false
}

const themeReducer = (state = DARK_MODE_STATE, action: any) => {
    switch (action.type) {
        case 'SET_THEME':
            return {
                isDark: action.payload
            }

        default:
            return state
    }
}
export default themeReducer