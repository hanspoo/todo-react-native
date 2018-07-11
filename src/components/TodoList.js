import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import ListaTodos from "./ListaTodos";
import AddTodoForm from "./AddTodoForm";

export default class TodoList extends React.Component {
	state = {
		todos: [
			{ id: 1, todo: "Leer sobre react", listo: false },
			{ id: 2, todo: "Comprar el pan", listo: true },
			{ id: 3, todo: "Ir a la universidad", listo: false }
		],
		filter: ""
	};

	addTodo = todo => {
		console.log("todo", todo);
		const { todos } = this.state;

		const id = todos.length + 1;
		const todoNuevo = { id, todo, listo: false };

		console.log("nuevo", todoNuevo);
		this.setState({ todos: todos.concat(todoNuevo) });
	};

	onSearch = filter => {
		this.setState({ filter });
	};

	render() {
		const { titulo } = this.props;
		const { todos, filter } = this.state;

		const todosMostrar = todos.filter(
			t => t.todo.toLowerCase().indexOf(filter) != -1
		);
		return (
			<View style={styles.container}>
				<Text style={styles.header}>{titulo || "Todo List"}</Text>
				<SearchBar onSearch={this.onSearch} />
				<ListaTodos todos={todosMostrar} />
				<AddTodoForm onAdd={this.addTodo} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 24
	},
	header: {
		fontSize: 24,
		fontWeight: "bold"
	}
});
