import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { SketchPicker } from '@hello-pangea/color-picker';
import { useRef, useState } from 'react';
import { addProject, updateProject, getProjectColor, getProjectColorFull } from '../Data/functions';



export default function CreateProject(props) {

    console.log(props.project)

    const defaultColor = props.project ? getProjectColor(props.project) : 
    {
        hex: '#ffffff',
        rgb: { r: 225, g: 225, b: 225, a: 1, },
        hsl: { h: 0, s: 0, l: 100, a: 1 },
    }

    const titleRef = useRef('');
    const [color, setColor] = useState(defaultColor);

    const handleSubmit = (e) => {
        let result;
        if (props.project) {
            result = updateProject(props.project, titleRef.current.value, color)
        } else {
            result = addProject(titleRef.current.value, color);
        }
        if (result) {
            props.handleClose();
        };
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} maxWidth='xs'>
            <DialogTitle>{props.project ? 'Edit' : 'New'} Project</DialogTitle>
            <DialogContent>
                <Grid container columns={4} rowSpacing={1}>

                    <Grid item xs={1}>
                        <DialogContentText>
                            Title
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth
                            variant="standard"
                            inputRef={titleRef}
                            defaultValue={props.project}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <DialogContentText>
                            Theme Color
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={3}>
                        <SketchPicker
                            color={color}
                            onChangeComplete={(color, e) => { setColor(color) }}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>{props.project ? 'Edit' : 'Create'}</Button>
            </DialogActions>
        </Dialog>
    )
}