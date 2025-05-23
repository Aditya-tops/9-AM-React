

export  function SearchDemo(){
    return(
        <div>
            <h3>Search Demo</h3>
            <form action={'/results'}>
                <input type="text" name="query" />
                <button className="bi bi-search btn"></button>
            </form>
        </div>
    )
}