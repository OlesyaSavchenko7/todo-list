import TaskState, { Task, TaskList }  from './task-state';

const testTask = { id: '1', name: 'Task 1', isDone: false };

describe('Task model', () => {
  test('should have an id', () => {
    const task = Task.create({ ...testTask });
    expect(task.id).toBe('1');
  });

  test('should have a name', () => {
    const task = Task.create({ ...testTask });
    expect(task.name).toBe('Task 1');
  });

  test('should have an isDone property', () => {
    const task = Task.create({ ...testTask });
    expect(task.isDone).toBe(false);
  });

  test('should toggle isDone when calling toggleDone', () => {
    const task = Task.create({ ...testTask });
    task.toggleDone();
    expect(task.isDone).toBe(true);
  });
});


describe('TaskList model', () => {
  test('should have an empty tasks map by default', () => {
    const taskList = TaskList.create();
    expect(taskList.tasks.size).toBe(0);
  });

  test('should add a task when calling addTask', () => {
    const taskList = TaskList.create();
    taskList.addTask('Task 1');
    expect(taskList.tasks.size).toBe(1);
  });

  test('should remove a task when calling removeTask', () => {
    const taskList = TaskList.create();
    taskList.addTask('Task 1');
    const mapIter = taskList.tasks.keys();
    const taskKey = mapIter.next().value;
    taskList.removeTask(taskKey);
    expect(taskList.tasks.size).toBe(0);
  });
});

describe('TaskState model', () => {
  test('should have a taskList property', () => {
    const taskState = TaskState.create();
    expect(taskState.taskList).toBeDefined();
  });

  test('should have an empty taskList by default', () => {
    const taskState = TaskState.create();
    expect(taskState.taskList.tasks.size).toBe(0);
  });
});