import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";

export default class SearchBar extends React.Component {
	static propTypes = {
		onSearch: PropTypes.func.isRequired
	};
	cambiarTexto = text => {
		this.props.onSearch(text);
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput placeholder="buscar..." onChangeText={this.cambiarTexto} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {}
});
