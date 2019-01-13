import React from 'react';
import { Badge as MaterialBadge } from 'react-native-material-ui';


const Badge = ({ children, ...props }) => (
	<MaterialBadge {...props} >
		{children}
	</MaterialBadge>
);


export default Badge;
