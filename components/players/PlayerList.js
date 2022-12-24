import PlayerItem from "./PlayerItem"
import styles from '../../styles/Home.module.css'
import Link from "next/link";
import {Inter} from "@next/font/google";

const inter = Inter({ subsets: ['latin'] })

const PlayerList = ({ players }) => {

    return (
        <>
        <h2>Current Roster</h2>
        <div className={styles.gridTeamPlayers}>
            <div className="Players Table">
                <h3>Forwards</h3>
                <table className={styles.playerTable}>
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>#</th>
                        <th>Pos</th>
                        <th>Sh</th>
                        <th>Ht</th>
                        <th>Wt</th>
                        <th>Born</th>
                        <th>Birth place</th>
                    </tr>
                    </thead>
                    {players[0].filter(player => player.position.type === "Forward").map((player => (
                        <PlayerItem key={player.person.id} player={ player } />
                    )))}
                </table>
                <h3>Defensemen</h3>
                <table className={styles.playerTable}>
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>#</th>
                        <th>Pos</th>
                        <th>Sh</th>
                        <th>Ht</th>
                        <th>Wt</th>
                        <th>Born</th>
                        <th>Birth place</th>
                    </tr>
                    </thead>
                    {players[0].filter(player => player.position.type === "Defenseman").map((player => (
                        <PlayerItem key={player.person.id} player={ player } />
                    )))}
                </table>
                <h3>Goalies</h3>
                <table className={styles.playerTable}>
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>#</th>
                        <th>Ht</th>
                        <th>Wt</th>
                        <th>Born</th>
                        <th>Birth place</th>
                    </tr>
                    </thead>
                    {players[0].filter(player => player.position.type === "Goalie").map((player => (
                        <PlayerItem key={player.person.id} player={ player } />
                    )))}
                </table>
            </div>
        </div>
        <Link href="/teams" className={styles.card}>
            <h2 className={inter.className}>Go Back to Teams Section</h2>
        </Link>
        </>
    )
}

export default PlayerList