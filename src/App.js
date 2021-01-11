import React from 'react';
import './App.css';
// import Navbar from './components/Navbar'
// import { Route, Link, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import CountriesList from './components/CountriesList'
// import CountryDetails from './components/CountryDetails'

import axios from 'axios'; // !!!!!!!!!!!!!AXIOS!!!!!!!

//OLD FFONTEND ONLY:

// function App() {
//   return (
//     <div className="App">
    
//   <Navbar></Navbar>
 


//   <Switch>
//         <Route exact path='/countries' component={CountriesList}></Route>
//         {/* <Route exact path='/education' component={Education}></Route> */}
//         {/* Route is setting props.match.params.theID for us in the component */}
//         <Route exact path='/countries/:cca3' component={CountryDetails}></Route>
//       </Switch>


//     </div>
//   );
// }


// NEW WITH BACKEND

class App extends React.Component {
  state = {
      countries: []
  }

  componentDidMount() {
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
          this.setState({countries: response.data})
      })
  }

  render() {
      return (
          <div className="App">
              {this.state.countries.map(country => <p>{country.title}</p>)}
          </div>
      );
  }
}



export default App;
