import styles from '../../styles/Home.module.css'

const PlayerItem = ({ player }) => {

    return (
        <div className={styles.card}>
            <span>{player.jerseyNumber} - {player.person.fullName}</span>
        </div>
    )
}

export default PlayerItem