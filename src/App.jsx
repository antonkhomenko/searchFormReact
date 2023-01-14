import './styles/App.css';
import {useRef, useState} from "react";
import SearchBar from "./components/SearchBar.jsx";
import InputForm from "./components/InputForm";
import ItemsList from "./components/ItemsList";

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
        console.log(value);
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

    function searchInput(e) {
        setQuery(e.target.value);
    }

    return (
        <div className='App'>
            <SearchBar inputValue={query} searchInput={searchInput}/>
            <InputForm onSubmit={formSubmit} refs={inputRef} onChange={clearSearchBar}/>
            <ItemsList items={filteredItems}/>
        </div>
    )
}