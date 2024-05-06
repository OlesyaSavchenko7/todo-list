import { ReactNode } from 'react';

import './style.css';

const Layout: any = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout__wrap">
      <header className="layout__header">
        <h1>Помощник в ваших планах</h1>
      </header>
      <div className="layout__content">
        { children }
      </div>
    </div>
  );
};

export default Layout;