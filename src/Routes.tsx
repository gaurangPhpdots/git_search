import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { User } from './pages/User';

export const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/user" component={User} />
    </Switch>
  );
};