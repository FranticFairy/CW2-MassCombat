var Constructor = function () {
    this.getName = function () {
        return qsTr("Rocket Battery");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 40;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 105],
        ["FAI_TRUCK", 85],
        ["FAI_AMPHIBTRUCK", 85],

        ["FAI_IFV", 75],
        ["FAI_AMPHIBIFV", 75],
        ["FAI_HVYIFV", 65],

        ["FAI_FIELDAT", 75],
        ["FAI_FIELDARTY", 75],

        ["FAI_ARMORCAR", 45],
        ["FAI_RECON", 75],

        ["FAI_LAUNCHERASM", 80],
        ["FAI_LAUNCHERNUKE", 90],
        ["FAI_LAUNCHERRKT", 80],
        ["FAI_LAUNCHERSAM", 80],

        ["FAI_LIGHTTANK", 65],
        ["FAI_TANK", 45],
        ["FAI_HVYTANK", 35],
        ["FAI_HOVERTANK", 45],

        ["FAI_SPAA", 55],
        ["FAI_SPARTY", 55],

        ["FAI_FASTTRAIN", 55],
        ["FAI_HEAVYTRAIN", 55],
        ["FAI_ARMORTRAIN", 55],
        ["FAI_RAILWAYGUN", 65],

        ["FAI_HOVERCRAFT", 45],
        ["FAI_HVYHOVER", 35],
        ["FAI_TRANSHOVER", 40],

        ["FAI_BARGE", 20],
        
        ["FAI_DESTROYER", 5],
        ["FAI_COASTPATROL", 20],
        ["FAI_TRANSSHIP", 15],
        ["FAI_OGRE", 10]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ROCKETS.damageTable, "WEP_FAI_ROCKETS");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ROCKETS = new Constructor();
