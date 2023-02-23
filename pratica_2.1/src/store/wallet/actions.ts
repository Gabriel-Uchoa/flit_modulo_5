export const incrementWalletValue = (value: number) => {
    return {
        type: 'INCREMENT_WALLET_VALUE',
        payload: value
    }
}

export const decrementWalletValue = (value: number) => {
    return {
        type: 'DECREMENT_WALLET_VALUE',
        payload: value
    }
}