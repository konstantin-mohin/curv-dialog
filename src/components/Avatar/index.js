import React from 'react';
import { Avatar as MaterialAvatar } from 'react-native-material-ui';
import Badge from '~components/Badge';


const Avatar = ({iconProps, ...props}) => (
	iconProps ?
	<Badge {...iconProps} ><MaterialAvatar {...props} /></Badge> :
	<MaterialAvatar {...props} />
);


export default Avatar;
