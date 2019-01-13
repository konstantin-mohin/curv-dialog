import React from 'react';
import {LayoutAnimation} from 'react-native';

import Avatar from '~components/Avatar';
import ListItem from '~components/ListItem';
import Wrapper from '~components/Wrapper';
import ApprovalItem from '~components/Approvers/Item';
import {
	getRandomHex,
	getUserTransactionBadge,
	getUserTransactionStatus,
	transactionStatusToColor,
} from '~utils/helpers';
import { APPROVAL_ITEM_HEIGHT } from '~utils/constants';
import styles from './styles';


export default class CollapsibleItem extends React.Component {
	state = {
		collapsed: true
	}

	toggleCollapse = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
		this.setState(state => (
			{
				collapsed: !state.collapsed
			}
			));

	}

	render() {
		const { data }         = this.props;
		const { collapsed }    = this.state;
		const decision         = getUserTransactionStatus(data.members);
		const rightElement     = collapsed ? 'keyboard-arrow-down' : 'keyboard-arrow-up';
		const avatarIcon       = "group";
		const nestedListHeight = collapsed ? 0 : APPROVAL_ITEM_HEIGHT * data.members.length;

		return (
			<Wrapper backgroundColor="white" overflow="hidden" >
				<ListItem
					numberOfLines={2}
					divider={collapsed}
					leftElement={
						<Avatar
							iconProps={{
								icon: {
									name: getUserTransactionBadge(decision),
									color: "white",
									size: 23
								},
								size: 26,
								style: {
									container: {
										...styles.badgeContainer,
										backgroundColor: transactionStatusToColor(decision)
									}
								}
							}}
							icon={avatarIcon}
							style={{ container: { backgroundColor: getRandomHex() } }}
						/>
					}
					centerElement={{
						primaryText: data.name,
						secondaryText: decision,
					}}
					style={{ centerElementContainer: styles.centerElementContainer }}
					rightElement={rightElement}
					onPress={this.toggleCollapse}
				/>
				{

					<Wrapper paddingLeft={30} height={nestedListHeight}>
						{
							data.members.map((el, i) => <ApprovalItem key={el.id} data={el}  divider={false} />)
						}
					</Wrapper>
				}
			</Wrapper>
		);
	}
};

