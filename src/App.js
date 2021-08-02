import './App.css';
import Row from './Row';
import Banner from './Banner';
import requests from './requests';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>

        <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOrignals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        {/* <Row title="Top Rated" fetchUrl={requests.fetchTrending}/> */}
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
