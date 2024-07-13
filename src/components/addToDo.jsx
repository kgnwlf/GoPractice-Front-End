import React, { useState } from 'react';

export default function AddToDo ({ toDos, setToDos }) {
	const [toDo, setToDo] = useState('');
	
	let addToDo = () => {
		setToDos([ ...toDos, toDo ]);
		setToDo('');
	}
	
	let clearAllToDos = () => {
		setToDos([  ]);
	}
	
	return (
		
		<>
		
			<input
				type="text"
				placeholder="To-Do"
				className="input input-bordered input-primary w-full max-w-xs tn-wide" 
				value={ toDo }
				onChange={(e) => setToDo(e.target.value) }
			/>
		
			<div>
		
				<button 
					disabled={ toDo.length === 0 }
					className="mt-2.5 btn btn-primary"
					onClick={ addToDo }
				>
					
					Add To-Do
				
				</button>
				
				<button 
					disabled={ toDos.length === 0 }
					className="mt-2.5 ml-3 btn btn-primary"
					onClick={ clearAllToDos }
				>
					
					Remove All
				
				</button>
		
			</div>
			
		</>
		
	)
	
}
