import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../Features/todoSlice';
import './TodoList.css'

const TodoList = () => {

  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch();

  const [editid, seteditid] = useState(null);
  const [editText, seteditText] = useState("");

  const handleupdate = (id, text) => {
    seteditid(id);
    seteditText(text);
  }

  const handlesave = () => {
    dispatch(updateTodo({ id:editid,text:editText }));
    seteditid(null);
    seteditText("");
  }

  return (
       <>
      <ul>
        {todos.map((item) => (
          <li>
            {editid===item.id  ? (
              <>
                <input type="text" value={editText} onChange={(e) => seteditText(e.target.value)} />
                <button onClick={handlesave} >Save</button>     
                <button onClick={() => seteditid(null)} >Cancel</button>
              </>
            ) : (

              <>
                <h1>{item.text}</h1>
                  <button onClick={() => handleupdate(item.id,item.text)}>Update</button>
                  <button onClick={() => dispatch(removeTodo(item.id))}>X</button>
                  </>
                  )}
              </li>
            ))}
          </ul>
       </>
      )
}

      export default TodoList