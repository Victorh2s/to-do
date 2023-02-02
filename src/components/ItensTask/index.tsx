import * as Styled from './style';
import clipboard from '../../assets/Clipboard.png';
import { ListTasks } from '../ListTasks';
import { useState } from 'react';
import { TaskState } from '../Tasks';

 interface TasksItensProps{
  task: TaskState[]
  handleTaskDone: (id: string) => void;
  handleDeleteTask: (id: string) => void;
};

export function ItensTask({task, handleTaskDone, handleDeleteTask}:TasksItensProps) {
  const taskDone = task.filter((task) => task.isCompleted === true);
  
  const existTaks = task.length === 0 ? false : true;
  return (
    <Styled.Wrapper>
      
      <header>

        <div>
          Tarefas criadas
          <span>{task.length}</span> 
        </div>

        <div>
          Concluídas 
          <span>{taskDone.length} de {task.length}</span> 
        </div>

      </header>

      {existTaks ? (
         <Styled.WithList>
          {
            task.map((item)=> (
              <div key={item.id}>
                <ListTasks  title={item.title} isCompleted={item.isCompleted} handleTaskDone={handleTaskDone} handleDeleteTask={handleDeleteTask} id={item.id} />
              </div>
            ))
          }

         </Styled.WithList>
      ): (
        <Styled.NoList >
          <img src={clipboard} alt="clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </Styled.NoList >
      )}

     
    </Styled.Wrapper>
  );
};
