var Constructor = function () {
    this.getName = function () {
        return qsTr("Wheels");
    };
    this.movementpointsTable = [
        ["BEACH", 1],
        ["BRIDGE", 1],
        ["DESERT", 1],
        ["DESERT_DESTROYEDWELD", 1],
        ["DESERT_FOREST", 3],
        ["DESERT_PATH", 1],
        ["DESERT_WASTELAND", 3],
        ["DESTROYEDWELD", 1],
        ["FARMLAND", 2],
        ["FOREST", 3],
        ["PLAINS", 2],
        ["PLAINS_DESTROYED", 1],
        ["PLAINS_PLASMA", 2],
        ["RAILBRIDGE", 2],
        ["RAILCROSS", 1],
        ["RAILWAY", 2],
        ["RUIN", 1],
        ["SNOW", 3],
        ["SNOW_DESTROYEDWELD", 2],
        ["SNOW_FOREST", 4],
        ["SNOW_WASTELAND", 4],
        ["STREET", 1],
        ["TELEPORTTILE", 0],
        ["URBAN", 1],
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
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_WHEEL.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_WHEEL = new Constructor();
