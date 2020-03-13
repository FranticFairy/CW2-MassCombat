var Constructor = function () {
    this.getName = function () {
        return qsTr("Anti-Aircraft Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_GUNSHIP", 85],
        ["FAI_HELIINF", 95],
        ["FAI_HELIVHC", 95],

        ["FAI_AEWC", 65],
        ["FAI_BOMBER", 65],
        ["FAI_FIGHTER", 75],
        ["FAI_SEAPLANE", 85],
        ["FAI_STEALTHBOMBER", 55],
        ["FAI_STEALTHFIGHTER", 55],
        ["FAI_TANKBUSTER", 75],
        ["FAI_TRANSPLANE", 65],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AAGUN.damageTable, "WEP_FAI_AAGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AAGUN = new Constructor();
