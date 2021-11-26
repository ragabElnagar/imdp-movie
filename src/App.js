import './App.css';
import Landing from './Landing/Landing';
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import MovieInfo from './home/MovieInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/movie/:id" component={MovieInfo} />
      </Router>

    </div>
  );
}

export default App;
