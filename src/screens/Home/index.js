import React from 'react';
import { ScrollView } from 'react-native';

import Container from '~components/Container';
import Wrapper from '~components/Wrapper';
import Dialog from '~components/Dialog';
import ApproversList from '~components/Approvers/List';
import Hero from '~components/Hero';
import { SubTitle } from '~components/Title';
import dialogStyles from '~components/Dialog/styles';
import Button from '~components/Button';
import Icon from '~components/Icon';

import transactions from '~data/transactions';
import styles from './styles';


export default class Home extends React.Component {
	state = {
		isDialogVisible: false,
		dialogTransactionIndex: 0,
	}

	toggleDialog = (dialogTransactionIndex) =>
		this.setState(state => (
			// checking transaction index
			// if not passed (e.g. user closed the Dialog)
			// dont need to update the dialogTransactionIndex state
			dialogTransactionIndex ?
			{
				isDialogVisible: !state.isDialogVisible,
				dialogTransactionIndex
			} : {
				isDialogVisible: !state.isDialogVisible,
			}
			));


	render() {
		const {
			isDialogVisible,
			dialogTransactionIndex
		} = this.state;
		const currentTransaction = transactions[dialogTransactionIndex];
		const currentApprovers = currentTransaction.approvers;


		return (
			<Container>
				<Wrapper variant="centered">
					{
						!isDialogVisible &&
						transactions.map((t, i) =>
							<Button
								key={t.id}
								primary
								text={`Transaction ${t.id}`}
								onPress={this.toggleDialog.bind(this, i)}
							/>
						)
					}
					<Dialog
						isVisible={isDialogVisible}
						styles={[dialogStyles.fullWidthWrapper, dialogStyles.noOpacity]}
						containerStyle={dialogStyles.container}
						titleStyle={dialogStyles.title}
						title={`Transaction #${currentTransaction.id}`}
						rightElement={<Icon name="close" onPress={this.toggleDialog} />}
						>
							<ScrollView style={styles.scrollViewContainer}>
								<Hero
									source={require('~/assets/images/btc_background.jpg')}
								/>
								<Wrapper backgroundColor="#f1f1f1">
									<SubTitle text="Approves" />
									<ApproversList items={currentApprovers} />
								</Wrapper>
							</ScrollView>
					</Dialog>
				</Wrapper>
			</Container>
		);
	}
}
