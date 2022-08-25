import { useState } from "react";
import { IconMagnifyingGlass } from "./Icons";

function SearchForm({ fetchWeather, APIKey }) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()){
      fetchWeather(input, APIKey)
    }
    setInput('')
  }

  return(
    <form onSubmit={handleSubmit} className={'searchForm'}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button>
        <IconMagnifyingGlass />
      </button>
    </form>
  )
}

export default SearchForm