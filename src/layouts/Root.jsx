
import { Outlet } from 'react-router';

const Root = () => {
	return (
		<div>
			<h1>root</h1>
			<Outlet/>
		</div>
	);
};

export default Root;