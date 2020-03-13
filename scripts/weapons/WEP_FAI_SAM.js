var Constructor = function () {
    this.getName = function () {
        return qsTr("Surface-to-Air Missile");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_GUNSHIP", 105],
        ["FAI_HELIINF", 115],
        ["FAI_HELIVHC", 115],

        ["FAI_AEWC", 85],
        ["FAI_BOMBER", 85],
        ["FAI_FIGHTER", 95],
        ["FAI_SEAPLANE", 105],
        ["FAI_STEALTHBOMBER", 75],
        ["FAI_STEALTHFIGHTER", 75],
        ["FAI_TANKBUSTER", 105],
        ["FAI_TRANSPLANE", 115],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_SAM.damageTable, "WEP_FAI_SAM");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_SAM = new Constructor();
