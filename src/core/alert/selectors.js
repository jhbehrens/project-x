export const getAlertsForContext = (state, context) => {
    return state.alert.alerts.filter((alert) => {
        return alert.context === context;
    })
}