import React, { useState } from 'react';

import AddToDo from './components/addToDo.jsx';
import ToDoList from './components/toDoList.jsx';

export default function ToDoController () {
	const [toDos, setToDos] = useState([]);
	
	return (

		<div className="flex h-screen">
			<div className="m-auto">

				<AddToDo toDos={ toDos } setToDos={ setToDos } />
				<ToDoList toDos={ toDos } setToDos={ setToDos } />

			</div>
		</div>

	);
}
