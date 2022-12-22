import TeamItem from "./TeamItem";
import styles from '../../styles/Home.module.css'
const TeamList = ({ teams }) => {
    return (
        <div className={styles.grid}>
            {teams.teams.sort((a,b) => a.name.localeCompare(b.name)).map((team => (
                <TeamItem key={team.id} team={ team } />
            )))}
        </div>
    )
}

export default TeamList