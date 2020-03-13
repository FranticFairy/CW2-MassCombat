var Constructor = function () {
    this.getName = function () {
        return qsTr("Tactical Nuke");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 85;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 135],
        ["FAI_TRUCK", 110],
        ["FAI_AMPHIBTRUCK", 110],

        ["FAI_IFV", 110],
        ["FAI_AMPHIBIFV", 110],
        ["FAI_HVYIFV", 110],

        ["FAI_FIELDAT", 110],
        ["FAI_FIELDARTY", 110],

        ["FAI_ARMORCAR", 110],
        ["FAI_RECON", 110],

        ["FAI_LAUNCHERASM", 110],
        ["FAI_LAUNCHERNUKE", 110],
        ["FAI_LAUNCHERRKT", 110],
        ["FAI_LAUNCHERSAM", 110],

        ["FAI_LIGHTTANK", 110],
        ["FAI_TANK", 110],
        ["FAI_HVYTANK", 110],
        ["FAI_HOVERTANK", 110],

        ["FAI_SPAA", 110],
        ["FAI_SPARTY", 110],

        ["FAI_FASTTRAIN", 110],
        ["FAI_HEAVYTRAIN", 110],
        ["FAI_ARMORTRAIN", 110],
        ["FAI_RAILWAYGUN", 110],

        ["FAI_HOVERCRAFT", 110],
        ["FAI_HVYHOVER", 110],
        ["FAI_TRANSHOVER", 110],
        ["FAI_EKRANOPLAN", 95],

        ["FAI_BARGE", 110],

        ["FAI_BATTLESHIP", 80],
        ["FAI_CARRIER", 80],
        ["FAI_CRUISER", 90],
        ["FAI_DESTROYER", 100],
        ["FAI_COASTPATROL", 110],
        ["FAI_SUBMARINE", 100],
        ["FAI_TRANSSHIP", 110],
        ["FAI_OGRE", 30]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_TACNUKE.damageTable, "WEP_FAI_TACNUKE");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_TACNUKE = new Constructor();
