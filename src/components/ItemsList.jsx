export default function ItemsList(props) {
    return (
        <>
            <h3 style={{fontSize: '25px', margin: '0px'}}>Items</h3>
            <ol className='ItemsList'>
                {props.items.map(item => <li>{item}</li>)}
            </ol>
        </>
    )
}