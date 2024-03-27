import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from "react";
import { Edit, Save } from "@mui/icons-material";


type PropsType = {
    todo: TodoItemType;
    deleteHandler: (id: TodoItemType["id"]) => void;
    completeHandler: (id: TodoItemType["id"]) => void;
    editHandler: (id: TodoItemType["id"], text: TodoItemType["title"]) => void;
};

const TodoItem: React.FC<PropsType> = ({ todo, deleteHandler, completeHandler, editHandler }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [textVal, setTextVal] = useState<TodoItemType["title"]>(todo.title);
    const handleSave = (): void => {
        if (textVal !== "") {
            editHandler(todo.id, textVal); // Call the editHandler prop here
            setEdit(false);
        }
    };
    const date :Date = new Date();
    const x = date.toLocaleDateString();
    
    return (
        <Paper sx={{ padding: "1rem" }}>
            <Stack direction="row"
                alignItems="center"

            >
                <Checkbox onClick={() => completeHandler(todo.id)} checked={todo.isCompleted} />
                {
                    edit ? <TextField label={"Edit Text"} value={textVal}
                        variant="standard" color="success"
                        sx={{ marginRight: "auto" }}
                        onChange={e => setTextVal(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && textVal !== "") {
                                editHandler(todo.id, textVal);
                                setEdit(false)
                            }
                        }}
                    />
                        : <>
                            <Typography marginRight={"auto"}>{todo.title}</Typography>
                            <Typography marginLeft={"auto"} color={"text.secondary"} variant="caption">{x}</Typography>
                            
                        </>

                }



                {edit ?
                    <Button color="secondary" onClick={handleSave} >
                        <Save />
                    </Button>
                    :
                    <Button color="secondary" onClick={() => setEdit(true)} >
                        <Edit />
                    </Button>
                }

                <Button color="secondary" onClick={() => deleteHandler(todo.id)}><DeleteIcon /></Button>
            </Stack>
        </Paper>
    );
};

export default TodoItem;
