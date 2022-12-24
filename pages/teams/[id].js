import TeamLogo from "../../components/teams/TeamLogo";
import styles from "../../styles/Home.module.css"
import PlayerList from "../../components/players/PlayerList";

const team = ({ team }) => {
    const teamID = team.teams[0].id
    const teamInfo = [team.teams[0]]
    const teamStats = [team.teams[0].teamStats[0].splits[0]]
    const players = [team.teams[0].roster.roster]

    console.log(teamStats)

    return (
        <>
        <div className={styles.something}>
            <span>
                <h1>{teamInfo[0].name}</h1>
                Games Played: {teamStats[0].stat.gamesPlayed} &nbsp;
                Wins: {teamStats[0].stat.wins} &nbsp;
                Losses: {teamStats[0].stat.losses} &nbsp;
                OTL: {teamStats[0].stat.ot} &nbsp;
                Points: {teamStats[0].stat.pts}
            </span>
            <TeamLogo team={ teamID } />

        </div>
            <PlayerList players={ players } />
        </>
    )

}

// Calls the NHL API for the specific team getting the teams stats and roster.
export const getStaticProps = async (context) => {
    const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${context.params.id}
    ?expand=team.stats&expand=team.roster`)
    const team = await res.json()

    return {
        props: {
            team,
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch ('https://statsapi.web.nhl.com/api/v1/teams/')
    const teams = await res.json()

    const ids = teams.teams.map((team) => team.id)
    const paths = ids.map((id) => ({ params: { id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default team