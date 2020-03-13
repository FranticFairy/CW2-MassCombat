var Constructor = function () 
{
    this.getName = function () 
    {
        return qsTr("Laser");
    };
    this.getEnviromentDamage = function (enviromentId) 
    {
        return 25;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 25],
        ["FAI_TRUCK", 75],
        ["FAI_AMPHIBTRUCK", 75],

        ["FAI_IFV", 85],
        ["FAI_AMPHIBIFV", 85],
        ["FAI_HVYIFV", 75],

        ["FAI_FIELDAT", 60],
        ["FAI_FIELDARTY", 60],

        ["FAI_ARMORCAR", 65],
        ["FAI_RECON", 75],

        ["FAI_LAUNCHERASM", 65],
        ["FAI_LAUNCHERNUKE", 75],
        ["FAI_LAUNCHERRKT", 65],
        ["FAI_LAUNCHERSAM", 65],

        ["FAI_LIGHTTANK", 70],
        ["FAI_TANK", 65],
        ["FAI_HVYTANK", 40],
        ["FAI_HOVERTANK", 65],

        ["FAI_SPAA", 75],
        ["FAI_SPARTY", 75],

        ["FAI_FASTTRAIN", 60],
        ["FAI_HEAVYTRAIN", 60],
        ["FAI_ARMORTRAIN", 45],
        ["FAI_RAILWAYGUN", 70],

        ["FAI_HOVERCRAFT", 65],
        ["FAI_HVYHOVER", 40],
        ["FAI_TRANSHOVER", 50],

        ["FAI_BARGE", 25],
        ["FAI_OGRE", 5]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_MECHLASER.damageTable, "WEP_FAI_MECHLASER");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_MECHLASER = new Constructor();
