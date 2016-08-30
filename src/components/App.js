import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import DevTools from './Dev/DevTools';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    {
      (() => {
        if (process.env.NODE_ENV !== 'production') {
          return <DevTools />;
        }
        return null;
      })()
    }
  </div>
);

export default App;
