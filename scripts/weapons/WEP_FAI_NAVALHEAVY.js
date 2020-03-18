var Constructor = function () {
    this.getName = function () {
        return qsTr("H. Naval Guns");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 55;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",55],
        ["FAI_GUN_AA",65],
        ["FAI_GUN_ARTY",65],
        ["FAI_GUN_AT",65],
        ["FAI_HOVER_HEAVY",55],
        ["FAI_HOVER_TRANS",80],
        ["FAI_HOVERCRAFT",75],
        ["FAI_IFV",80],
        ["FAI_IFV_AMPHI",80],
        ["FAI_IFV_HEAVY",75],
        ["FAI_INF_CONSCRIPT",115],
        ["FAI_INF_ELITE",95],
        ["FAI_INF_ENGINEER",115],
        ["FAI_INF_MANPAD",115],
        ["FAI_INF_MG",115],
        ["FAI_INF_RIFLE",105],
        ["FAI_INF_RPG",115],
        ["FAI_INF_SNIPER",115],
        ["FAI_LAUNCHER_ASM",80],
        ["FAI_LAUNCHER_RKT",80],
        ["FAI_LAUNCHER_SAM",80],
        ["FAI_LAUNCHER_WMD",90],
        ["FAI_OTH_OGRE",20],
        ["FAI_SHIP_BATTLESHIP",45],
        ["FAI_SHIP_CARRIER",45],
        ["FAI_SHIP_CRUISER",65],
        ["FAI_SHIP_DESTROYER",85],
        ["FAI_SHIP_EKRANOPLAN",75],
        ["FAI_SHIP_FRIGATE",90],
        ["FAI_SHIP_INVASION",110],
        ["FAI_SHIP_LCA",125],
        ["FAI_SHIP_LIBERTY",120],
        ["FAI_SHIP_ORLYONOK",85],
        ["FAI_SHIP_SUBMARINE",25],
        ["FAI_SHIP_SUPPLY",105],
        ["FAI_SHIP_TRANS",105],
        ["FAI_SUPP_ARMORCAR",75],
        ["FAI_SUPP_RECON",75],
        ["FAI_SUPP_SPAA",70],
        ["FAI_SUPP_SPARTY",70],
        ["FAI_SUPP_SPAT",70],
        ["FAI_TANK_BATTLE",55],
        ["FAI_TANK_HEAVY",45],
        ["FAI_TANK_HOVER",55],
        ["FAI_TANK_LIGHT",75],
        ["FAI_TANK_MECH",75],
        ["FAI_TRAIN_ARMOR",55],
        ["FAI_TRAIN_DIESEL",55],
        ["FAI_TRAIN_ELEC",55],
        ["FAI_TRAIN_GUN",65],
        ["FAI_TRAIN_STEAM",55],
        ["FAI_TRAIN_SUPPLY",55],
        ["FAI_TRANS_AMPHI",75],
        ["FAI_TRANS_HALFT",80],
        ["FAI_TRANS_HORSE",105],
        ["FAI_TRANS_SCREW",75],
        ["FAI_TRANS_TRUCK",75],
        ["FAI_UTIL_ARV",75],
        ["FAI_UTIL_AVLB",75],
        ["FAI_UTIL_DOZER",75],
        ["FAI_UTIL_RADAR",75],
        ["FAI_UTIL_SUPPLY",75],
        ["FAI_UTIL_SWEEP",75],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_NAVALHEAVY.damageTable, "WEP_FAI_NAVALHEAVY");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_NAVALHEAVY = new Constructor();
