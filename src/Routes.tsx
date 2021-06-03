import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MovieDetails from "./pages/MovieDetails";
import MovieSearch from "./pages/MovieSearch";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/" exact component={MovieSearch} />
      </Switch>
    </Router>
  );
};

export default Routes;
