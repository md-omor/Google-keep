import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import react, {useState} from 'react'

const CreateNote = (props) => {

    const [note, setnote] = useState({
        title:"",
        content:"",
        id:''
    })

    const inputEvent = (event) => {

        // const value = event.target.value
        // const value = event.target.name

        const {name, value} = event.target

        setnote((prevData) => {
            return{
                ...prevData,[name]: value,
            }
        })
    }

    const addInput =() => {
        props.passNote(note)
        setnote({
            title:"",
            content:"",
            id:""
        })
        // alert("Hello world")
    }

    return (
        <div className="main_note">
            <form className="create-note">
                <input
                 type="text" 
                 name="title"
                 placeholder="Take a note..."
                 value={note.title} 
                 onChange={inputEvent} 
                 autoComplete="off"

                 />
                <textarea 
                cols="30"
                rows="10"
                name="content"
                placeholder="Take a note..."
                value={note.content}
                onChange={inputEvent}>

                </textarea>
                <div className="btn">
                    <Button onClick={addInput}>
                        <AddIcon className="create_btn"/>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CreateNote
