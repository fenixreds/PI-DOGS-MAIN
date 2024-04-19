import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Create from './views/create/create.component';
import Home from './views/home/home.component';
import Detail from './views/detail/detail.component';
import Landing from './views/landing/landing.component';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/home/:id" component={Detail}/>
        <Route path="/create" component={Create}/>
        <Route path="/" component={Landing}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
