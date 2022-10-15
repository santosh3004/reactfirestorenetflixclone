import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';

function HomeScreen() {
  return (
    <div className="homeScreen"> 
      <Nav/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trendings" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Action Movies" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Documentaries" fetchUrl={requests.fetchNetflixOriginals}/>
    </div>

  )
}

export default HomeScreen