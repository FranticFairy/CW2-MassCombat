var Constructor = function () {
    this.getName = function () {
        return qsTr("Anti-Aircraft Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_CASH_PLANE",65],
        ["FAI_CASH_SHIP",65],
        ["FAI_HELI_ATTACK",85],
        ["FAI_HELI_GUNSHIP",75],
        ["FAI_HELI_INF",95],
        ["FAI_HELI_SCOUT",95],
        ["FAI_HELI_VHC",95],
        ["FAI_PLANE_AEWC",65],
        ["FAI_PLANE_BOMBER",65],
        ["FAI_PLANE_FIGHTER",75],
        ["FAI_PLANE_FLYBOAT",70],
        ["FAI_PLANE_GLIDER",85],
        ["FAI_PLANE_NAVJET",80],
        ["FAI_PLANE_SEAPLANE",90],
        ["FAI_PLANE_STEALTHBOMBER",55],
        ["FAI_PLANE_STEALTHFIGHTER",65],
        ["FAI_PLANE_TANKBUSTER",80],
        ["FAI_PLANE_TRANS",65],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AAGUN.damageTable, "WEP_FAI_AAGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AAGUN = new Constructor();
