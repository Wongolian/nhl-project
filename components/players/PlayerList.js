import PlayerItem from "./PlayerItem"
import styles from '../../styles/Home.module.css'

const PlayerList = ({ players }) => {

    return (
        <>
        <h2>Current Roster</h2>
        <div className={styles.grid}>
            {players[0].map((player => (
                <PlayerItem key={player.person.id} player={ player } />
            )))}
        </div>
        </>
    )
}

export default PlayerList