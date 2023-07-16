import React from 'react'
import { useGlobalContext } from '../context';

const SearchFrom = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  function searchCockTail(){
    setSearchTerm(searchValue.current.value);
  }

  function handleSubmit(e){
    e.preventDefault()
  }

  React.useEffect(() => {
    searchValue.current.focus()
  },[])
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit} >
        <div className='form-control'>
          <label htmlFor='name'>koktail qidiring</label>
          <input type='text' name='name' id='name' ref={searchValue} onChange={searchCockTail} />
        </div>
      </form>
    </section>
  )
}

export default SearchFrom;