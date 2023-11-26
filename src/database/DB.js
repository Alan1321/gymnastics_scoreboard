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

export function getGymnastDetails(gymnastName) {
    const teamData = playerData
    // Iterate through each team
    for (const team of Object.keys(teamData)) {
      // Check if the team has gymnasts
      if (team.endsWith("_gymnasts")) {
        // Find the gymnast by name in the team
        const gymnast = teamData[team].find((g) => g.name === gymnastName);
  
        // If the gymnast is found, return their details
        if (gymnast) {
          const { class: gymnastClass, major, gpa, average_score } = gymnast;
          return { class: gymnastClass, major, gpa, average_score };
        }
      }
    }
  
    // Return null if the gymnast is not found
    return null;
}
