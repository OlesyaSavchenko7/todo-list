import TaskManagerPage from 'src/pages/TaskManagerPage/TaskManagerPage';
import { Layout } from 'src/widgets/Layout/index';
import './style.css';

const App = () => {
  return (
    <div className="root-wrap">
      <Layout>
        <TaskManagerPage />
      </Layout>
    </div>
  );
};

export default App;
