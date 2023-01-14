export default function InputForm(props) {
    return (
        <form action="#"  className='ItemForm' onSubmit={props.onSubmit}>
            <span>New item: </span>
            <input type="text" ref={props.refs} onChange={props.onChange}/>
            <button type='submit'>Add</button>
        </form>
    )
}