import React from 'react';
import ReactDOM from 'react-dom/client';

import ToDoController from './toDoController.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ToDoController />
	</React.StrictMode>
);
