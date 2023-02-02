import { FormEvent, ChangeEvent, useState} from 'react';
import * as Styled from './style';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { ItensTask } from '../ItensTask';
import {v4 as uuidv4} from 'uuid';


export interface TaskState{
  id: string;
  title: string;
  isCompleted: boolean;
} 

export function Tasks(){
    const [task, setTask] = useState<TaskState[]>([])
    const [title, setTitle] = useState('')
  
    function createTask(event: FormEvent<HTMLElement>){
      event.preventDefault()
      const newTask= {
        id: uuidv4(),
        title: title,
        isCompleted: false
      }
  
      setTask([...task, newTask])
      setTitle('')
    }
  
    function handleTitle(e: string){
      setTitle(e)
    }
  
    function handleDeleteTask(id: string){

    const filterTaks = task.filter(t => t.id !== id)
    setTask(filterTaks)

    }

    function handleTaskDone(id: string){
      const filterTaks = task.map(t => {
        return t.id === id ? {...t, isCompleted: !t.isCompleted} : {...t}
      })
      setTask(filterTaks)
    }
      

  return (
    <Styled.Wrapper>
    <Styled.Form onSubmit={createTask}>
      <input  type="text" placeholder='Adicione uma nova tarefa' onChange={(e) => handleTitle(e.target.value)} value={title} />
      <button type='submit'>Criar <AiOutlinePlusCircle size={16}/></button>
    </Styled.Form>

    <ItensTask task={task}  handleTaskDone={handleTaskDone} handleDeleteTask={handleDeleteTask}/>
    </Styled.Wrapper>
  );
}

