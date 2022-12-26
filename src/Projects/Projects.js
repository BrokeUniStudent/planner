import './Projects.css';
import { useState, useEffect } from 'react';
import Project from './Project';
import { IconButton, Stack, Typography } from '@mui/material';
import { Box, Button } from '@mui/material';
import CreateProject from '../Windows/CreateProject.js';
import { getDeadlines, getProjectNames } from '../Data/functions';

function Projects() {

    const listTodos = getDeadlines();
    const [todos, setTodos] = useState(listTodos);

    // console.log(todos[0]);


    // var listProjectNames = [];
    // var dictProjects = {};
    // var dictProjectKey = {}

    // get a list of all projects
    var listProjectNames = getProjectNames();
    // console.log(listProjectNames);

    var dictProjects = {}
    listProjectNames.forEach((project) => {
        dictProjects[project] = []
    })
    // console.log(dictProjects);
    todos.forEach((todo) => {
        dictProjects[todo.project].push(todo);
    })
    // console.log(dictProjects);

    var dictProjectKey = {}
    for (let i = 0; i < listProjectNames.length; i++) {
        dictProjectKey[listProjectNames[i]] = i;
    }

    var updatedTodos = todos;

    const updateTodo = (id, param) => {

        // console.log(updatedTodos[id])
        // console.log(id);
        // console.log(updatedTodos===todos)
        // console.log(updatedTodos==todos)
        // check the parameter that need to be updated
        switch (param) {

            case "completed":
                // let updatedTodos = [...todos];
                updatedTodos[id].completed = !listTodos[id].completed;
                // console.log(updatedTodos[id]) 
                break;
            case "delete":
                // let updatedTodos = [...todos];
                updatedTodos = updatedTodos.filter(todo => (todo.id != id))
                console.log("deleted");
                break;

        }
        setTodos([...updatedTodos]);
        // TODO write into the data file

        // console.log("clicked")
        // console.log(todos);
    }

    const updateProject = (name, param, payload) => {
        switch (param) {
            case "add":
                break;
            case "rename":
                if (listProjectNames.includes(payload)) {
                    alert("Two projects cannot have the same name");
                    return
                }
                updatedTodos.forEach(todo => {
                    if (todo.project == name) {
                        todo.project = payload
                    }
                }
                )
                // console.log(updatedTodos)
                break;
            case "delete":
                updatedTodos = updatedTodos.filter(todo => todo.project != name)
                break;
        }
        // console.log(updatedTodos);
        setTodos([...updatedTodos]);
        // console.log(todos)
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ width: '100%', borderBottom: '1px solid', mb: 5 }}>
                <Button
                    color='inherit'
                    sx={{ borderRight: '1px solid', borderRadius: 0 }}
                    onClick={handleClickOpen}>+</Button>
            </Box>
            <Box 
                minHeight={screen.availHeight - 100}// eslint-disable-line
                sx={{ width: '100%', overflow: 'auto'}}
            >
                <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2} 
                    // sx={{ width: 350 * listProjectNames.length }}
                >
                    {listProjectNames.map(project => {
                        {/* console.log(project + dictProjects[project]) */ }
                        return (<Project
                            key={dictProjectKey[project]}
                            listTodos={dictProjects[project]}
                            updateTodo={updateTodo}
                            updateProject={updateProject}
                        />)
                    }
                    )}
                </Stack>
            </Box>


            <CreateProject open={open} handleClose={handleClose} />
        </>
    );
}

export default Projects;