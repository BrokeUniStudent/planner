import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { CreateDeadline } from '../Windows/CreateDeadline';
import CreateProject from '../Windows/CreateProject';
import { deleteProject } from '../Data/functions';

export default function ProjectMenu(props) {

    const [openDeadline, setOpenDeadline] = React.useState(false);
    const [openProject, setOpenProject] = React.useState(false);


    const handleAddDeadline = () => {
        setOpenDeadline(true);
        props.handleClose();
    }

    const handleDeleteProject = () => {
        deleteProject(props.project);
        props.handleClose();
    }

    const handleOpenProject = () => {
        setOpenProject(true);
        props.handleClose();
    }


    return (
        <>
            <Menu
                open={props.anchorPoint !== null}
                onClose={props.handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    props.anchorPoint !== null
                        ? { top: props.anchorPoint.y, left: props.anchorPoint.x }
                        : undefined
                }
            >

                <MenuList>
                    <MenuItem onClick={handleDeleteProject}>
                        <ListItemIcon>
                            <DeleteForeverIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Delete project</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleAddDeadline}>
                        <ListItemIcon>
                            <AddTaskIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Add new task</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleOpenProject}>
                        <ListItemIcon>
                            <DriveFileRenameOutlineIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Edit Project</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu>
            <CreateDeadline
                open={openDeadline}
                handleClose={() => {
                    setOpenDeadline(false);
                }}
                task={{ project: props.project }} />
            <CreateProject
                open={openProject}
                handleClose={() => {
                    setOpenProject(false);
                }}
                project={props.project}
             />
        </>

    )
}