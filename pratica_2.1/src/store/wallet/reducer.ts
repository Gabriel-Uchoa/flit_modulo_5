const WALLET_INITIAL_STATE = {
    walletValue: 0
}

const walletReducer = (state = WALLET_INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'INCREMENT_WALLET_VALUE':
            return {
                walletValue: state.walletValue + action.payload
            }

        case 'DECREMENT_WALLET_VALUE':
            return {
                walletValue: state.walletValue - action.payload
            }

        default:
            return state
    }
}

export default walletReducer