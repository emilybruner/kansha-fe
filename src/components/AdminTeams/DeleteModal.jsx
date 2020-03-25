import React, { useEffect } from 'react';
import Modal from '../Modal';
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';

function DeleteModal({
	deleteMemberFromOrg,
	deleteTeamFromOrg,
	setDeleteModal,
	handleDeleteTeam,
	handleDeleteTeamMember,
	handleDeleteOrgMember,
}) {
	//receive three pieces of state, render different content/functionality depending on that state

	const handleClose = () => {
		setDeleteModal(false);
	};

	return (
		<Modal close={handleClose}>
			{deleteMemberFromOrg ? (
				<section>
					<h5>
						Are you sure you want to permanently delete this member
						from your organization? This action cannot be undone.
					</h5>
					<button onClick={handleDeleteOrgMember}>Delete</button>
				</section>
			) : deleteTeamFromOrg ? (
				<section>
					<h5>
						Are you sure you want to permanently delete this team
						from your organization? This action cannot be undone.
					</h5>
					<button onClick={handleDeleteTeam}>Delete</button>
				</section>
			) : (
				<section>
					<h5>
						Are you sure you want to delete this member from your
						team?
					</h5>
					<button onClick={handleDeleteTeamMember}>Delete</button>
				</section>
			)}
		</Modal>
	);
}

export default DeleteModal;