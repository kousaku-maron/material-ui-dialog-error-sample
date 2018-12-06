import { Action } from 'typescript-fsa'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { BiggerActions } from '../modules/bigger'
import BiggerDialogComponent from '../components/biggerDialog'

export interface BiggerDialogActions {
  handleClose: () => Action<boolean>
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleClose: () => dispatch(BiggerActions.biggerOpen(false)),
  }
}

const mapStateToProps = (appState: AppState) => {
  return Object.assign({}, appState)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BiggerDialogComponent)
