var Constructor = function () {
    this.getName = function () {
        return qsTr("Screws");
    };
    this.movementpointsTable = [
        ["BEACH", 1],
        ["BRIDGE", 2],
        ["DESERT", 1],
        ["DESERT_DESTROYEDWELD", 2],
        ["DESERT_FOREST", 1],
        ["DESERT_PATH", 2],
        ["DESERT_TRY_RIVER", 2],
        ["DESERT_WASTELAND", 3],
        ["DESTROYEDWELD", 2],
        ["FARMLAND", 1],
        ["FOREST", 1],
        ["MARSH", 1],
        ["PLAINS", 2],
        ["PLAINS_DESTROYED", 2],
        ["PLAINS_PLASMA", 2],
        ["RAILBRIDGE", 3],
        ["RAILCROSS", 3],
        ["RAILWAY", 3],
        ["RIVER", 2],
        ["RUIN", 2],
        ["SNOW", 3],
        ["SNOW_DESTROYEDWELD", 3],
        ["SNOW_FOREST", 2],
        ["SNOW_WASTELAND", 4],
        ["STREET", 2],
        ["TELEPORTTILE", 0],
        ["URBAN", 2],
        ["WASTELAND", 3],
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
        ["TOWN", 1]
    ];

    this.getMovementpoints = function (terrain, unit) {
        var id = terrain.getID();
        if ((id === "ZGATE_E_W" || id === "ZGATE_N_S") &&
            (unit !== null) &&
            (unit.getOwner().isAlly(terrain.getBuilding().getOwner()))) {
            return 1;
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_SCREW.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_SCREW = new Constructor();
