import React from 'react'
import './Todo.css'
import {  List, ListItemText, ListItem, ListItemAvatar } from '@material-ui/core'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



function Todo(props) {

    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary="Todo" secondary={props.todo.todo}/>
            </ListItem>
            <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>Delete</DeleteForeverIcon>
           
        </List>
    )
}

export default Todo
