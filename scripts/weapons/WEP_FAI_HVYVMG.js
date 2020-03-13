var Constructor = function () {
    this.getName = function () {
        return qsTr("Heavy VMG");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 1;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 100],
        ["FAI_TRUCK", 80],
        ["FAI_AMPHIBTRUCK", 80],

        ["FAI_IFV", 65],
        ["FAI_AMPHIBIFV", 65],
        ["FAI_HVYIFV", 60],

        ["FAI_FIELDAT", 75],
        ["FAI_FIELDARTY", 75],

        ["FAI_ARMORCAR", 20],
        ["FAI_RECON", 65],

        ["FAI_LAUNCHERASM", 35],
        ["FAI_LAUNCHERNUKE", 45],
        ["FAI_LAUNCHERRKT", 35],
        ["FAI_LAUNCHERSAM", 35],

        ["FAI_LIGHTTANK", 10],
        ["FAI_TANK", 5],
        ["FAI_HOVERTANK", 5],

        ["FAI_SPAA", 10],
        ["FAI_SPARTY", 20],

        ["FAI_FASTTRAIN", 20],
        ["FAI_HEAVYTRAIN", 20],
        ["FAI_ARMORTRAIN", 5],
        ["FAI_RAILWAYGUN", 25],

        ["FAI_GUNSHIP", 10],
        ["FAI_HELIINF", 20],
        ["FAI_HELIVHC", 20],
        
        ["FAI_HOVERCRAFT", 5]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_HVYVMG.damageTable, "WEP_FAI_HVYVMG");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_HVYVMG = new Constructor();
