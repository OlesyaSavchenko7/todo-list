import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ITaskList } from 'src/entities/Tasks/index';
import Button from 'src/shared/ui/Button/Button';
import TextField from 'src/shared/ui/TextField/TextField';
import FormControl from '@mui/material/FormControl';

import './style.css';

interface TaskInputProps {
  onAddTask: ITaskList['addTask'];
  inputPlaceholder?: string;
  addBtnTitle?: string;
}

const TaskInput = observer((props: TaskInputProps) => {
  const {
    onAddTask,
    inputPlaceholder = 'Введите новую задачу',
    addBtnTitle = 'Добавить задачу',
  } = props;

  const [newTaskName, setNewTaskName] = useState('');
  const [isDisabledAdd, setIsDisabledAdd] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
    const emptyVal = !e.target.value
    setIsDisabledAdd(emptyVal);
  }

  const handleAddTask = () => {
    if (newTaskName.trim() !== '') {
      onAddTask(newTaskName);
    }
    setNewTaskName('');
    setIsDisabledAdd(true);
  };

  return (
    <div className="taskInput__wraper">
      <div className="taskInput__content">
      <FormControl fullWidth sx={{ m: 1 }}>

        <TextField
          value={newTaskName}
          onChange={onChange}
          placeholder={inputPlaceholder}
        />
      </FormControl>

      </div>
      <div className="taskInput__controler">
        <Button
          onClick={handleAddTask}
          title={addBtnTitle}
          disabled={isDisabledAdd}
        />
      </div>
    </div>
  );
});

export default TaskInput;