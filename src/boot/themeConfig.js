import React from 'react';
import {
	COLOR,
	ThemeContext,
	getTheme
} from 'react-native-material-ui';

const uiTheme = {
	//there is no need to set the property
	// fontFamily: Roboto
	// since the material-ui library uses it by default.
	palette: {
		primaryColor: COLOR.blue500,
	},
};


const ThemeProvider = ({children}) => (
	<ThemeContext.Provider value={getTheme(uiTheme)}>
		{
			children
		}
	</ThemeContext.Provider>
);

export default ThemeProvider;
