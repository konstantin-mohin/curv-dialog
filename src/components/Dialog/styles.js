import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
	fullWidthWrapper: {
		height: '100%',
		width: '100%',
	},
	noOpacity: {
		shadowOpacity: 0,
	},
	title: {
		elevation: 2,
		shadowColor: '#000',
		shadowOpacity: 0.8,
		shadowRadius: 20,
		shadowOffset: {
			height: 2,
			width: 2
		},
	},
	container: {
		flex: 1,
		paddingHorizontal: 0,
		paddingBottom: 0,
	}
});

export default styles;
