import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import TeamLogo from "./TeamLogo";
const TeamItem = ({ team }) => {

    const teamID = team.id

    return (
        <Link href="/teams/[id]" as={`/teams/${team.id}`} className={styles.card}>
            <div className={styles.card}>
                <h1>{team.name}</h1>
                <p>{team.division.name}</p>
                <TeamLogo team={teamID} />
            </div>
        </Link>
    )
}

export default TeamItem