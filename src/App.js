import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import OmorGit from './OmorGit'
import Note from './Note'
import {useState} from 'react'


const App = () => {
  const [addItemArray, setaddItemArray] = useState([])

  const addNoteList = (note) => {
    setaddItemArray([...addItemArray,note])
  }

  const onDelete = (id) => {
    setaddItemArray(addItemArray.filter((_, i)=> i !== id))
  }

  return (
    <>
      <Header />
      <OmorGit />
      <CreateNote passNote={addNoteList}  />

      {addItemArray?.map((val,index) => {
        return <Note 
          key = {index}
          id = {index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />  
      })}

      <Footer />
    </>
  )
}

export default App
