var Constructor = function () {
    this.getName = function () {
        return qsTr("Seamines");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_SEAMINES.damageTable, "WEP_FAI_SEAMINES");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_SEAMINES = new Constructor();
