import { StyleSheet } from 'react-native';


const styles = (styles = {}) => StyleSheet.create({
	default: {
		...styles
	},
	centered: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;
