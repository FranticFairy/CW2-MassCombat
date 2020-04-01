var Constructor = function () {
    this.getName = function () {
        return qsTr("Air");
    };
    this.movementpointsTable = [
        ["BEACH", 1],
        ["BRIDGE", 1],
        ["DESERT", 1],
        ["DESERT_DESTROYEDWELD", 1],
        ["DESERT_FOREST", 1],
        ["DESERT_PATH", 1],
        ["DESERT_PIPELINE", 1],
        ["DESERT_ROCK", 1],
        ["DESERT_TRY_RIVER", 1],
        ["DESERT_WASTELAND", 1],
        ["DESERT_WELD", 1],
        ["DESTROYEDWELD", 1],
        ["FARMLAND", 1],
        ["FIRE", 1],
        ["FOG", 1],
        ["FOREST", 1],
        ["MARSH", 1],
        ["METEOR", 1],
        ["MOUNTAIN", 1],
        ["PIPELINE", 1],
        ["PLAINS", 1],
        ["PLAINS_DESTROYED", 1],
        ["PLAINS_PLASMA", 1],
        ["RAILBRIDGE", 1],
        ["RAILCROSS", 1],
        ["RAILWAY", 1],
        ["REAF", 1],
        ["RIVER", 1],
        ["ROUGH_SEA", 1],
        ["RUIN", 1],
        ["SEA", 1],
        ["SKY", 1],
        ["SNOW", 1],
        ["SNOW_DESTROYEDWELD", 1],
        ["SNOW_FOREST", 1],
        ["SNOW_MOUNTAIN", 1],
        ["SNOW_PIPELINE", 1],
        ["SNOW_WASTELAND", 1],
        ["SNOW_WELD", 1],
        ["STREET", 1],
        ["TELEPORTTILE", 0],
        ["URBAN", 1],
        ["WALL", 1],
        ["WASTELAND", 1],
        ["WEAK_WALL", 1],
        ["WELD", 1],
        ["HQ", 1],
        ["STATION", 1],
        ["HARBOUR", 1],
        ["TEMPORARY_HARBOUR", 1],
        ["AIRPORT", 1],
        ["TEMPORARY_AIRPORT", 1],
        ["FACTORsY", 1],
        ["LABOR", 1],
        ["MINE", 1],
        ["OILRIG", 1],
        ["PIPESTATION", 1],
        ["RADAR", 1],
        ["SILO", 1],
        ["SILO_ROCKET", 1],
        ["TOWER", 1],
        ["TOWN", 1]
    ];

    this.getMovementpoints = function (terrain, unit) {
        var id = terrain.getID();
        if ((id === "ZGATE_E_W" || id === "ZGATE_N_S") &&
            (unit !== null) &&
            (unit.getOwner().isAlly(terrain.getBuilding().getOwner()))) {
            return 1;
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_AIR.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_AIR = new Constructor();
