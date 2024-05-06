import TaskManagerPage from 'src/pages/TaskManagerPage/TaskManagerPage';
import { Layout } from 'src/widgets/Layout/index';
import './style.css';

const App: React.FC = () => {
  return (
    <div className="root-wrap">
      <Layout>
        <TaskManagerPage />
      </Layout>
    </div>
  );
};

export default App;
