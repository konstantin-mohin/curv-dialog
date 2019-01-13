import React from 'react';
import Wrapper from '~components/Wrapper';
import {  Dialog as MaterialDialog } from 'react-native-material-ui';


const Dialog = ({ isVisible, children, title, rightElement, styles = {}, containerStyle={}, titleStyle={} }) => (
	isVisible &&
	<MaterialDialog style={{ container: styles }}>
		{
			rightElement &&
			<Wrapper right={0} position="absolute">{rightElement}</Wrapper>
		}
		{
			title &&
			<MaterialDialog.Title style={{ titleContainer: titleStyle}}>
				{
					title
				}
			</MaterialDialog.Title>
		}
		<MaterialDialog.Content style={{contentContainer: containerStyle}}>
			{
				children
			}
		</MaterialDialog.Content>
	</MaterialDialog>
);

export default Dialog;
