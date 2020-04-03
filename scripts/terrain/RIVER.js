
RIVER.loadBaseSprite = function (terrain) {
    var surroundings = terrain.getSurroundings("RIVER,BRIDGE,RAILBRIDGE,SEA,FORD", false, false, GameEnums.Directions_All);
    var surroundingsDirect = terrain.getSurroundings("RIVER,RAILBRIDGE,BRIDGE,SEA,FORD", false, false, GameEnums.Directions_Direct);
    var surroundingsSea = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_All);
    //


    if (surroundings.includes("+NE")) {
        if (!(surroundingsDirect.includes("+N")) || !(surroundingsDirect.includes("+E"))) {
            surroundings = surroundings.replace("+NE", "");
        }
    }
    if (surroundings.includes("+SE")) {
        if (!(surroundingsDirect.includes("+S")) || !(surroundingsDirect.includes("+E"))) {
            surroundings = surroundings.replace("+SE", "");
        }
    }
    if (surroundings.includes("+SW")) {
        if (!(surroundingsDirect.includes("+S")) || !(surroundingsDirect.includes("+W"))) {
            surroundings = surroundings.replace("+SW", "");
        }
    }
    if (surroundings.includes("+NW")) {
        if (!(surroundingsDirect.includes("+N")) || !(surroundingsDirect.includes("+W"))) {
            surroundings = surroundings.replace("+NW", "");
        }
    }


    if (!(surroundingsSea.includes("+N"))) {
        var surroundingsN = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_North);
        if (surroundingsN === "+N") {
            surroundings = surroundings.replace("+N", "");
        }
    }

    if (!(surroundingsSea.includes("+S"))) {
        var surroundingsS = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_South);
        if (surroundingsS === "+S") {
            surroundings = surroundings.replace("+S", "");
        }
    }

    if ((surroundingsSea.includes("+E"))) {
        var surroundingsE = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_South);
        if (surroundingsE === "+E") {
            surroundings = surroundings.replace("+E", "");
        }
    }
    if ((surroundingsSea.includes("+W"))) {
        var surroundingsW = terrain.getSurroundings("SEA", true, false, GameEnums.Directions_South);
        if (surroundingsW === "+W") {
            surroundings = surroundings.replace("+W", "");
        }
    }
    terrain.loadBaseSprite("river" + surroundings);
};

RIVER.init = function (terrain)
{
    terrain.setVisionHigh(0);
};