import Image from "next/image";

const myLoader = ({ src }) => {
    return `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${src}.svg`
}
const TeamLogo = ({ team }) => {

    return (
        <Image
            loader={myLoader}
            src={team.toString()}
            alt=""
            width={250}
            height={250}
        />
    )
}

export default TeamLogo