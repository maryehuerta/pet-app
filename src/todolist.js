import React from 'react';
import { Progress, Checkbox, Item } from 'semantic-ui-react'

import './App.css';

const daysLeft = (dueDate) => Math.abs((new Date() - dueDate)/1000/60/60/24).toFixed(0)

function TodoList({ todos }) {
  return (
	<Item.Group>
		{todos.map((todo, key) => 
		<Item key={`item-${key}`}>
			<Item.Content>
				<Checkbox label={{children: todo.task}}/>
			</Item.Content>
			<Item.Content>
				<Progress percent={50}>
					{daysLeft(todo.due)} days left
				</Progress>
			</Item.Content>
		</Item>)}
	</Item.Group>
)}

export default TodoList;