import { useState } from "react";
import { updateCompleted } from "../Data/functions.js";
import Checkbox from "@mui/material/Checkbox";

export default function CompletionCheckbox(props) {
    const [completed, setCompleted] = useState(props.task.completed);

    const handleChange = (event) => {
        setCompleted(event.target.checked);
        updateCompleted(props.task.id);
    };

    return <Checkbox checked={completed} onChange={handleChange} />;
}