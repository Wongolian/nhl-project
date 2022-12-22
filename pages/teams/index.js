import TeamList from '../../components/TeamList'

export default function Home({ teams }) {
    return (
        <>
            <TeamList teams={teams} />
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://statsapi.web.nhl.com/api/v1/teams/')
    const teams = await res.json()

    return {
        props: {
            teams
        }
    }
}