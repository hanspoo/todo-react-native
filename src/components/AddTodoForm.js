import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import PropTypes from "prop-types";

export default class AddTodoForm extends React.Component {
	state = { todo: "" };
	static propTypes = {
		onAdd: PropTypes.func.isRequired
	};

	actualizar = todo => {
		this.setState({ todo });
	};

	agregar = () => {
		console.log("Botón apretado");
		const { todo } = this.state;
		const { onAdd } = this.props;
		if (todo.trim().length === 0) return;

		onAdd(todo);
		this.setState({ todo: "" });
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>Agrega Todo</Text>
				<View style={styles.textContainer}>
					<TextInput
						value={this.state.todo}
						underlineColorAndroid="transparent"
						onChangeText={this.actualizar}
					/>
				</View>
				<Button title="Agregar" onPress={this.agregar} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 7,
		borderTopWidth: 1
	},
	textContainer: {
		borderBottomWidth: 1,
		marginBottom: 14,
		borderBottomColor: "grey"
	}
});
