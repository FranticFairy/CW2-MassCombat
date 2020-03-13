var Constructor = function () {
    this.getName = function () {
        return qsTr("VMG");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 90],
        ["FAI_TRUCK", 70],
        ["FAI_AMPHIBTRUCK", 70],

        ["FAI_IFV", 55],
        ["FAI_AMPHIBIFV", 55],
        ["FAI_HVYIFV", 50],

        ["FAI_FIELDAT", 70],
        ["FAI_FIELDARTY", 70],

        ["FAI_ARMORCAR", 10],
        ["FAI_RECON", 55],

        ["FAI_LAUNCHERASM", 30],
        ["FAI_LAUNCHERNUKE", 40],
        ["FAI_LAUNCHERRKT", 30],
        ["FAI_LAUNCHERSAM", 30],

        ["FAI_LIGHTTANK", 10],
        ["FAI_TANK", 5],
        ["FAI_HOVERTANK", 5],
        ["FAI_HVYTANK", 1],

        ["FAI_SPAA", 5],
        ["FAI_SPARTY", 15],

        ["FAI_FASTTRAIN", 15],
        ["FAI_HEAVYTRAIN", 15],
        ["FAI_ARMORTRAIN", 5],
        ["FAI_RAILWAYGUN", 20],

        ["FAI_GUNSHIP", 5],
        ["FAI_HELIINF", 10],
        ["FAI_HELIVHC", 10],
        
        ["FAI_HOVERCRAFT", 5]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_VMG.damageTable, "WEP_FAI_VMG");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_VMG = new Constructor();
