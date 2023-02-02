import * as Styled from './style';
import { HiOutlineTrash } from 'react-icons/hi';
import { BsCheck } from 'react-icons/bs';
import { useState, ChangeEvent } from 'react'


interface ListTasks{
  id: string;
  title: string;
  isCompleted: boolean;
  handleTaskDone: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};



export function ListTasks({ id, title, isCompleted, handleTaskDone, handleDeleteTask }:ListTasks) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked)
    handleTaskDone(id);
  };


  return (
    <Styled.ListTaks>
      <div>
        <label className="container">
          <input type="checkbox" checked={isChecked}  onChange={handleChange}/>
          <span className="checkmark" ></span>
        </label>
        <span 
        className='span' 
        style={{textDecoration: isChecked ? 'line-through': 'none', 
        color: isChecked ? '#808080' : '#F2F2F2' 
        }}
        >
          {title} 
        </span>
        <button onClick={() => handleDeleteTask(id)}><HiOutlineTrash size={24}/></button>
      </div>
    </Styled.ListTaks>
  );
};
