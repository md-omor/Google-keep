import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id)
    }

    return (
        <div className="peranNote">
            <div className="note">
                <div className="notePerItem">
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <div className="editIcon">
                        <Button >
                            <EditIcon />
                        </Button>
                    </div>
                    <div className="deleteIcon">
                        <Button onClick = {deleteNote}>
                            <DeleteOutlineIcon />
                        </Button>
                    </div>
                    <div className="done">
                        <Button> Done</Button>
                    </div>
                    
                </div>   
            </div>
        </div>
    )
}

export default Note
// \