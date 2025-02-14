import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';
import CompleteTask from './CompleteTask';

function TaskList({ tasks }) {
  const colors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400"];
  console.log(tasks);
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto w-full py-5 mt-10 flex justify-start gap-5 items-center flex-nowrap'>
      {tasks.map((task, index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <>
            {task.active ? <AcceptTask key={index} task={task} color={randomColor} /> : null}
            {task.completed? <CompleteTask key={index} task={task} color={randomColor} /> : null}
            {task.failed ? <FailedTask key={index} task={task} color={randomColor} /> : null}
            {task.newTask ? <NewTask key={index} task={task} color={randomColor} /> : null}
          </>
        );
      })}
    </div>
  );
}

export default TaskList;
