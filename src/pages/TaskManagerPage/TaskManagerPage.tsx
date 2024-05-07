import { observer } from 'mobx-react-lite';
import { TaskState, ITask } from 'src/entities/Tasks/index';
import { TodoContainer } from 'src/widgets/TodoContainer/index';

import './style.css';

/** Страница управления задачами */
const TaskManagerPage = observer(() => {

  const taskState = TaskState.create();

  const addTask = (name: ITask['name']) => {
    taskState.taskList.addTask(name);
  };

  const removeTask = (id: ITask['id']) => {
    taskState.taskList.removeTask(id)
  }

  return (
    <div className='taskManager__content'>
      <TodoContainer
        tasks={taskState.taskList.tasks}
        onAddTask={addTask}
        onRemoveTask={removeTask}
      />
    </div>
  );
});

export default TaskManagerPage;