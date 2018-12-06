import * as React from 'react'
import { WithStyles, withStyles, createStyles, Button, Typography } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

import { AppState } from '../store'
import { HomeActions } from '../containers/home'

interface OwnProps {}

const styles = (theme: Theme) => {
  return createStyles({
    layout: {
      padding: theme.spacing.unit * 2,
    },
  })
}

type Props = OwnProps & AppState & WithStyles<typeof styles> & HomeActions

const HomeComponent: React.SFC<Props> = (props: Props) => {
  const { classes } = props
  
  return (
    <div className={classes.layout}>
      <Typography>1. click "OPEN BIGGER DIALOG"</Typography>
      <Typography>2. close smaller dialog (login modal)</Typography>
      <Typography>3. close bigger dialog</Typography>
      <Button onClick={props.handleFundTransactionOpen}>OPEN BIGGER DIALOG</Button>
    </div>
  )
}

export default withStyles(styles)(HomeComponent)
