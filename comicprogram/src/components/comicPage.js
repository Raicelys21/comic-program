import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/comicPage.css";
import { BsList,BsGrid3X3Gap } from "react-icons/bs";
import { Link, useNavigate} from "react-router-dom";

const ComicPage = () => {
    const [comics, setComic] = useState([]);
    const [comicById, setComicById] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllComic();
    }, []);

    const getAllComic = async () => {
        try{
            const res = await axios.get('http://localhost:8000/comics');
            setComic(res.data.results);
        } 
        catch(err){
            alert(err.message);
        }
    }
    
    const changeStyleList = () => {
        document.getElementById("column").className = "column2";
    }

    const changeStyleGrid = () => {
        document.getElementById("column").className = "column";

    }

    const openDetails = (id) => {
        try{
            // axios.get(`http://localhost:8000/comic/${id}`).then(res => {
            //     setComicById(res.data.results);
            //   });
              console.log('id es ' + id);
              navigate('/details/' + id);              
        } 
        catch(err){
            alert(err.message); 
        }
    }

    return(
        <div className="all">
        <div className="comicPage">
            <div className="navbar">
                <div className="title">
                    <h3 className="title1">ComicBook</h3>
                </div>

                <div className="button">
                    <div className="list">
                        <button onClick={changeStyleList}><BsList/></button>
                        <h6>List</h6>
                    </div>
                    <div className="grid">
                         <button onClick={changeStyleGrid}> <BsGrid3X3Gap/></button>
                         <h6>Grid</h6>
                    </div>
                </div>
            </div>

            <hr></hr>
            
            <div className="column" id="column">
               {comics.map((comic) =>(
                    <div className="row" id="row">
                        <div key={comic.id}>
                            <img src={comic.image.original_url} alt="img" width="100" height="150"></img>
                            <h4>{comic.name + " " + comic.issue_number}</h4>
                            <p>{comic.date_added}</p>
                            {/* <p className="link" onClick={() => openDetails(comic.id)}>See more...</p> */}
                            <Link className="link" to={`/details/${comic.id}`}>details</Link>
                        </div>
                    </div>
               ))}
            </div>
        </div>
        <hr></hr>
        <footer className="footer">
            <h6 className="name">Ⓒ Raicelys Suero - 10139203</h6>
        </footer>
        </div>
    );
}

export default ComicPage;