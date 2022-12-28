import PlayerHeadshot from "./PlayerHeadshot";
import Link from 'next/link';

const PlayerItem = ({ player }) => {

    console.log(player)

    return (
        <>
            <tr>
                <td>
                    <Link href="/players/[id]" as={`/players/${player.person.id}`}>
                    <PlayerHeadshot playerID={player.person.id} size={50} />
                        {player.person.fullName}
                    </Link>
                </td>
                <td>{player.jerseyNumber}</td>
                <td>{player.position.name}</td>
                <td>SHOOTS</td>
                <td>HEIGHT</td>
                <td>WEIGHT</td>
                <td>BORN</td>
                <td>BIRTHPLACE</td>
            </tr>
        </>
    )
}

export default PlayerItem