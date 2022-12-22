import TeamItem from "../../components/TeamItem";

const team = ({ team }) => {
    console.log(team)
    return (
        <>
            <h1>This is a Teams Dedicated Page</h1>
            <h3>{team.copyright}</h3>
        </>
    )

}

export const getStaticProps = async (context) => {
    const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams/${context.params.id}`)
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