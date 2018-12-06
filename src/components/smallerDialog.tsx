import * as React from 'react'
import { WithStyles, withStyles, createStyles } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'


import { SmallerDialogActions } from '../containers/smallerDialog'
import { AppState } from '../store'

interface OwnProps {}

const styles = (theme: Theme) => {
  return createStyles({
    modal: {
      zIndex: 2000,
    },
  })
}

type Props = OwnProps & AppState & WithStyles<typeof styles> & SmallerDialogActions

const emails: string[] = ['test@gmail.com', 'helloworld@gmail.com']

const SmallerDialogComponent: React.SFC<Props> = (props: Props) => {
  const { classes } = props

  return (
    <Dialog className={classes.modal} open={props.smaller.open} onClose={props.handleClose} aria-labelledby="login-modal">
      <DialogTitle id="login-modal">login account</DialogTitle>
      <List>
        {emails.map(email => (
          <ListItem
            button={true} 
            onClick={props.handleClose}
            key={email}
          >
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
        <ListItem button={true}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem>
      </List>
    </Dialog>
  )
}

export default withStyles(styles)(SmallerDialogComponent)
