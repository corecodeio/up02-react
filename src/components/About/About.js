import { useParams, Link } from 'react-router-dom';

const About = (props) => {
  let { user } = useParams();
  let userParameter = null;
  if (user != null && typeof user != 'undefined') {
    userParameter = <h1>The user is: {user}</h1>;
  }

  return (
    <div>
      <h1>About</h1>
      {userParameter}
      <Link to="/">Dashboard</Link>
    </div>
  );
};

export default About;
