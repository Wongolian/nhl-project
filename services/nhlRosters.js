export async function getNHLRosterData() {
    const res = await fetch('https://statsapi.web.nhl.com/api/v1/teams/')
    const nhlRosters = await res.json();

    return {
        props: {
            nhlRosters,
        }
    }
}

export async function getNHLTeamInfo(id) {
    const res = await fetch ('https://statsapi.web.nhl.com/api/v1/teams/' + id)
    return await res.json();
}