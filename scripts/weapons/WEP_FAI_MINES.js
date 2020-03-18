var Constructor = function () {
    this.getName = function () {
        return qsTr("Mines");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_MINES.damageTable, "WEP_FAI_MINES");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_MINES = new Constructor();
