var Constructor = function () {
    this.getName = function () {
        return qsTr("H. Tank Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 25;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 15],
        ["FAI_TRUCK", 75],
        ["FAI_AMPHIBTRUCK", 75],

        ["FAI_IFV", 95],
        ["FAI_AMPHIBIFV", 95],
        ["FAI_HVYIFV", 85],

        ["FAI_FIELDAT", 50],
        ["FAI_FIELDARTY", 50],

        ["FAI_ARMORCAR", 75],
        ["FAI_RECON", 85],

        ["FAI_LAUNCHERASM", 80],
        ["FAI_LAUNCHERNUKE", 90],
        ["FAI_LAUNCHERRKT", 80],
        ["FAI_LAUNCHERSAM", 80],

        ["FAI_LIGHTTANK", 90],
        ["FAI_TANK", 75],
        ["FAI_HVYTANK", 55],
        ["FAI_HOVERTANK", 75],

        ["FAI_SPAA", 75],
        ["FAI_SPARTY", 85],

        ["FAI_FASTTRAIN", 65],
        ["FAI_HEAVYTRAIN", 65],
        ["FAI_ARMORTRAIN", 45],
        ["FAI_RAILWAYGUN", 75],

        ["FAI_HOVERCRAFT", 75],
        ["FAI_HVYHOVER", 55],
        ["FAI_TRANSHOVER", 65],
        ["FAI_EKRANOPLAN", 25],

        ["FAI_BARGE", 35],
        ["FAI_OGRE", 15]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_HEAVYTANKGUN.damageTable, "WEP_FAI_HEAVYTANKGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_HEAVYTANKGUN = new Constructor();
