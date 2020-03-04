import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import '../styles/Header.css';

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';


const Header = () => {

    // const images = [img1, img2, img3];

    // const index = Math.floor(Math.random() * 3);

    // const img = images[index];


    return (
        <>
            <Switch>
                <Route exact path="/" render={() => (
                    <img src={img1} alt="miasto"></img>
                )} />
                <Route path="/products" render={() => (
                    <img src={img1} alt="miasto"></img>
                )} />
                <Route path="/contact" render={() => (
                    <img src={img2} alt="miasto"></img>
                )} />
                <Route path="/admin" render={() => (
                    <img src={img3} alt="miasto"></img>
                )} />
                <Route render={() => (
                    <img src={img3} alt="miasto"></img>
                )} />
            </Switch>
            {/* <img src={img} alt="losowe miasto" /> */}
        </>
    );
}

// export default Header;
export default withRouter(Header);