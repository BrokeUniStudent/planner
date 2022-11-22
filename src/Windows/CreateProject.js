import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { SketchPicker } from '@hello-pangea/color-picker';
import { useRef } from 'react';



export default function CreateProject(props) {
    if (props.task) {
        
    }

    const titleRef = useRef('');
    const colorRef = useRef('');

    const handleSubmit = (e) => {
        alert(titleRef.current, colorRef.current);
        props.handleClose();
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} maxWidth='xs'>
            <DialogTitle>New Project</DialogTitle>
            <DialogContent>
                <Grid container columns={4}>

                    <Grid item xs={1}>
                        <DialogContentText>
                            Title
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            // margin="dense"
                            fullWidth
                            variant="standard"
                            ref={titleRef}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <DialogContentText>
                            Theme Color
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={3}>
                        <SketchPicker ref={colorRef} />
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