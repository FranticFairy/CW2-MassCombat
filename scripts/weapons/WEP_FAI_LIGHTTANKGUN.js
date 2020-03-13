var Constructor = function () {
    this.getName = function () {
        return qsTr("L. Tank Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 15;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 15],
        ["FAI_TRUCK", 55],
        ["FAI_AMPHIBTRUCK", 55],

        ["FAI_IFV", 75],
        ["FAI_AMPHIBIFV", 75],
        ["FAI_HVYIFV", 55],

        ["FAI_FIELDAT", 50],
        ["FAI_FIELDARTY", 50],

        ["FAI_ARMORCAR", 55],
        ["FAI_RECON", 65],

        ["FAI_LAUNCHERASM", 55],
        ["FAI_LAUNCHERNUKE", 60],
        ["FAI_LAUNCHERRKT", 55],
        ["FAI_LAUNCHERSAM", 55],

        ["FAI_LIGHTTANK", 55],
        ["FAI_TANK", 35],
        ["FAI_HVYTANK", 15],
        ["FAI_HOVERTANK", 35],

        ["FAI_SPAA", 55],
        ["FAI_SPARTY", 65],

        ["FAI_FASTTRAIN", 40],
        ["FAI_HEAVYTRAIN", 40],
        ["FAI_ARMORTRAIN", 25],
        ["FAI_RAILWAYGUN", 45],

        ["FAI_HOVERCRAFT", 35],
        ["FAI_HVYHOVER", 15],
        ["FAI_TRANSHOVER", 20],

        ["FAI_BARGE", 15],
        ["FAI_OGRE", 2]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_LIGHTTANKGUN.damageTable, "WEP_FAI_LIGHTTANKGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_LIGHTTANKGUN = new Constructor();
