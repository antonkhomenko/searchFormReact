import '../styles/App.css';
import {useRef, useState} from "react";

export default function App(props) {

    const [item, setItems] = useState([]);
    const [query, setQuery] = useState('');

    const inputRef = useRef();

    const filteredItems = item.filter(item => {
        return item.toLowerCase().includes(query.toLowerCase());
    })

    function formSubmit(e) {
        e.preventDefault();
        const value = inputRef.current.value;
        if(!value.trim()) {
            alert('you try to add empty item');
            return;
        } else {
            inputRef.current.value = '';
            setItems(prev => {
                return [...prev, value];
            });
        }
    }

    function clearSearchBar() {
        setQuery('');
    }

    return (
        <div className='App'>
            <div className='SearchBar'>
                <span>Search:</span>
                <input type="search" value={query} onChange={(e) => setQuery(e.target.value)}/>
            </div>
            <form action="#" className='ItemForm' onSubmit={formSubmit}>
                <span>New item: </span>
                <input type="text" ref={inputRef} onChange={clearSearchBar}/>
                <button type='submit'>Add</button>
            </form>
            <h3 style={{fontSize: '25px', margin: '0px'}}>Items</h3>
            <ol className='ItemsList'>
                {filteredItems.map(i => <li>{i}</li>)}
            </ol>
        </div>
    )
}