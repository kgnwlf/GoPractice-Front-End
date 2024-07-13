import React from 'react';

export default function ToDoList ({ setToDos, toDos }) {
	
	let handleToDoRemoval = (index) => {
		let newToDos = [ ...toDos ];
		
		newToDos.splice(index, 1);
		
		setToDos(newToDos);
		
	}
	
	return (
		
		<div className="mt-7">
		
			{
				
				toDos.map((toDo, index) => 
				
					<div key={ toDo } className="card bg-primary text-primary-content w-96 mt-2.5">
						<div className="card-body">
							
							<h2 className="card-title">{ toDo }</h2>
							
							<div className="card-actions justify-end">
								<button 
									className="btn"
									onClick={ () => handleToDoRemoval(index) }
								>
									
									Remove
									
								</button>
							</div>
							
						</div>
					</div>

				)
				
			}
		
		</div>
		
	)
	
}
