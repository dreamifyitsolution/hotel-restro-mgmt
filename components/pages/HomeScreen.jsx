import React from 'react';
import Overview from '../common/Overview';
import PageHeader from '../common/PageHeader';
import RecentActivity from '../global/RecentActivity';

const HomeScreen = () => {
	return (
		<div>
			<PageHeader />
			<div class='mt-8'>
				<Overview />
				<RecentActivity />
			</div>
		</div>
	);
};

export default HomeScreen;
