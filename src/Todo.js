import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";

function Todo({ text, timestamp }) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary={text}
          secondary={new Date(timestamp?.toDate()).toUTCString()}
        />
      </ListItem>
    </List>
  );
}

export default Todo;
