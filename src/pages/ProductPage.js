import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'


//MATCH jest obiektem wbudowanym, w którym zawarte są m.in. ścieżka prowadząca do produktu. console.log mówi, że kazdy produkt car itd. jest obiektem. match jest częścią tego obiektu

const ProductPage = ({ match }) => {
    // console.log(props)
    return (
        <>
            <div>Strona produktu</div>
            <Product id={match.params.id} />
            <Link to="/products">Powrót do losty produktów</Link>
        </>
    );
}

export default ProductPage;