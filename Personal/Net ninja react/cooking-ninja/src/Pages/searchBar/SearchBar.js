import React from 'react'
import './SearchBar.css'

import {useState} from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {

    const [term,setTerm] = useState("");
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        history.push(`/search?query=${term}`)
    }

  return (
    <div className = "searchBar">
        <form onSubmit = {handleSubmit}>
            <label htmlFor  ="search">Search</label>
            <input type = "text"
            id = "search"
            onChange = { (e)=> setTerm(e.target.value)} />
        </form>
    </div>
  )
}
