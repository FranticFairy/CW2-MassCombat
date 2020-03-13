var Constructor = function () {
    this.getName = function () {
        return qsTr("Rails");
    };
    this.movementpointsTable = [
        ["RAILBRIDGE", 1],
        ["RAILCROSS", 1],
        ["RAILWAY", 1],
        ["STATION", 1],
        ["TELEPORTTILE", 0]
    ];

    this.getMovementpoints = function (terrain, unit) {
        var id = terrain.getID();
        if ((id === "ZGATE_E_W" || id === "ZGATE_N_S") &&
            (unit !== null) &&
            (unit.getOwner().isAlly(terrain.getBuilding().getOwner()))) {
            return 1;
        }
        return MOVEMENTTABLE.getMovementpointsFromTable(terrain, MOVE_FAI_RAIL.movementpointsTable);
    };
};
Constructor.prototype = MOVEMENTTABLE;
var MOVE_FAI_RAIL = new Constructor();
