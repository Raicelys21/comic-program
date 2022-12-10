import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../style/detailsComic.css";


const DetailsComic  = () => {
    const {id} = useParams();
    const [comic, setComic] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/comic/${id}`).then(res => {
            setComic(res.data.results);
            console.log(res.data.results);
          });
          
    }, []);

    return(
        <div className="all">
            <div className="navbar">
                <div className="title">
                    <h4 className="title1">ComicBook</h4>
                </div>

                <div className="button">
                    <div className="list">
                    <Link className="link" to={`/`}>back</Link>
                        {/* <button className="link" onClick={backPage()}> back</button> */}
                    </div>
                </div>
            </div>
            <hr></hr>

        <div className="grid2">
            <div className="info">
                <img className="img" width={"220px"} src={comic.image?.original_url}/>
                <h4>{comic.name + " " + comic.issue_number}</h4>
                <h6>{comic.date_added}</h6>
            </div>

            <div className="content">
                <h4>Characters</h4>
                <hr></hr>
                <div>
                    {comic.character_credits && comic.character_credits.map((char) => (
                        <div key={char.id}>
                            <h6>{char.name}</h6>
                        </div>
                    ))}
                </div>
                <br></br>

                <h4>Team credit</h4>
                <hr></hr>
                <div>
                    {comic.team_credits && comic.team_credits.map((team) => (
                        <div key={team.id}>
                            <h6>{team.name}</h6>
                        </div>
                    ))}
                </div>
                <br></br>

                <h4>Location credit</h4>
                <hr></hr>
                <div>
                    {comic.location_credits && comic.location_credits.map((loc) => (
                        <div key={loc.id}>
                            <h6>{loc.name}</h6>
                        </div>
                    ))}
                </div>
                <br></br>

        </div>
        </div>
        <hr></hr>
        <footer className="footer">
            <h6 className="name">Ⓒ Raicelys Suero - 10139203</h6>
        </footer>
        </div>

    );
    
}

export default DetailsComic;