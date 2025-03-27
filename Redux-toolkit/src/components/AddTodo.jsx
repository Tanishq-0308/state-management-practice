import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';

function AddTodo({value}) {
    const [input, setInput]= useState('');
    const dispatch = useDispatch();
    const [edit,setEdit]= useState(false);

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    const updateTodoHandler = (e) => {
        e.preventDefault();
        dispatch(updateTodo({id: value.id, text: input }));
        setEdit(false);
        setInput('');
    };

    useEffect(()=>{
        if(value.text.length >0){
            setEdit(true)
        }
        setInput(value.text);
    },[value])
  return (
    <div>
            <form onSubmit={edit ? updateTodoHandler : addTodoHandler} className="space-x-3 mt-12">
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    {edit ? 'Edit Todo' : 'Add Todo'}
                </button>
            </form>
    </div>
  )
}

export default AddTodo
