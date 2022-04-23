import { Link } from 'react-router-dom';
const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="about">About</Link>
      <br />
      <a href="./about">About 2</a>
    </div>
  );
};

export default Dashboard;
