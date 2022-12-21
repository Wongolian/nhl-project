import {getNHLRosterData} from "../services/nhlRosters";
import {useEffect, useState} from "react";

const GetNHLTeams = () => {

    const nhlRosters = getNHLRosterData();

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://statsapi.web.nhl.com/api/v1/teams/')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                // setLoading(false)
            })
    })

    // if (isLoading) return <p>Loading....</p>
    if (!data) return <p>No NHL Roster data</p>



    return (
        <>
            <h2>
                All Teams
            </h2>
            <table>
                <tr>
                    <th>Team Name</th>
                    <th>Abbreviation</th>
                    <th>Division</th>
                    <th>Conference</th>
                </tr>
                {data.teams.sort((a,b) => a.name.localeCompare(b.name)).map((team => (
                    <tr key={team.id}>
                        <td>{team.name}</td>
                        <td>{team.abbreviation}</td>
                        <td>{team.division.name}</td>
                        <td>{team.conference.name}</td>
                    </tr>)))}
            </table>
        </>
    )
};

export default GetNHLTeams;