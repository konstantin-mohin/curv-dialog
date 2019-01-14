import React from 'react';
import { Animated } from 'react-native';


class Collapsible extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
			animatedHeight: new Animated.Value(this.props.from)
		};
	}

	toggle = () => {
		const {
			collapsed,
			animatedHeight,
		} = this.state;
		const {
			from,
			to,
			duration,
		} = this.props;
		const toValue = collapsed ? to : from;

		Animated.timing(
			animatedHeight,
			{
				toValue,
				duration,
			}
		).start(()=> this.setState({collapsed: !collapsed}));
	}

	render() {
		const {
			animatedHeight,
			collapsed,
		} = this.state;

		return (
			<Animated.View style={{height: animatedHeight, overflow: 'hidden'}}>
				{
					this.props.children(this.toggle, collapsed)
				}
			</Animated.View>
		);
	}
}

Collapsible.defaultProps = {
	duration: 300
};


export default Collapsible;
