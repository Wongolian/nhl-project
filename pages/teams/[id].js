import TeamLogo from "../../components/teams/TeamLogo";
import styles from "../../styles/Home.module.css"

const team = ({ team }) => {
    const teamID = team.teams[0].id

    return (
        <div className={styles.card}>
            <h1>{team.teams[0].name}</h1>
            <TeamLogo team={ teamID } />
        </div>
    )

}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${context.params.id}?expand=team.stats`)
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