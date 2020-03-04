// imr
import React from 'react';
import Article from '../components/Article'

const articles = [{
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid, nihil adipisci corporis nostrum error cum tenetur odit facere ut sequi rerum deserunt reprehenderit saepe eveniet autem a modi? Qui."
},
{
    id: 2,
    title: "Czym jest paradoks fermiego",
    author: "Kamil Kamil",
    text: " dsf d a fds aLorem ipsum dolor sit amet cods af  fdf dsoris nostrum error cud sfd saenetur odit facere ut sequi rerum deserunt reprehenderit saepe eveniet autem a modi? Qui."
},
{
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Michał Adam",
    text: "aaaaLorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid, nihil adipisci corporis nostrum error cum ten gfsg g s sf gfsd gsds",
},
]
// sfc
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        < div className="home" >
            {artList}
        </div>
    );
}

export default HomePage;