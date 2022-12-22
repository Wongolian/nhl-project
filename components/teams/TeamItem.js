import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import TeamLogo from "./TeamLogo";
const TeamItem = ({ team }) => {

    const teamID = team.id

    return (
        <Link href="/teams/[id]" as={`/teams/${team.id}`} className={styles.cardTeams}>
            <div>
                <h2>{team.name}</h2>
                <h3>{team.division.name}</h3>
                <TeamLogo team={teamID} />
            </div>
        </Link>
    )
}

export default TeamItem