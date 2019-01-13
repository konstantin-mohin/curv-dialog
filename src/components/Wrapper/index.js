import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Wrapper = ({ children, variant, ...rest }) =>
	<View style={
		!variant ?
		styles(rest).default :
		styles()[variant]}>
			{children}
		</View>;

export default Wrapper;
