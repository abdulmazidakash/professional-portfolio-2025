import { Link } from "react-router";


const PersonalDashboard = () => {
	return (
		<div className="space-x-2">
			<Link to={'/add-project'} className="btn btn-accent">Add Project</Link>
			<Link to={'/all-project'} className="btn btn-accent">All Project</Link>
		</div>
	);
};

export default PersonalDashboard;