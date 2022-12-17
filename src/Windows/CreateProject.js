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
import { addProject } from '../Data/functions';



export default function CreateProject(props) {

    const titleRef = useRef('');
    const [color, setColor] = useState('#194d33');

    const handleSubmit = (e) => {
        if (addProject(titleRef.current.value, color)){
            props.handleClose();
        };
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} maxWidth='xs'>
            <DialogTitle>New Project</DialogTitle>
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
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <DialogContentText>
                            Theme Color
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={3}>
                        <SketchPicker color={color} onChangeComplete={(color, e) => {setColor(color)}} />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}