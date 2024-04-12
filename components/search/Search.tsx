import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import "./Search.css"

const Search = () => {
  return (
    <div className='search__container'>
      <select className='select__field'>
        <option>Tutte le Categorie</option>
        <option>Alexa Skill</option>
        <option>Alimentari e cura</option>
        <option>App e Giochi</option>
        <option>Bellezza</option>
        <option>Casa e cusina</option>
      </select>
      <input className='search__input--field' placeholder='Ricerca Amazon.it' type='text'></input>
      <button className='search__btn'>
        <Link href={"/product"}>
        <MagnifyingGlassIcon className='search__mgnfy'/>
        </Link>
      </button>
    </div>
  )
}

export default Search
