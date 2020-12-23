import { Player } from '../../models/player';
import { useGetPlayers } from '../../services/player';
import { withAuthComponent } from '../../auth/withAuthComponent';
import { withAuthServerSideProps } from '../../auth/withAuthServerSideProps';
interface IPlayerResponse {
  data: Player[],
  isLoading: boolean,
  error: string
}

function Players({ user }) {
  const { data: players, isLoading, error }: IPlayerResponse = useGetPlayers();
  console.log('players: ', players);
  console.log('isLoading: ', isLoading);
  console.log('error: ', error);
  console.log('user: ', user);

  return <>
    <ul>
      {players && players.map(player => (
        <li key={`player-${player.id}`}>{player.firstname} {player.lastname} - {player.email}</li>
      ))}
    </ul>
  </>;
}


export default withAuthComponent(Players)
export const getServerSideProps = withAuthServerSideProps();