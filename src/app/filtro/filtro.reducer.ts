import { createReducer, on} from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

export const InitialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(InitialState,
    on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}