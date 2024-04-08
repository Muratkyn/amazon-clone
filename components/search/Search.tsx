import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import "./Search.css"

const Search = () => {
  return (
    <div className='search_container'>
        <select className='select_field'>
            <option>Tutte le Categorie</option>
            <option>Alexa Skill</option>
            <option>Alimentari e cura</option>
            <option>App e Giochi</option>
            <option>Bellezza</option>
            <option>Casa e cusina</option>
        </select>
      <input className='input_field' placeholder='Ricerca Amazon.it' type='text'></input>
      <button className='btn'>
        <Link href={"/product"}>
        <MagnifyingGlassIcon className='mgnfy'/>
        </Link>
      </button>
    </div>
  )
}

export default Search
