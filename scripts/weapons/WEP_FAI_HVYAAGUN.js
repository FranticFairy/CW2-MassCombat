var Constructor = function () {
    this.getName = function () {
        return qsTr("Heavy AA");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_GUNSHIP", 105],
        ["FAI_HELIINF", 115],
        ["FAI_HELIVHC", 115],

        ["FAI_AEWC", 65],
        ["FAI_BOMBER", 65],
        ["FAI_FIGHTER", 95],
        ["FAI_SEAPLANE", 115],
        ["FAI_STEALTHBOMBER", 55],
        ["FAI_STEALTHFIGHTER", 55],
        ["FAI_TANKBUSTER", 105],
        ["FAI_TRANSPLANE", 85],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_HVYAAGUN.damageTable, "WEP_FAI_HVYAAGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_HVYAAGUN = new Constructor();
