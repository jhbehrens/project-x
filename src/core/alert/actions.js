export const alertActions = {
    TRIGGER_ALERT: 'TRIGGER_ALERT',
    DELETE_ALERT: 'DELETE_ALERT'
}

export const alertActionCreators = {
    triggerAlert: (payload) => ({
        type: alertActions.TRIGGER_ALERT,
        payload
    }),

    deleteAlert: (id) => ({
        type: alertActions.DELETE_ALERT,
        payload: {
            id
        }
    })
}