import './Project.css';
import ProjectToDo from './ProjectToDo';
import { useState, useRef } from 'react';
import { Typography, Collapse, Grid, IconButton, Paper, List } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { getProject, getProjectColor, getProjects, getProjectColorFull } from '../Data/functions';
import Draggable from 'react-draggable';
import ProjectMenu from './ProjectMenu';
import EditIcon from '@mui/icons-material/Edit';

function Project(props) {
    

    const [open, setOpen] = useState(true);
    const nodeRef = useRef(null);
    const [anchorPoint, setAnchorPoint] = useState(null);

    const listTodos = props.listTodos;
    const project = props.projectName;
    if (!localStorage[project]) {
        return null;
    }
    // console.log(project)
    const hsl = getProjectColor(project);
    const contentColor = `hsl(${hsl.h}, ${hsl.s * 100}%, ${(hsl.l + 0.2) * 100}%)`;
    // const contentColor = hsl(hsl.h, hsl.s, (hsl.l + 0.3));
    const titleColor = getProjectColorFull(project).hex;

    const handleClickExpand = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClickMenu = (event) => {
        event.preventDefault();
        setAnchorPoint(
            anchorPoint === null
                ? {
                    x: event.clientX,
                    y: event.clientY,
                }
                : null,
        );
    }

    const handleCloseMenu = () => {
        setAnchorPoint(null);
    };

    return (
        <>
            <Draggable nodeRef={nodeRef}>
                <Paper
                    sx={{ bgcolor: titleColor, height: 'fit-content', p: 1.5, minWidth: 250, width: 'fit-content' }}
                    onDoubleClick={handleClickMenu}
                    ref={nodeRef}
                >
                    <Grid container flexDirection='row'>
                        <Grid item xs='auto'>
                            <IconButton
                                onClick={handleClickExpand}
                                size='large'
                                fontSize='large'
                                color='inherit'
                                sx={{ width: 50 }}
                                disableRipple
                            >
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </Grid>

                        <Grid item xs>
                            <Typography variant='h4' align='center' >
                                {project}
                            </Typography>
                        </Grid>

                        <Grid item xs='auto'>
                            <IconButton
                                onClick={handleClickMenu}
                                size='large'
                                fontSize='large'
                                color='inherit'
                                sx={{ width: 50 }}
                            >
                                <EditIcon />
                            </IconButton>
                        </Grid>

                    </Grid>

                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <List sx={{ bgcolor: contentColor, borderRadius: 1 }}>
                            {listTodos.map(todo =>
                                <ProjectToDo
                                    key={todo.id}
                                    {...todo}
                                />)}
                        </List>
                    </Collapse>
                </Paper>
            </Draggable>
            <ProjectMenu handleClose={handleCloseMenu} anchorPoint={anchorPoint} project={project} />
        </>
    )
}

export default Project;