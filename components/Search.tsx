import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Search = () => {
  return (
    <div className='w-[100%] flex items-center h-10 bg-amazonColors-backgroundColor rounded ml-3'>
        <select className='text-slate-900 border text-xs text-bold bg-amazonColors-backgroundColor p-2 rounded-l'>
            <option>Tutte le Categorie</option>
            <option>Alexa Skill</option>
            <option>Alimentari e cura</option>
            <option>App e Giochi</option>
            <option>Bellezza</option>
            <option>Casa e cusina</option>
        </select>
      <input className='flex grow item-center rounded h-[100%] w-[100%] p-2 text-black text-bold' placeholder='Ricerca Amazon.it' type='text'></input>
      <button className='w-[45px] rounded p-1 bg-amazonColors-amazonYellow hover:bg-yellow-500'>
        <Link href={"/product"}>
        <MagnifyingGlassIcon className='h-[32px] text-black mr-1'/>
        </Link>
      </button>
    </div>
  )
}

export default Search
