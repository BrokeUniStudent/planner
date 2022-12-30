import { useState, useEffect } from 'react';
import Project from './Project';
import { Box, Button, Stack } from '@mui/material';
import CreateProject from '../Windows/CreateProject.js';
import { getDeadlines, getProjectNames } from '../Data/functions';

function Projects() {

    let todos = getDeadlines();
    let projectNames = getProjectNames();

    // const [todos, setTodos] = useState(listTodos);
    // const [projectNames, setProjectNames] = useState(listProjectNames);

    // useEffect(() => {
    // setTodos(listTodos);
    // setProjectNames(getProjectNames);
    // }, [listTodos, listProjectNames])


    const dictProjects = {};
    projectNames.forEach((project) => {
        dictProjects[project] = [];
    })
    // console.log(dictProjects);
    todos.forEach((todo) => {
        // console.log(todo.project)
        dictProjects[todo.project].push(todo);
    })
    // console.log(dictProjects);

    var dictProjectKey = {}
    for (let i = 0; i < projectNames.length; i++) {
        dictProjectKey[projectNames[i]] = i;
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(() => {
    // setTodos(listTodos);
    // setProjectNames(getProjectNames);
    // }, [listTodos, listProjectNames])

    return (
        <>
            <Box sx={{ borderBottom: '1px solid', mb: 5 }}>
                <Button
                    color='inherit'
                    sx={{ borderRight: '1px solid', borderRadius: 0 }}
                    onClick={handleClickOpen}>+</Button>
            </Box>
            <Box
                height={screen.availHeight - 100}// eslint-disable-line
                sx={{ overflow: 'auto' }}
            >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ width: 350 * projectNames.length }}
                >
                    {projectNames.map(project =>
                        <Project
                            key={dictProjectKey[project]}
                            listTodos={dictProjects[project]}
                            projectName={project}
                        />
                    )}
                </Stack>
            </Box>


            <CreateProject open={open} handleClose={handleClose} />
        </>
    );
}

export default Projects;