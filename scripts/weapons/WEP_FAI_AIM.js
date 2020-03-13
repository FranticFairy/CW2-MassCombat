var Constructor = function () {
    this.getName = function () {
        return qsTr("Air-to-Air Missile");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_GUNSHIP", 115],
        ["FAI_HELIINF", 125],
        ["FAI_HELIVHC", 125],

        ["FAI_AEWC", 75],
        ["FAI_BOMBER", 75],
        ["FAI_FIGHTER", 65],
        ["FAI_SEAPLANE", 115],
        ["FAI_STEALTHBOMBER", 65],
        ["FAI_STEALTHFIGHTER", 55],
        ["FAI_TANKBUSTER", 85],
        ["FAI_TRANSPLANE", 105],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AIM.damageTable, "WEP_FAI_AIM");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AIM = new Constructor();
