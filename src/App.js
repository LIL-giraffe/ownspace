
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from "react-redux";
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <Body/>
      {/* 
        - Head
        - Sidebar
          - Menu
        -Body
          -ButtonList
          -VideoContainer
            -VideoCard
      */}
    </div>
    </Provider>
  );
}

export default App;
