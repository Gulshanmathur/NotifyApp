import {
  AppBar,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
  IconButton,
  InputAdornment,
  inputLabelClasses,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import { getTodos, saveTodos } from "./utils/features";
import cover from "./images/cover4.jpg"

const AppToDo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");




  const handleAddTodo = (): void => {
    setTodos([
      ...todos,
      { title: newTodoTitle.trim(), isCompleted: false, id: Date.now(), createdAt: new Date() },
    ])
    setNewTodoTitle("");

  }
  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodo: TodoItemType[] = todos.filter(item => id !== item.id);
    setTodos(newTodo);

  }
  const completeHandler = (id: TodoItemType["id"]): void => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos); // Update the state with the modified todos
  };
  const editHandler = (id: TodoItemType["id"], text: TodoItemType["title"]): void => {
    const newTodo: TodoItemType[] = todos.filter((item) => {
      if (item.id === id) item.title = text;
      return item;
    })
    setTodos(newTodo)

  }

  useEffect(() => {
    saveTodos(todos)
  }, [todos]);


  return (
    <Container
      maxWidth="sm"
      // background:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)
      sx={{
        height: "100vh", 
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "no-repeat", // Optional: Prevent repeating
        backgroundSize: "cover",
      }}
    >
      <AppBar position="static" >
        <Toolbar>
          <Typography>Notify Me</Typography>
        </Toolbar>
      </AppBar>
      <TextField
        margin="dense"
        fullWidth
        label={"Add New Task"}
        color="success"
        variant="standard"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && newTodoTitle !== "") handleAddTodo();
        }}
        InputLabelProps={{
          sx: {
            color: "",
            [`&.${inputLabelClasses.shrink}`]: {
              color: "success"
            }
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleAddTodo}
                disabled={newTodoTitle === ""}
              >
                <AddIcon sx={{ color: "primary" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Stack
        height={"80%"}
        direction={"column"}
        spacing={"1rem"}
        p={"1rem"}
      >
        {
          todos.map(item => (
            <TodoItem key={item.id} todo={item}
              deleteHandler={deleteHandler}
              completeHandler={completeHandler}
              editHandler={editHandler}
            />
          ))
        }
      </Stack>
    </Container>
  );
};

export default AppToDo;
