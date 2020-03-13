var Constructor = function () {
    this.getName = function () {
        return qsTr("Artillery Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 35;
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

        ["FAI_HOVERCRAFT", 5],
        ["FAI_TRANSHOVER", 10],

        ["FAI_BARGE", 25],
        
        ["FAI_CRUISER", 5],
        ["FAI_DESTROYER", 10],
        ["FAI_COASTPATROL", 25],
        ["FAI_TRANSSHIP", 20],
        ["FAI_OGRE", 10]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ARTILLERY.damageTable, "WEP_FAI_ARTILLERY");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ARTILLERY = new Constructor();
