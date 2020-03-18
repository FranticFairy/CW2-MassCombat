var Constructor = function () {
    this.getName = function () {
        return qsTr("Heavy AA");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_CASH_PLANE",65],
        ["FAI_CASH_SHIP",65],
        ["FAI_HELI_ATTACK",105],
        ["FAI_HELI_GUNSHIP",95],
        ["FAI_HELI_INF",115],
        ["FAI_HELI_SCOUT",115],
        ["FAI_HELI_VHC",115],
        ["FAI_PLANE_AEWC",65],
        ["FAI_PLANE_BOMBER",65],
        ["FAI_PLANE_FIGHTER",95],
        ["FAI_PLANE_FLYBOAT",70],
        ["FAI_PLANE_GLIDER",105],
        ["FAI_PLANE_NAVJET",100],
        ["FAI_PLANE_SEAPLANE",110],
        ["FAI_PLANE_STEALTHBOMBER",55],
        ["FAI_PLANE_STEALTHFIGHTER",85],
        ["FAI_PLANE_TANKBUSTER",100],
        ["FAI_PLANE_TRANS",65],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_HVYAAGUN.damageTable, "WEP_FAI_HVYAAGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_HVYAAGUN = new Constructor();
