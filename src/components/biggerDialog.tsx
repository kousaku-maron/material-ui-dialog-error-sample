import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'

import { AppState } from '../store'
import { BiggerDialogActions } from '../containers/biggerDialog'

interface OwnProps {}

type Props = OwnProps & AppState & BiggerDialogActions & WithStyles<typeof styles>

const styles = (theme: Theme) => {
  return createStyles({
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
  })
}

const Transition = (props : Props) => {
  return <Slide direction="up" {...props} />
}

const BiggerDialogComponent: React.SFC<Props> = (props: Props) => {
  const { classes } = props

  return (
    <div>
      <Dialog open={props.bigger.open} onClose={props.handleClose} TransitionComponent={Transition} fullScreen={true}>
        <AppBar className={classes.appBar} color="default">
          <Toolbar>
            <IconButton color="inherit" aria-label="Close" onClick={props.handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              Bigger Dialog
            </Typography>
          </Toolbar>
        </AppBar>
      </Dialog>
  </div>
  )
}

export default withStyles(styles)(BiggerDialogComponent)
