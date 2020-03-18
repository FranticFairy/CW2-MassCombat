var Constructor = function () {
    this.getName = function () {
        return qsTr("Air-to-Air Missile");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_CASH_PLANE", 75],
        ["FAI_CASH_SHIP", 75],
        ["FAI_HELI_ATTACK", 115],
        ["FAI_HELI_GUNSHIP", 105],
        ["FAI_HELI_INF", 125],
        ["FAI_HELI_SCOUT", 125],
        ["FAI_HELI_VHC", 125],
        ["FAI_PLANE_AEWC", 75],
        ["FAI_PLANE_BOMBER", 75],
        ["FAI_PLANE_FIGHTER", 65],
        ["FAI_PLANE_FLYBOAT", 80],
        ["FAI_PLANE_GLIDER", 75],
        ["FAI_PLANE_NAVJET", 70],
        ["FAI_PLANE_SEAPLANE", 80],
        ["FAI_PLANE_STEALTHBOMBER", 65],
        ["FAI_PLANE_STEALTHFIGHTER", 55],
        ["FAI_PLANE_TANKBUSTER", 70],
        ["FAI_PLANE_TRANS", 75],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AIM.damageTable, "WEP_FAI_AIM");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AIM = new Constructor();
