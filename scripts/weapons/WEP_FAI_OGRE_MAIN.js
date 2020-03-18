var Constructor = function () {
    this.getName = function () {
        return qsTr("Nuclear Cannon");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 100;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",95],
        ["FAI_GUN_AA",95],
        ["FAI_GUN_ARTY",95],
        ["FAI_GUN_AT",95],
        ["FAI_HOVER_HEAVY",95],
        ["FAI_HOVER_TRANS",100],
        ["FAI_HOVERCRAFT",95],
        ["FAI_IFV",100],
        ["FAI_IFV_AMPHI",100],
        ["FAI_IFV_HEAVY",95],
        ["FAI_INF_CONSCRIPT",105],
        ["FAI_INF_ELITE",85],
        ["FAI_INF_ENGINEER",105],
        ["FAI_INF_MANPAD",105],
        ["FAI_INF_MG",105],
        ["FAI_INF_RIFLE",95],
        ["FAI_INF_RPG",105],
        ["FAI_INF_SNIPER",105],
        ["FAI_LAUNCHER_ASM",100],
        ["FAI_LAUNCHER_RKT",100],
        ["FAI_LAUNCHER_SAM",100],
        ["FAI_LAUNCHER_WMD",110],
        ["FAI_OTH_OGRE",35],
        ["FAI_SHIP_BATTLESHIP",65],
        ["FAI_SHIP_CARRIER",65],
        ["FAI_SHIP_CRUISER",75],
        ["FAI_SHIP_DESTROYER",85],
        ["FAI_SHIP_EKRANOPLAN",95],
        ["FAI_SHIP_FRIGATE",90],
        ["FAI_SHIP_INVASION",100],
        ["FAI_SHIP_LCA",115],
        ["FAI_SHIP_LIBERTY",110],
        ["FAI_SHIP_ORLYONOK",105],
        ["FAI_SHIP_SUBMARINE",85],
        ["FAI_SHIP_SUPPLY",95],
        ["FAI_SHIP_TRANS",95],
        ["FAI_SUPP_ARMORCAR",95],
        ["FAI_SUPP_RECON",95],
        ["FAI_SUPP_SPAA",90],
        ["FAI_SUPP_SPARTY",90],
        ["FAI_SUPP_SPAT",90],
        ["FAI_TANK_BATTLE",95],
        ["FAI_TANK_HEAVY",95],
        ["FAI_TANK_HOVER",95],
        ["FAI_TANK_LIGHT",95],
        ["FAI_TANK_MECH",95],
        ["FAI_TRAIN_ARMOR",95],
        ["FAI_TRAIN_DIESEL",95],
        ["FAI_TRAIN_ELEC",95],
        ["FAI_TRAIN_GUN",95],
        ["FAI_TRAIN_STEAM",95],
        ["FAI_TRAIN_SUPPLY",95],
        ["FAI_TRANS_AMPHI",95],
        ["FAI_TRANS_HALFT",100],
        ["FAI_TRANS_HORSE",95],
        ["FAI_TRANS_SCREW",95],
        ["FAI_TRANS_TRUCK",95],
        ["FAI_UTIL_ARV",95],
        ["FAI_UTIL_AVLB",95],
        ["FAI_UTIL_DOZER",95],
        ["FAI_UTIL_RADAR",95],
        ["FAI_UTIL_SUPPLY",95],
        ["FAI_UTIL_SWEEP",95],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_OGRE_MAIN.damageTable, "WEP_FAI_OGRE_MAIN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_OGRE_MAIN = new Constructor();
