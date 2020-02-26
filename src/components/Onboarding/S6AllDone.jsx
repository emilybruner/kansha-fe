import React, { useHistory, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useDispatch } from 'react-redux';

//get from /profile endpoint and set that to redux state

function S6AllDone({ user }) {
	const dispatch = useDispatch();

	// const [profile, setProfile] = useState({
	// 	first_name: '',
	// 	last_name: '',
	// 	org_name: '',
	// 	org_id: '',
	// 	job_title: '',
	// 	user_type: '',
	// 	department: '',
	// });

	axiosWithAuth()
		.get(`/profile/${user.id}`)
		.then(res => {
			//dispatch in here?
			dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
		})
		.catch(err => console.log(err));

	let history = useHistory();

	const handlePrevious = () => {
		history.push('/onboarding/step-5');
	};
	const handleClick = () => {
		history.push(`/profile/${user.id}`);
	};

	return (
		<div>
			<h1>All done!</h1>
			<h5>
				To make the most of your experience we recommend taking a quick
				tour of your dashboard and finish organizing your teams.
			</h5>

			<div className="button-container">
				<button onClick={handleClick}>Take the tour</button>
				<button onClick={handleClick}>Let me explore</button>
			</div>
			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<div onClick={handlePrevious}>
						<p>Previous step</p>
					</div>
				</span>
			</div>
		</div>
	);
}

export default S6AllDone;