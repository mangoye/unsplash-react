import React, { useState } from "react";

export default function SearchPhotos() {
    const [query, setQuery] = useState("");
    console.log(query);

    
    return (
        <>
            <form className="form"> 
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
        </>
    );
}