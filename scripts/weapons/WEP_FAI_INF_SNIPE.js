var Constructor = function () {
    this.getName = function () {
        return qsTr("Sniper Rifles");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_GUN_AA",80],
        ["FAI_GUN_ARTY",80],
        ["FAI_GUN_AT",80],
        ["FAI_INF_CONSCRIPT",95],
        ["FAI_INF_ELITE",75],
        ["FAI_INF_ENGINEER",95],
        ["FAI_INF_MANPAD",95],
        ["FAI_INF_MG",95],
        ["FAI_INF_RIFLE",85],
        ["FAI_INF_RPG",95],
        ["FAI_INF_SNIPER",95],
        ["FAI_TRANS_HORSE",85],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_INF_SNIPE.damageTable, "WEP_FAI_INF_SNIPE");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_INF_SNIPE = new Constructor();
