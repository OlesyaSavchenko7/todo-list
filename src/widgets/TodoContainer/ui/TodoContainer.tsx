import { observer } from 'mobx-react-lite';
import { ITaskList, ITask } from 'src/entities/Tasks/index';

import TaskInput from './TaskInput/TaskInput';
import Paper from '@mui/material/Paper';
import TaskList from './TaskList/TaskList';

import './style.css';

interface TodoContainerProps {
  tasks: ITaskList['tasks'];
  onAddTask: ITaskList['addTask'];
  onRemoveTask: ITaskList['removeTask'];
}

const TodoContainer = observer((props: TodoContainerProps) => {
  const { tasks, onAddTask, onRemoveTask } = props;

  return (
    <Paper elevation={3} className="todoContainer__wraper">
      <header className="todoContainer__header">
        <h2>Система управления задачами</h2>
      </header>
      <div className="todoContainer__content">
        <TaskInput
          onAddTask={onAddTask}
        />
        <TaskList
          tasks={tasks}
          onRemoveTask={onRemoveTask}
        />
      </div>
    </Paper>
  );
});

export default TodoContainer;