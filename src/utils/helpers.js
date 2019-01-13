

export const isURL = (str) => {
	const pattern = /^(http|https)/;

	return pattern.test(str);
}


export const getRandomHex = () => {
	const hex = Math.floor(Math.random() * 0xFFFFFF);
	return `#${("000000" + hex.toString(16)).substr(-6)}`;
};

export const transactionStatusToColor = (status) => {
	let color = 'deepskyblue';

	if (status) {
		switch (status) {
			case 'approved':
				color = 'lightgreen'
				break;

			case 'rejected':
			case 'ignored':
				color = 'tomato';
				break;
		}

		return color;
	}

	return color;
}


const transactionStatusToIcon = (status) => {
	let icon = 'access-time'; //default icon if not passed

	if (status) {
		switch (status) {
			case 'approved':
				icon = 'done'
				break;
		
			case 'ignored':
			case 'rejected':
				icon = 'close';
				break;
		}

		return icon;
	}

	return icon;
}


export const getUserTransactionBadge = (status) => transactionStatusToIcon(status);


export const getUserTransactionStatus = (status) => {
	if (Array.isArray(status)) {
		let finalDecision = 'approved';

		for (d of status ) {
			const {decision} = d;
			if (
				decision === 'rejected' ||
				decision === 'ignored' ||
				decision === 'pending') {
				finalDecision = decision;
				break;
			}
		}

		return finalDecision;
	}

	return status;
}


export const avatarUserName = (name) => {
	if (name) {
		const parts = name.split(' ');

		if (parts.length === 1) {
			return `${parts[0][0]}${parts[0][1]}`.toUpperCase();
		} else {
			return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
		}
	}
	return 'N/A';
}
