const team = ({ team }) => {
    console.log(team)
    return (
        <div>
            <h1>{team.teams[0].name}</h1>
            <h1>{team.teams[0].division.name}</h1>
        </div>
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