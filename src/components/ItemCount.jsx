import React from 'react'

function ItemCount() {

    const[count,setCount] = useState(0)

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)} }>Sumar Contador</button>
        </div>
    )
}

export default ItemCount

