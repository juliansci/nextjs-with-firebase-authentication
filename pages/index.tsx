import { withAuthComponent } from '../auth/withAuthComponent';
import { withAuthServerSideProps } from '../auth/withAuthServerSideProps';

function Main({ user }) {
  const data = [];
  return <>
    <div><p>You're signed in. Email: {user.email}</p></div>
    <h2>Players</h2>
    <ul>
      {data && data.map(player => (
        <li key={`player-${player.id}`}>{player.firstname} {player.lastname} - {player.email}</li>
      ))}
    </ul>
  </>;
}

export default withAuthComponent(Main)
export const getServerSideProps = withAuthServerSideProps();