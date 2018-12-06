import * as React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './containers/home'
import BiggerDialog from './containers/biggerDialog'
import SmallerDialog from './containers/smallerDialog'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CssBaseline />
        <Home />

        {/* Dialog */}
        <BiggerDialog />
        <SmallerDialog />
      </div>
    )
  }
}

export default App
