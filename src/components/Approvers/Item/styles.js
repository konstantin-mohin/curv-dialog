import { StyleSheet } from 'react-native';
import { APPROVAL_ITEM_HEIGHT } from '~utils/constants';


const styles = StyleSheet.create({
	badgeContainer: {
		bottom: -6,
		right: -4,
		borderWidth: 2,
		borderColor: 'white',
	},
	listItemContainer: {
		height: APPROVAL_ITEM_HEIGHT
	},
	centerElementContainer: {
		paddingLeft: 15
	}
});

export default styles;
