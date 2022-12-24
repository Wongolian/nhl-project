import Image from 'next/image';

const myLoader = ({src}) => {
    //TODO if player doesn't have a headshot return this image
    // https://cms.nhl.bamgrid.com/images/headshots/current/168x168/skater.jpg

    return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${src}.jpg`
}

const PlayerHeadshot = ({ playerID, size}) => {

    return (
        <Image
            loader={myLoader}
            src={playerID.toString()}
            alt="This is a headshot"
            width={size}
            height={size}
            />
    )
}

export default PlayerHeadshot