import React from 'react';
import {LayoutAnimation} from 'react-native';

import Avatar from '~components/Avatar';
import ListItem from '~components/ListItem';
import Collapsible from '~components/Collapsible';
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


const CollapsibleItem = ({data}) => {

	const decision = getUserTransactionStatus(data.members);
	const avatarIcon = "group";
	const listHeight = APPROVAL_ITEM_HEIGHT * data.members.length;

	return (
		<Collapsible from={APPROVAL_ITEM_HEIGHT} to={listHeight}>
			{ (toggle, collapsed) =>
				<Wrapper backgroundColor="white">
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
						rightElement={collapsed ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
						onPress={toggle}
					/>
					{

						<Wrapper paddingLeft={30}>
							{
								data.members.map((el, i) => <ApprovalItem key={el.id} data={el} divider={false} />)
							}
						</Wrapper>
					}
				</Wrapper>


			}
		</Collapsible>
	);
}

export default CollapsibleItem;

