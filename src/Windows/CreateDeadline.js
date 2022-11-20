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
import Grid from '@mui/material/Grid';
import { timezones } from '../Data/timezones.js';
import TimeZonePicker from '../Micellenous/TimeZonePicker.js';
import InputLabel from '@mui/material/InputLabel';


export function CreateDeadline(props) {

    // reuse with task in props for default values

    const setRegion = (region) => {

    }

    const listProjects = Object.keys(projects);

    return (
        <Dialog open={props.open} onClose={props.handleClose} fullWidth>
            <DialogTitle>Create a deadline</DialogTitle>
            <DialogContent>

                <Grid container columns={6}>
                    <Grid item xs={0.5}>
                        <DialogContentText>
                            Title
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            // margin="dense"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>

                    <Grid item xs={0.5}></Grid>

                    <Grid item xs={1}>
                        <DialogContentText>
                            From Project
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={2}>
                        <Select defaultValue={listProjects[0]} fullWidth>
                            {listProjects.map(projectName => <MenuItem>{projectName}</MenuItem>)}
                        </Select>
                    </Grid>
                </Grid>



                <DialogContentText>
                    <Typography variant='h6'>Attend Time: </Typography>
                </DialogContentText>

                <DialogContentText>
                    Event Time
                </DialogContentText>
                <TextField
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    size='small'
                />

                <DialogContentText>
                    Time Zone
                </DialogContentText>
                <TimeZonePicker setRegion={setRegion} />

                <DialogContentText>
                    Description
                </DialogContentText>
                <TextField multiline={true} fullWidth />

            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={props.handleClose}>Create</Button>
            </DialogActions>
        </Dialog>
    );
}
