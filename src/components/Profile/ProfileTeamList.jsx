import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
//component should render list of employees from one team
import Member from '../AdminTeams/Member';
import Dropdown from '../Onboarding/DropDown';

// Icon Imports
import { ReactComponent as EmptyTeams } from '../../assets/emptyTeams.svg';

// Modal imports

function ProfileTeamList({ profile, myProfile }) {
	const [modal, setModal] = useState(false);
	const [teamDetails, setTeamDetails] = useState();
	const [loadingState, setLoadingState] = useState();

	const history = useHistory();

	const teamList = profile.teams;

	let placeholderId = teamList && teamList[0].team_id;
	const stringPh = JSON.stringify(placeholderId);

	const [selectedTeam, setSelectedTeam] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const teamData = await axiosWithAuth().get(
				`/teams/${selectedTeam}`,
			);
			setTeamDetails(teamData);
		};
		fetchData();
	}, [selectedTeam]);

	const handleName = id => {
		setSelectedTeam(id);
	};

	let placeholderTeam = teamList && teamList[0].name;

	const handleBack = e => {
		e.preventDefault();
		history.push('/organization');
	};

	if (loadingState === true) {
		return <div>'Loading...'</div>;
	} else {
		return (
			<section className="teams-dashboard">
				{/* <div className="header">
					<div className="teams-name-button">
						<h1>{teamDetails.name}</h1>
						<button onClick={handleBack}>All Teams</button>
					</div>
					<h2>Members</h2>
				</div> */}

				<div className="dropdown-time-div">
					<Dropdown
						classNombre="custom-select dashboard"
						setSelection={handleName}
						// placeholder={placeholderTeam}
						// defaultValue={placeholderId}
					>
						{teamList?.map(team => {
							return (
								<option value={team.team_id}>
									{team.name}
								</option>
							);
						})}
					</Dropdown>
				</div>
				<div className="employee-filter-container">
					<h3>Filter:</h3>
					<button className="btn-filter">Members</button>
					<div className="employee-search-container">
						<input
							// value={filter}
							// onChange={event => setFilter(event.target.value)}
							type="text"
							id="search"
							name="search"
							placeholder="Search"
						/>
					</div>
				</div>
				{teamList?.length > 0 ? (
					<table className="team-member-table">
						<tbody>
							{teamDetails?.data.team_members.map(member => {
								return (
									<Member
										key={member.id}
										member={member}
										modal={modal}
										setModal={setModal}
										profile={member}
										teamDetails={teamDetails}
										setTeamDetails={setTeamDetails}
										myProfile={myProfile}
									/>
								);
							})}
						</tbody>
					</table>
				) : (
					<div className="empty-team-container">
						<EmptyTeams />
						<h1>No Teams to display yet!</h1>
					</div>
				)}
			</section>
		);
	}
}

export default ProfileTeamList;
