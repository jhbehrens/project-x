import reducers from './reducers';
import { createStore } from 'redux';

export default function configureStore() {
    const store = createStore(reducers);
    return store;
}