import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const SearchBar = (props) => {
    let {term, handleSearch} = useContext(SearchContext)

function SearchBar(props){
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form>
                <input ref={term} type="text" placeholder="Search Here" />
                <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            </form>
    )
}

export default SearchBar