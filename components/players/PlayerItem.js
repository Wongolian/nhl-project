import Link from 'next/Link'
import PlayerHeadshot from "./PlayerHeadshot";

const PlayerItem = ({ player }) => {

    return (
        <div>
        <Link href="/players/[id]" as={`/players/${player.person.id}`}>
            <table>
                <tbody>
                    <tr>
                        <td><PlayerHeadshot playerID={player.person.id} size={50} /> {player.person.fullName}</td>
                        <td>{player.jerseyNumber}</td>
                        <td>SHOOTS</td>
                        <td>HEIGHT</td>
                        <td>WEIGHT</td>
                        <td>BORN</td>
                        <td>BIRTHPLACE</td>
                    </tr>
                </tbody>
            </table>
    </Link>
        </div>
    )
}

export default PlayerItem