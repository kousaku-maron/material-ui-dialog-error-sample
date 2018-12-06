import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

const actionCreator = actionCreatorFactory()

export const SmallerActions = {
  smallerOpen: actionCreator<boolean>('SMALLER_OPEN'),
}

export interface SmallerState {
  open: boolean
}

const initialState: SmallerState = {
  open: false,
}

export const SmallerReducer = reducerWithInitialState(initialState).case(SmallerActions.smallerOpen, (state, open) =>
  Object.assign({}, state, { open })
)
