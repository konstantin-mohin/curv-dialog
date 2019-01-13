import React from 'react';
import {
	Image,
	// ImageBackground
} from 'react-native';
// import { isURL } from '~utils/helpers';

import styles from './styles';


const Hero = ({ children, ...props}) => (<Image {...props} style={styles.default} />
// 	<ImageBackground {...props}>
// 		{
// 			children
// 		}
// 	</ImageBackground>
);


export default Hero;
