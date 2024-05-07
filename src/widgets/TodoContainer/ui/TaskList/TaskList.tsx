import { observer } from 'mobx-react-lite';
import { ITask, ITaskList } from 'src/entities/Tasks/index';

import { Task } from 'src/features/Task/index';

import './style.css';

interface TaskListProps {
  onRemoveTask: ITaskList['removeTask'];
  tasks: ITaskList['tasks'];
}

/** Компонент для отображения списка задач */
const TaskList = observer((props: TaskListProps) => {
  const { onRemoveTask, tasks } = props;

  return (
    <div className="taskList_wraper">
      {Array.from(tasks.values()).map((item: ITask) => (
        <Task
          key={item.id}
          task={item}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </div>
  );
});

export default TaskList;