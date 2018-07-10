import { alertActions } from './actions';

export const alertState = {
    alerts: []
}

const allowedErrorLevels = [
    'success',
    'error',
    'warning'
]

const generateId = (context) => {
    return context + new Date().getTime();
}

const triggerAlert = (state, payload) => {
    let newState = JSON.parse(JSON.stringify(state));

    let context = payload.context || 'global';

    let errorlevel = allowedErrorLevels.includes(payload.errorlevel) ? payload.errorlevel : 'info';
    
    let timeout = Number.isInteger(payload.timeout) ? payload.timeout : 2000;

    newState.alerts.push({
        id: generateId(context),
        errorlevel,
        context,
        message: payload.message,
        timeout,
        closeable: payload.closeable || false
    })

    return newState;
}

const deleteAlert = (state, { id }) => {
    let newState = JSON.parse(JSON.stringify(state));
    
    let alertIndex = newState.alerts.findIndex( alert => {
        return alert.id === id;
    })
    
    newState.alerts.splice(alertIndex, 1);
    
    return newState;

}


export function alertReducer (state = alertState, {type, payload}) {
    switch(type) {
        case alertActions.TRIGGER_ALERT: return triggerAlert(state, payload);
        case alertActions.DELETE_ALERT: return deleteAlert(state, payload);
        default: return state;
    }
}