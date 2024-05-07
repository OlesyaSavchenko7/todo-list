import { observer } from 'mobx-react-lite';
import { ITask, ITaskList } from 'src/entities/Tasks/index';

import Button from 'src/shared/ui/Button/Button';
import Checkbox from 'src/shared/ui/Checkbox/Checkbox';

import './style.css';


interface TaskProps {
  task: ITask;
  onRemoveTask: ITaskList['removeTask'];
}

/** Компонент для отображения задачи и управления ею */
const Task = observer((props: TaskProps) => {
  const { task, onRemoveTask } = props;

  const onClick = () => {
    onRemoveTask(task.id);
  }

  const toggleDone = () => {
    task.toggleDone();
  }

  return (
    <div className="taskItem__wraper">
      <div className="taskItem__content">
        <Checkbox
          checked={task.isDone}
          onChange={toggleDone}
        />
        <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {task.name}
        </span>
      </div>
      <div>
        <Button
          onClick={onClick}
          title="Удалить"
        />
      </div>
    </div>
  );
});

export default Task;