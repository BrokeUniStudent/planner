import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { SketchPicker } from '@hello-pangea/color-picker';



export default function CreateProject(props) {
    if (props.task) {
        
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
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <DialogContentText>
                            Theme Color
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={3}>
                        <SketchPicker />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={props.handleClose}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}