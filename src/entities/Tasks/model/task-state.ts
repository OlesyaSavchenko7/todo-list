import { types, Instance } from 'mobx-state-tree';

export interface ITask extends Instance<typeof Task> {};
export interface ITaskList extends Instance<typeof TaskList> {}; 

export const Task = types.model('Task', {
  id: types.identifier,
  name: types.optional(types.string, ''),
  isDone: types.optional(types.boolean, false)
})
.actions(self => ({
  toggleDone() {
    console.log('toggleDone self', self);
    self.isDone = !self.isDone;
  }
}));

export const TaskList = types.model('TaskList', {
  tasks: types.map(Task)
}).actions(self => ({
  addTask(name: string) {
    const id = new Date().toISOString();
    self.tasks.set(id, Task.create({
      id,
      name,
      isDone: false,
    }))
  },
  removeTask(id: string) {
    self.tasks.delete(id);
  }
}));

const TaskState = types.model('TaskState', {
  taskList: types.optional(TaskList, {
    tasks: {},
  }),
});

export default TaskState;