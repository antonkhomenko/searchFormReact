export default function SearchBar(props) {
    return (
        <div className='SearchBar'>
            <span>Search:</span>
            <input type="search" value={props.inputValue} onChange={props.searchInput}/>
        </div>
    )
}