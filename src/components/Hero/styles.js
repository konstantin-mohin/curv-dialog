import {
	StyleSheet,
	Dimensions,
 } from 'react-native';
import { COMPONENT_HERO_HEIGHT } from '~utils/constants';


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	default: {
		width: width,
		height: COMPONENT_HERO_HEIGHT,
		alignSelf: 'center',
	}
});

export default styles;
