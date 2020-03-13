var Constructor = function () {
    this.getName = function () {
        return qsTr("Nuclear Cannon");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 100;
    };
    this.damageTable = [
        ["FAI_FOOTSOLDIER", 95],
        ["FAI_TRUCK", 95],
        ["FAI_AMPHIBTRUCK", 95],
        
        ["FAI_IFV", 95],
        ["FAI_AMPHIBIFV", 95],
        ["FAI_HVYIFV", 95],
        
        ["FAI_FIELDAT", 95],
        ["FAI_FIELDARTY", 95],
        
        ["FAI_ARMORCAR", 95],
        ["FAI_RECON", 95],
        
        ["FAI_LAUNCHERASM", 95],
        ["FAI_LAUNCHERNUKE", 95],
        ["FAI_LAUNCHERRKT", 95],
        ["FAI_LAUNCHERSAM", 95],
        
        ["FAI_LIGHTTANK", 95],
        ["FAI_TANK", 95],
        ["FAI_HVYTANK", 95],
        ["FAI_HOVERTANK", 95],
        
        ["FAI_SPAA", 95],
        ["FAI_SPARTY", 95],
        
        ["FAI_FASTTRAIN", 95],
        ["FAI_HEAVYTRAIN", 95],
        ["FAI_ARMORTRAIN", 95],
        ["FAI_RAILWAYGUN", 95],
        
        ["FAI_HOVERCRAFT", 95],
        ["FAI_HVYHOVER", 95],
        ["FAI_TRANSHOVER", 95],
        ["FAI_EKRANOPLAN", 95],
        
        ["FAI_BARGE", 95],
        
        ["FAI_BATTLESHIP", 65],
        ["FAI_CARRIER", 65],
        ["FAI_CRUISER", 75],
        ["FAI_DESTROYER", 85],
        ["FAI_COASTPATROL", 95],
        ["FAI_SUBMARINE", 85],
        ["FAI_TRANSSHIP", 95],

        ["FAI_OGRE", 35]
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_OGRE_MAIN.damageTable, "WEP_FAI_OGRE_MAIN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_OGRE_MAIN = new Constructor();
