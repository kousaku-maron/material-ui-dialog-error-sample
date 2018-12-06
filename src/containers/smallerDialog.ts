import { Action } from 'typescript-fsa'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { SmallerActions } from '../modules/smaller'
import SmallerDialogComponent from '../components/smallerDialog'

export interface SmallerDialogActions {
  handleClose: () => Action<boolean>
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleClose: () => dispatch(SmallerActions.smallerOpen(false)),
  }
}

const mapStateToProps = (appState: AppState) => {
  return Object.assign({}, appState)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmallerDialogComponent)
