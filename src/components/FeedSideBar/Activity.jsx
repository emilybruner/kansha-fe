import React from 'react';
import { RecognitionCard } from '../Profile/RecognitionCard';
function Activity({
	profileBadges,
	setProfileInfo,
	profileId,
	comments,
	profile,
	profileInfo,
	handleCommentClick,
	handleNewProfileClick,
	sent,
	isLoading,
}) {
	return (
		<div className="profile-activity">
			<h2>Activity</h2>
			<section className="inner-activity-card">
				{profileInfo.rec &&
					profileInfo.rec
						.sort(function(a, b) {
							return new Date(b.date) - new Date(a.date);
						})
						.map(recognition => (
							<div className="container-card-and-buttons">
								<RecognitionCard
									key={recognition.id}
									sent={sent}
									profileBadges={profileBadges}
									recognition={recognition}
									setProfileInfo={setProfileInfo}
									profileId={profileId}
									comments={comments}
									profile={profile}
									handleCommentClick={handleCommentClick}
									isLoading={isLoading}
									// handleNewProfileClick={
									// 	handleNewProfileClick
									// }
								/>
							</div>
						))}
			</section>
		</div>
	);
}

export default Activity;