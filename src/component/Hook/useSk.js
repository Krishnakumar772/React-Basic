// import React,{useState} from 'react'



//  function useSk() {
//     const num=useState("Hello This is Krishna");
//   return (
//     <div>useStateHook --{num}</div>
//   )
// }

// export default useSk

// import React, { useState } from 'react';

// function App11() {
// const click = useState('GeeksForGeeks');
// return (
// 	<h1>Welcome to {click}</h1>
// );
// }

// export default App11;



// import React, { useState } from 'react'

// export default function useSk() {
// const [count,setCount]	=useState(0);


// //useState hook return two value
// //the first value  inital the current value of the state variable and seconnd value function to update the state
// return (
// 	<div>
// 	<p>This is Krishna  count {count}</p>
// 	<button onClick={() =>setCount(count+1)}>click</button>
// 	</div>
//   )
// }

// import React, { useState } from 'react'

// export default function useSk() {
// const [num,setNum]=useState(0);
//   return (
// 	<div>
// 	<h1>the value of the nom {num}</h1>
// {/* <h1>Hello This is Krishna</h1> */}

// <h5>the nom of you have time {num%2==0?"even":"odd"}</h5>

// 		<button onClick={() => setNum(num => num+1)}>Click</button>
// 	</div>
//   )
// }



// import React, { useState } from 'react'

// export default function useSk() {
// 	const [num,setNum]=useState([]);


// 	const changeHandler = () => {
// 		setNum([
// 			...num,
// 			{
// 				id:num.length,
// 				value:Math.random()*10
// 			}
// 		])
// 	}
//   return (
// 	<div>
// 		<h1>This is krishna</h1>
// 		<ul>
// 			<div>
// 				{num.map(item => (
// 						<li  key={item.id}>{item.value}</li>
// 				))
// 				}
// 			</div>
// 		</ul>
// 		<button onClick={changeHandler}>Click me</button>
// 	</div>
//   )
// }

import React, { useState } from 'react'

export default function useSk() {
	const [userName,setUserName]=useState("");
	const [password,setPassword]=useState("");

const changeUserName = (event) =>{
setUserName(event.target.value);
}


const changeUserPassword = (event) => {
setPassword(event.target.value);
}

const submitHandler = (event) => {
	if(userName== "" && password==""){
		alert("the password does not match")
	}else{
		alert(`the userName ${userName} And Password ${password}`)
	}
}



  return (
	<div>
	<form onSubmit={(e) =>submitHandler}>
		<div>
			<label>UserName:</label>
			<input type="text" value={userName} onChange={e =>changeUserName(e)}/>
		</div>

		<div>
			<label>Passwoed:</label>
			<input type="password" 
			value={password} 
			onChange={e =>changeUserPassword(e)}/>
		</div>
		<button onClick={(event) =>submitHandler(event)}>Click</button>
	</form>
	
	</div>
  )
}
