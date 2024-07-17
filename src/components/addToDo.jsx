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
		
		<div className="to-do-inputs-controller">
		
			<input
				type="text"
				placeholder="To-Do"
				className="input input-bordered input-primary tn-wide add-to-do-input" 
				value={ toDo }
				onChange={(e) => setToDo(e.target.value) }
			/>
		
			<div>
		
				<button 
					disabled={ toDo.length === 0 }
					className="mt-2.5 btn btn-primary to-do-controll-buttons"
					onClick={ addToDo }
				>
					
					Add To-Do
				
				</button>
				
				<button 
					disabled={ toDos.length === 0 }
					className="mt-2.5 ml-3 btn btn-primary to-do-controll-buttons"
					onClick={ clearAllToDos }
				>
					
					Remove All
				
				</button>
		
			</div>
			
		</div>
		
	)
	
}
