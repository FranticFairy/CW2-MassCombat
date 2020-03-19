var Constructor = function () {
    this.getName = function () {
        return qsTr("Hovercraft");
    };
    this.movementpointsTable = [
        ["BEACH", 1],
        ["BRIDGE", 1],
        ["DESERT", 1],
        ["DESERT_DESTROYEDWELD", 1],
        ["DESERT_PATH", 1],
        ["DESERT_TRY_RIVER", 1],
        ["DESTROYEDWELD", 1],
        ["FARMLAND", 2],
        ["FOG", 1],
        ["MARSH", 2],
        ["PLAINS", 1],
        ["PLAINS_DESTROYED", 2],
        ["PLAINS_PLASMA", 1],
        ["RAILBRIDGE", 2],
        ["RAILCROSS", 1],
        ["RAILWAY", 2],
        ["REAF", 2],
        ["RIVER", 1],
        ["ROUGH_SEA", 2],
        ["RUIN", 1],
        ["SEA", 1],
        ["SNOW", 2],
        ["SNOW_DESTROYEDWELD", 2],
        ["STREET", 1],
        ["TELEPORTTILE", 0],
        ["URBAN", 2],
        ["HQ", 2],
        ["STATION", 2],
        ["HARBOUR", 1],
        ["TEMPORARY_HARBOUR", 1],
        ["AIRPORT", 2],
        ["TEMPORARY_AIRPORT", 2],
        ["FACTORY", 2],
        ["LABOR", 2],
        ["OILRIG", 2],
        ["PIPESTATION", 2],
        ["RADAR", 2],
        ["SILO", 2],
        ["SILO_ROCKET", 2],
        ["TOWER", 2],
        ["TOWN", 2]
    ];

    this.getMovementpoints = function (terrain, unit) {
        var id = terrain.getID();
        if ((id === "ZGATE_E_W" || id === "ZGATE_N_S") &&
            (unit !== null) &&
            (unit.getOwner().isAlly(terrain.getBuilding().getOwner()))) {
            return 1;
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_HOVER.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_HOVER = new Constructor();
