import React from 'react';
import {
	Icon as MaterialIcon,
	IconToggle,
} from 'react-native-material-ui';


export const Icon = ({ onPress, ...props }) => (
	onPress ?
	<IconToggle onPress={onPress} {...props} /> :
	<MaterialIcon {...props} />
);


export default Icon;

