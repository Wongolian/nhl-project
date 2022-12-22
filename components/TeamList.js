import TeamItem from "./TeamItem";
const TeamList = ({ teams }) => {
    return (
        <div>
            <h1>Teams</h1>
            {teams.teams.sort((a,b) => a.name.localeCompare(b.name)).map((team => (
                <TeamItem key={team.id} team={ team } />
            )))}
        </div>
    )
}

export default TeamList