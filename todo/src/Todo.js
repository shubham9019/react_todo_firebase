import React from 'react'
import './Todo.css'
import { List, ListItemText, ListItem, ListItemAvatar } from '@material-ui/core'

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary="Todo" secondary={props.text}/>
            </ListItem>
           
        </List>
    )
}

export default Todo
