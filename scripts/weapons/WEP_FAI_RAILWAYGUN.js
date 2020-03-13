var Constructor = function () {
    this.getName = function () {
        return qsTr("Railway Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 55;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 95],
        ["FAI_TRUCK", 75],
        ["FAI_AMPHIBTRUCK", 75],

        ["FAI_IFV", 65],
        ["FAI_AMPHIBIFV", 65],
        ["FAI_HVYIFV", 55],

        ["FAI_FIELDAT", 65],
        ["FAI_FIELDARTY", 65],

        ["FAI_ARMORCAR", 45],
        ["FAI_RECON", 65],

        ["FAI_LAUNCHERASM", 75],
        ["FAI_LAUNCHERNUKE", 85],
        ["FAI_LAUNCHERRKT", 75],
        ["FAI_LAUNCHERSAM", 75],

        ["FAI_LIGHTTANK", 65],
        ["FAI_TANK", 45],
        ["FAI_HVYTANK", 35],
        ["FAI_HOVERTANK", 45],

        ["FAI_SPAA", 55],
        ["FAI_SPARTY", 55],

        ["FAI_FASTTRAIN", 45],
        ["FAI_HEAVYTRAIN", 45],
        ["FAI_ARMORTRAIN", 45],
        ["FAI_RAILWAYGUN", 55],

        ["FAI_HOVERCRAFT", 45],
        ["FAI_HVYHOVER", 35],
        ["FAI_TRANSHOVER", 65],
        ["FAI_EKRANOPLAN", 65],

        ["FAI_BARGE", 75],

        ["FAI_BATTLESHIP", 25],
        ["FAI_CARRIER", 25],
        ["FAI_CRUISER", 55],
        ["FAI_DESTROYER", 70],
        ["FAI_COASTPATROL", 85],
        ["FAI_SUBMARINE", 35],
        ["FAI_TRANSSHIP", 85],
        ["FAI_OGRE", 15]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_RAILWAYGUN.damageTable, "WEP_FAI_RAILWAYGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_RAILWAYGUN = new Constructor();
