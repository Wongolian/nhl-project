import PlayerHeadshot from "../../components/players/PlayerHeadshot";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import {Inter} from "@next/font/google";

const inter = Inter({ subsets: ['latin'] })

const player = ({ player, playerStats}) => {

    console.log("---------PLAYER STATS----------")
    console.log(playerStats)
    console.log("---------PLAYER INFO----------")
    console.log(player)

    return (
        <>
        <div className={styles.centerPhoto}>
            <h2>{player.people[0].fullName}</h2>
            <PlayerHeadshot playerID={player.people[0].id} size={168}/>
        </div>
            <Link href="/teams/[id]" as={`/teams/${player.people[0].currentTeam.id}`} className={styles.card}>
                <h2 className={inter.className}>Go Back to Team Information</h2>
            </Link>
        </>
    )
}

export const getServerSideProps = async (context) => {


    const resStats = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${context.params.id}/
    stats?stats=statsSingleSeason`)
    const res = await fetch(`https://statsapi.web.nhl.com/api/v1/people/${context.params.id}`)
    const playerStats = await resStats.json()
    const player = await res.json()

    return {
        props:{
            player,
            playerStats
        }
    }
}

export default player