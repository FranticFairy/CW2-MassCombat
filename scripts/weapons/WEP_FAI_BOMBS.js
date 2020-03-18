var Constructor = function () {
    this.getName = function () {
        return qsTr("Bombs");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 75;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",85],
        ["FAI_GUN_AA",75],
        ["FAI_GUN_ARTY",75],
        ["FAI_GUN_AT",75],
        ["FAI_HOVER_HEAVY",65],
        ["FAI_HOVER_TRANS",80],
        ["FAI_HOVERCRAFT",75],
        ["FAI_IFV",80],
        ["FAI_IFV_AMPHI",80],
        ["FAI_IFV_HEAVY",75],
        ["FAI_INF_CONSCRIPT",125],
        ["FAI_INF_ELITE",105],
        ["FAI_INF_ENGINEER",125],
        ["FAI_INF_MANPAD",125],
        ["FAI_INF_MG",125],
        ["FAI_INF_RIFLE",115],
        ["FAI_INF_RPG",125],
        ["FAI_INF_SNIPER",125],
        ["FAI_LAUNCHER_ASM",100],
        ["FAI_LAUNCHER_RKT",100],
        ["FAI_LAUNCHER_SAM",100],
        ["FAI_LAUNCHER_WMD",110],
        ["FAI_OTH_OGRE",10],
        ["FAI_SHIP_BATTLESHIP",25],
        ["FAI_SHIP_CARRIER",25],
        ["FAI_SHIP_CRUISER",45],
        ["FAI_SHIP_DESTROYER",55],
        ["FAI_SHIP_FRIGATE",60],
        ["FAI_SHIP_INVASION",80],
        ["FAI_SHIP_LCA",95],
        ["FAI_SHIP_LIBERTY",90],
        ["FAI_SHIP_SUPPLY",75],
        ["FAI_SHIP_TRANS",75],
        ["FAI_SUPP_ARMORCAR",75],
        ["FAI_SUPP_RECON",95],
        ["FAI_SUPP_SPAA",70],
        ["FAI_SUPP_SPARTY",70],
        ["FAI_SUPP_SPAT",70],
        ["FAI_TANK_BATTLE",65],
        ["FAI_TANK_HEAVY",55],
        ["FAI_TANK_HOVER",65],
        ["FAI_TANK_LIGHT",75],
        ["FAI_TANK_MECH",75],
        ["FAI_TRAIN_ARMOR",75],
        ["FAI_TRAIN_DIESEL",85],
        ["FAI_TRAIN_ELEC",85],
        ["FAI_TRAIN_GUN",95],
        ["FAI_TRAIN_STEAM",85],
        ["FAI_TRAIN_SUPPLY",85],
        ["FAI_TRANS_AMPHI",95],
        ["FAI_TRANS_HALFT",100],
        ["FAI_TRANS_HORSE",115],
        ["FAI_TRANS_SCREW",95],
        ["FAI_TRANS_TRUCK",95],
        ["FAI_UTIL_ARV",75],
        ["FAI_UTIL_AVLB",75],
        ["FAI_UTIL_DOZER",75],
        ["FAI_UTIL_RADAR",75],
        ["FAI_UTIL_SUPPLY",95],
        ["FAI_UTIL_SWEEP",75],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_BOMBS.damageTable, "WEP_FAI_BOMBS");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_BOMBS = new Constructor();
