var Constructor = function () {
    this.getName = function () {
        return qsTr("ATGM");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 15;
    };
    this.damageTable = [
        ["FAI_TRUCK", 20],
        ["FAI_AMPHIBTRUCK", 20],

        ["FAI_IFV", 75],
        ["FAI_AMPHIBIFV", 75],
        ["FAI_HVYIFV", 65],

        ["FAI_ARMORCAR", 75],
        ["FAI_RECON", 75],

        ["FAI_LAUNCHERASM", 65],
        ["FAI_LAUNCHERNUKE", 75],
        ["FAI_LAUNCHERRKT", 65],
        ["FAI_LAUNCHERSAM", 65],

        ["FAI_LIGHTTANK", 75],
        ["FAI_TANK", 65],
        ["FAI_HVYTANK", 45],
        ["FAI_HOVERTANK", 65],

        ["FAI_SPAA", 75],
        ["FAI_SPARTY", 65],

        ["FAI_FASTTRAIN", 40],
        ["FAI_HEAVYTRAIN", 40],
        ["FAI_ARMORTRAIN", 25],
        ["FAI_RAILWAYGUN", 45],

        ["FAI_HOVERCRAFT", 65],
        ["FAI_HVYHOVER", 25],
        ["FAI_TRANSHOVER", 55],
        ["FAI_EKRANOPLAN", 25],

        ["FAI_BARGE", 10],
        ["FAI_OGRE", 5]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ATGM.damageTable, "WEP_FAI_ATGM");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ATGM = new Constructor();
