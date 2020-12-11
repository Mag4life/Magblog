export const appState = {
    isLoading: true,
    isAuthenticated: false
}


export default (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...appState,
                isAuthenticated: action.isAuthenticated
            }
        case "SET_AUTH":
            return {
                ...appState,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}