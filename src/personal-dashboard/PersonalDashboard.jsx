import { Link } from "react-router";


const PersonalDashboard = () => {
	return (
		<div>
			<Link to={'/add-project'} className="btn btn-accent">Add Project</Link>
		</div>
	);
};

export default PersonalDashboard;