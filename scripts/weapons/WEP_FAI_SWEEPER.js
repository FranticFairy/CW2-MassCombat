var Constructor = function () {
    this.getName = function () {
        return qsTr("Minesweeper");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_OTH_LANDMINE",150],
        ["FAI_OTH_SEAMINE",150],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_SWEEPER.damageTable, "WEP_FAI_SWEEPER");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_SWEEPER = new Constructor();
