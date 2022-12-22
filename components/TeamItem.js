import Link from 'next/link'
import styles from '../styles/Home.module.css'
const TeamItem = ({ team }) => {
    return (
        <Link href="/teams/[id]" as={`/teams/${team.id}`} className={styles.card}>
            <h2>{team.name}</h2>
            <p>{team.division.name}</p>
        </Link>
    )
}

export default TeamItem