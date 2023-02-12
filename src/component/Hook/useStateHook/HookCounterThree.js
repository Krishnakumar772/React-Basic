import React,{useState} from 'react'

function HookCounterThree() {
    const [items,setItems]=useState([])

    const handleSubmit = () => {
        console.log("Hello world")
        setItems([...items, {
            id:items.length,
             value:Math.floor(Math.random()*10)+1
        }])
        
    }
  return (
    <div>

<button onClick={handleSubmit}>Click</button>
<ul>
    {items.map(item => (
            <li key={item.id}>{item.value}</li>
        ))
}
</ul>
    </div>
  )
}

export default HookCounterThree
