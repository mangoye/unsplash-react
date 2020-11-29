import React, { useState } from "react";
import { createApi }  from "unsplash-js";


const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_API_KEY
})

export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState();

    const searchPhotos = async (e) => {
        e.preventDefault();
        unsplash.search
        .getPhotos({ query: query})
        .then(results => {
            setPics(results);
            console.log(results);
        });
        console.log("Envoi du formulaire.");
    };
    
      
    return (
        <>
            <form className="form" onSubmit={searchPhotos}> 
                <label className="label" htmlFor="query"> 
                    {" "}
                    📷
                </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder={`Essayez "Paris" ou "chat"`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">
                    Chercher
                </button>
            </form>
            <div className="card-list">
            {
                pics && pics.response.results.map((pic) =>
                    <div className="card"  key={pic.id}>
                    <img
                        className="card--image"
                        alt={pic.alt_description}
                        src={pic.urls.thumb}
                        width="50%"
                        height="50%"
                    ></img>
                    </div>
                )
            }
            </div>
        </>
    );
}