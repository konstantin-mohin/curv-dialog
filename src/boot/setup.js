import React from 'react';
import { Font } from 'expo';

import ThemeProvider from '~boot/themeConfig';


export default class Setup extends React.Component {
	state = {
		fontLoaded: false
	}

	async componentDidMount() {
		await Font.loadAsync({
			'Roboto': require('~/assets/fonts/Roboto-Regular.ttf'),
		});

		this.setState({fontLoaded: true});
	}

	render() {
		const {
			fontLoaded
		} = this.state;
		const {
			children
		} = this.props;

		return (
			fontLoaded ?
			<ThemeProvider>{children}</ThemeProvider> :
			null
		);
	}
}
