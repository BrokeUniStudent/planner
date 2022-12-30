import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import TimeZonePicker from '../Micellenous/TimeZonePicker.js';
import { addDeadline, getProjectNames, updateDeadline } from '../Data/functions';
import { useRef, useState, useEffect } from 'react';

export function CreateDeadline(props) {

    const [checked, setChecked] = useState(props.task.deadline ? true : false);


    const titleRef = useRef();
    const projectRef = useRef();
    const timeRef = useRef();
    const descriptionRef = useRef();
    let region = props.task.timezone;

    const handleSubmit = () => {
        const formValues =
            [
                titleRef.current.value,
                projectRef.current.value,
                checked ? timeRef.current.value : null,
                checked ? region : null,
                descriptionRef.current.value
            ]

        let result;
        if (!props.task.task) {
            result = addDeadline(...formValues);
        } else {
            result = updateDeadline(props.task.id, ...formValues)
        }
        if (result) {props.handleClose()};
    }

    const listProjects = getProjectNames();

    const timeForm =
        <>
            <DialogContentText variant='h6' sx={{ mt: 2 }}>
                Attend Time:
            </DialogContentText>

            <DialogContentText>
                Event Time
            </DialogContentText>
            <TextField
                type="datetime-local"
                defaultValue={checked ? props.task.deadline : null}
                inputRef={timeRef}
                size='small'
            />

            <DialogContentText>
                Time Zone
            </DialogContentText>
            <TimeZonePicker 
                setRegion={value => {region = value}} 
                defaultValue={checked ? props.task.timezone : null} 
            />

        </>


    return (
        <Dialog open={props.open} onClose={props.handleClose} fullWidth>
            <DialogTitle>{props.task.task ? 'Edit' : 'Create'} a task</DialogTitle>
            <DialogContent>

                <Grid container columns={6} direction={{ xs: 'column', sm: 'row' }} spacing={1}>

                    <Grid item xs={1}>
                        <DialogContentText>Title</DialogContentText>
                    </Grid>

                    <Grid item xs={5}>
                        <TextField
                            fullWidth
                            variant="standard"
                            inputRef={titleRef}
                            defaultValue={props.task.task}
                        />
                    </Grid>

                    <Grid item xs={1}>
                        <DialogContentText>
                            Project
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={2}>
                        <Select
                            inputRef={projectRef}
                            defaultValue={props.task.project}
                            fullWidth
                            size='small'
                        >
                            {listProjects.map(projectName =>
                                <MenuItem value={projectName} key={projectName}>{projectName}</MenuItem>)}
                        </Select>
                    </Grid>

                    <Grid item xs={1}>
                        <DialogContentText align='center'>
                            Type
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={2}>
                        <Box minWidth={100} align='center'>
                            Note
                            <Switch
                                checked={checked}
                                onChange={() => { setChecked(prevChecked => !prevChecked) }}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            Deadline
                        </Box>
                    </Grid>

                </Grid>

                <DialogContentText>
                    Description
                </DialogContentText>
                <TextField
                    multiline={true}
                    fullWidth
                    inputRef={descriptionRef}
                    defaultValue={props.task.description}
                />

                {checked ? timeForm : null}

            </DialogContent>

            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>{props.task.task ? 'Edit' : 'Create'}</Button>
            </DialogActions>
        </Dialog>
    );
}
