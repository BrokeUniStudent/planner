import './Project.css';
import ProjectToDo from './ProjectToDo';
import { useState } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import { Typography, Collapse, Button, Grid, Box, IconButton } from '@mui/material';
import { Paper } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { getProject, getProjectColor, getProjects } from '../Data/functions';
import Draggable from 'react-draggable';
import ProjectMenu from './ProjectMenu';

function Project(props) {
    const listTodos = props.listTodos;
    const project = listTodos[0].project;
    // const projectColor = getProjectColor(project);
    const hsl = getProjectColor(project);
    const titleColor = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    const contentColor = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l + 30}%)`;

    const [open, setOpen] = React.useState(true);
    const nodeRef = React.useRef(null);
    const [anchorPoint, setAnchorPoint] = useState(null);

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
                    sx={{ bgcolor: titleColor, height: 'fit-content', p: 1.5, minWidth: 250 }}
                    onDoubleClick={handleClickMenu}
                    ref={nodeRef}
                >
                    <IconButton
                        onClick={handleClickExpand}
                        size='large'
                        fontSize='large'
                        color='inherit'
                        sx={{ width: 50, position: 'absolute', left: 2, zIndex: 1 }}
                        disableRipple
                    >
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                    <Typography variant='h4' align='center' >
                        {project}
                    </Typography>
                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <List sx={{ bgcolor: contentColor }}>
                            {listTodos.map(todo =>
                                <ProjectToDo
                                    key={todo.id}
                                    {...todo}
                                    updateTodo={props.updateTodo}
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