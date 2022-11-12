import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { projects } from '../Data/projects';
import Typography from '@mui/material/Typography';


export function CreateDeadline(props) {

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} fullWidth>
                <DialogTitle>Create a deadline</DialogTitle>
                <DialogContent>

                    <DialogContentText>
                        Title
                    </DialogContentText>
                    <TextField
                        // autoFocus
                        margin="dense"
                        id="name"
                        variant="standard"
                    />

                    <DialogContentText>
                        From Project
                    </DialogContentText>
                    <Select>
                        {Object.keys(projects).map(projectName => <MenuItem>{projectName}</MenuItem>)}
                    </Select>

                    <DialogContentText>
                        <Typography variant='h6'>Attend Time: </Typography>
                    </DialogContentText>
                    <DialogContentText>
                        Event Time
                    </DialogContentText>
                    <TextField
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        sx={{ width: 250 }}
                    />
                </DialogContent>
                    <DialogActions>
                        <Button onClick={props.handleClose}>Cancel</Button>
                        <Button onClick={props.handleClose}>Subscribe</Button>
                    </DialogActions>
            </Dialog>
        </div>
    );
}
