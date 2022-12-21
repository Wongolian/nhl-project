import {getNHLRosterData} from "../services/nhlRosters";
import {useEffect, useState} from "react";

const GetNHLTeams = () => {

    // const nhlRosters = getNHLRosterData();

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://statsapi.web.nhl.com/api/v1/teams/')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    })

    // if (isLoading) return <p>Loading....</p>
    if (!data) return <p>No NHL Roster data</p>


    // TODO Sort the NHL Teams
    //  const sortedTeams = [data.teams];
    //  function sortNHLTeams (
    //      sortedTeams.sort((a, b) => a - b)
    // )

    return (
        <>
            <h2>
                All Teams
            </h2>
            <ul>
                {data.teams.sort((a,b) => a.name.localeCompare(b.name)).map((team => (
                    <li key={team.id}>
                        {team.name}
                    </li>
                )))}
            </ul>

        </>
    )
};

export default GetNHLTeams;