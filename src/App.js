import { Incrementer } from './Incrementer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GitHubCard } from './githubcards/GitHubCard';
import { Header } from './Header';
import { ConditionalStyle } from './conditionalstyle/ConditionalStyle';

function App() {
 
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Incrementer}/>
          <Route path="/gitHubCard" render={(props) =>  <GitHubCard title={'The GitHub Cards App'} />}/>
          <Route path="/conditional" component={ConditionalStyle}/>
        </Switch>
      </Router>
  );
}

export default App;

