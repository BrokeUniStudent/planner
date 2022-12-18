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
import { addDeadline, addProject, getProjectNames } from '../Data/functions';
import { useRef } from 'react';

export function CreateDeadline(props) {

    const titleRef = useRef();
    const projectRef = useRef();
    const timeRef = useRef();
    const descriptionRef = useRef();
    const timezoneRef = useRef();

    // reuse with task in props for default values

    const setRegion = (region) => {

    }

    const handleSubmit = () => {
        let result;
        if (!props.task) {
            result = addDeadline(titleRef.current.value, projectRef.current.value, timeRef.current.value, timezoneRef.current.value, descriptionRef.current.value);
        }
        result ?? props.handleClose();
    }

    const listProjects = getProjectNames();

    return (
        <Dialog open={props.open} onClose={props.handleClose} fullWidth>
            <DialogTitle>{props.task ? 'Edit': 'Create'} a deadline</DialogTitle>
            <DialogContent>

                <Grid container columns={6}>
                    <Grid item xs={0.5}>
                        <DialogContentText>
                            Title
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField
                            fullWidth
                            variant="standard"
                            inputRef={titleRef}
                            defaultValue={props.task.task}
                        />
                    </Grid>

                    <Grid item xs={0.5}></Grid>

                    <Grid item xs={1}>
                        <DialogContentText>
                            From Project
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={2}>
                        <Select 
                            inputRef={projectRef} 
                            defaultValue={props.task.project} 
                            fullWidth
                        >
                            {listProjects.map(projectName => 
                                <MenuItem value={projectName} key={projectName}>{projectName}</MenuItem>)}
                        </Select>
                    </Grid>
                </Grid>



                <DialogContentText variant='h6'>
                    Attend Time:
                </DialogContentText>

                <DialogContentText>
                    Event Time
                </DialogContentText>
                <TextField
                    type="datetime-local"
                    defaultValue={props.task.deadline}
                    inputRef={timeRef}
                    size='small'
                />

                <DialogContentText>
                    Time Zone
                </DialogContentText>
                <TimeZonePicker setRegion={setRegion} defaultValue={props.task.timezone} />

                <DialogContentText>
                    Description
                </DialogContentText>
                <TextField multiline={true} fullWidth inputRef={descriptionRef} defaultValue={props.task.description} />

            </DialogContent>
        
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>{props.task ? 'Edit': 'Create'}</Button>
            </DialogActions>
        </Dialog>
    );
}
