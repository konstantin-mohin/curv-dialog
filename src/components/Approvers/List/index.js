import React from 'react';
import ApprovalItem from '~components/Approvers/Item';
import CollapsibleItem from '~components/Approvers/Item/collapsible';


const ApproversList = ({items}) => {

	return items.map((el, i) => {
		if (el.members && el.members.length > 1) {
			return (
				<CollapsibleItem data={el} key={el.id} />
			);
		}

		return (
			<ApprovalItem data={el} key={el.id} />
		);
	}

	);
}

export default ApproversList;
