import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

const actionCreator = actionCreatorFactory()

export const BiggerActions = {
  biggerOpen: actionCreator<boolean>('BIGGER_OPEN'),
}

export interface BiggerState {
  open: boolean
}

const initialState: BiggerState = {
  open: false,
}

export const BiggerReducer = reducerWithInitialState(initialState).case(
  BiggerActions.biggerOpen,
  (state, open) => {
    return Object.assign({}, state, { open })
  }
)
