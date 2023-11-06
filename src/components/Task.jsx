import React,{useContext} from 'react'
import { TaskListContext } from '../Context/TaskListContext'
const Task = ({task}) => {
  const { removeTask, findItem } = useContext(TaskListContext);

  const handleRemoveTask = () => {
    console.log("Removing task with id:", task.id);
    removeTask(task.id);
  };
  

  return (

      <li className="list-item">
        <span>{task.title}</span>
        <div>
        <button
  onClick={handleRemoveTask}
  style={{
    backgroundColor: '#790e43',
    color: 'white',
    borderRadius: '20px',
    border:'none',
    padding: '5px 10px',
    cursor: 'pointer',
  }}
>
  Delete
</button>

          <button
            onClick={() => findItem(task.id)}
            style={{
              backgroundColor: '#790e43',
              color: 'white',
              borderRadius: '20px',
              border:'none',
              padding: '5px 10px',
              cursor: 'pointer',
              marginLeft:'10px',
            }}
          >
            Edit
          </button>
        </div>
      </li>
    );
    
  
}

export default Task

