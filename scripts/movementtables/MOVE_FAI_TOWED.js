var Constructor = function () {
    this.getName = function () {
        return qsTr("Towed");
    };
    this.movementpointsTable = [
        ["BEACH", 1],
        ["BRIDGE", 1],
        ["DESERT", 1],
        ["DESERT_DESTROYEDWELD", 1],
        ["DESERT_FOREST", 1],
        ["DESERT_PATH", 1],
        ["DESERT_WASTELAND", 1],
        ["DESTROYEDWELD", 1],
        ["FARMLAND", 1],
        ["FOREST", 1],
        ["PLAINS", 1],
        ["ELEVATED", 2],
        ["MOUNTAIN",3],
        ["PLAINS_DESTROYED", 1],
        ["PLAINS_PLASMA", 1],
        ["RAILBRIDGE", 1],
        ["RAILCROSS", 1],
        ["RAILWAY", 1],
        ["RUIN", 1],
        ["SNOW", 2],
        ["SNOW_DESTROYEDWELD", 2],
        ["SNOW_FOREST", 2],
        ["SNOW_WASTELAND", 2],
        ["STREET", 1],
        ["TELEPORTTILE", 0],
        ["URBAN", 1],
        ["WASTELAND", 1],
        ["HQ", 1],
        ["STATION", 1],
        ["HARBOUR", 1],
        ["TEMPORARY_HARBOUR", 1],
        ["AIRPORT", 1],
        ["TEMPORARY_AIRPORT", 1],
        ["FACTORY", 1],
        ["LABOR", 1],
        ["PIPESTATION", 1],
        ["RADAR", 1],
        ["SILO", 1],
        ["SILO_ROCKET", 1],
        ["TOWER", 1],
        ["FORD", 1],
        ["TOWN", 1]
    ];

    this.getMovementpoints = function (terrain, unit, currentterrain) {
        var id = terrain.getID();
        if ((id === "ZGATE_E_W" || id === "ZGATE_N_S") &&
            (unit !== null) &&
            (unit.getOwner().isAlly(terrain.getBuilding().getOwner()))) {
            return 1;
        }
        var unitTerrain = currentterrain.getID();
        if ((id === "MOUNTAIN")) {
            if(unitTerrain === "MOUNTAIN") {
                return 1;
            }
        }
        if ((id === "ELEVATED")) {
            if(unitTerrain === "ELEVATED") {
                return 1;
            }
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_TOWED.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_TOWED = new Constructor();
