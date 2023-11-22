import playerData from "./playerData.json"

export const fetchTeams = () =>{
    return playerData.schools
}

export const fetchPlayers = (school_name) =>{
    if(school_name === "Alabama"){
        return playerData.alabama_gymnasts
    }else if(school_name === "Auburn"){
        return playerData.auburn_gymnasts
    }else if(school_name === "Florida"){   
        return playerData.florida_gymnasts
    }else if(school_name === "LSU"){
        return playerData.lsu_gymnasts
    }
}

export const fetchJudges = () =>{
    return playerData.judges
}

export const fetchVaults = () =>{
    return playerData.vaults
}
