import React from 'react';

import Avatar from '~components/Avatar';
import ListItem from '~components/ListItem';
import {
	avatarUserName,
	getRandomHex,
	getUserTransactionBadge,
	getUserTransactionStatus,
	transactionStatusToColor,
} from '~utils/helpers';
import styles from './styles';


const Item = ({ data, divider = true }) => {
	const decision   = getUserTransactionStatus(data.decision);
	const avatarText = avatarUserName(data.name);

	return (
		<ListItem
			numberOfLines={2}
			divider={divider}
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
					text={avatarText}
					style={{ container: { backgroundColor: getRandomHex() } }}
				/>
			}
			centerElement={{
				primaryText: data.name,
				secondaryText: decision,
			}}
			style={{
				container: styles.listItemContainer,
				centerElementContainer: styles.centerElementContainer
			}}
		/>
	);
};

export default Item;
