import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class ListaTodos extends React.Component {
	static propTypes = {
		todos: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				todo: PropTypes.string.isRequired,
				listo: PropTypes.bool.isRequired
			}).isRequired
		)
	};
	render() {
		const { todos } = this.props;
		return (
			<View style={styles.container}>
				{todos.map(t => (
					<View key={t.id} style={styles.todo}>
						<Text>{t.todo}</Text>
					</View>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	todo: {
		marginVertical: 4
	}
});
