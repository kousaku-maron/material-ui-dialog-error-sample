import { Action } from 'typescript-fsa'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { AppState } from '../store'
import { BiggerActions } from 'src/modules/bigger'
import HomeComponent from '../components/home'

export interface HomeActions {
  handleFundTransactionOpen: () => Action<boolean>
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleFundTransactionOpen: () => dispatch(BiggerActions.biggerOpen(true)),
  }
}

const mapStateToProps = (appState: AppState) => {
  return Object.assign({}, appState)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)
