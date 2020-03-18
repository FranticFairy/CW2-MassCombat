var Constructor = function () {
    this.getName = function () {
        return qsTr("Railway Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 55;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",45],
        ["FAI_GUN_AA",65],
        ["FAI_GUN_ARTY",65],
        ["FAI_GUN_AT",65],
        ["FAI_HOVER_HEAVY",45],
        ["FAI_HOVER_TRANS",70],
        ["FAI_HOVERCRAFT",65],
        ["FAI_IFV",70],
        ["FAI_IFV_AMPHI",70],
        ["FAI_IFV_HEAVY",65],
        ["FAI_INF_CONSCRIPT",105],
        ["FAI_INF_ELITE",85],
        ["FAI_INF_ENGINEER",105],
        ["FAI_INF_MANPAD",105],
        ["FAI_INF_MG",105],
        ["FAI_INF_RIFLE",95],
        ["FAI_INF_RPG",105],
        ["FAI_INF_SNIPER",105],
        ["FAI_LAUNCHER_ASM",70],
        ["FAI_LAUNCHER_RKT",70],
        ["FAI_LAUNCHER_SAM",70],
        ["FAI_LAUNCHER_WMD",80],
        ["FAI_OTH_OGRE",15],
        ["FAI_SHIP_BATTLESHIP",25],
        ["FAI_SHIP_CARRIER",25],
        ["FAI_SHIP_CRUISER",55],
        ["FAI_SHIP_DESTROYER",70],
        ["FAI_SHIP_EKRANOPLAN",65],
        ["FAI_SHIP_FRIGATE",75],
        ["FAI_SHIP_INVASION",90],
        ["FAI_SHIP_LCA",105],
        ["FAI_SHIP_LIBERTY",100],
        ["FAI_SHIP_ORLYONOK",75],
        ["FAI_SHIP_SUBMARINE",35],
        ["FAI_SHIP_SUPPLY",85],
        ["FAI_SHIP_TRANS",85],
        ["FAI_SUPP_ARMORCAR",65],
        ["FAI_SUPP_RECON",65],
        ["FAI_SUPP_SPAA",60],
        ["FAI_SUPP_SPARTY",60],
        ["FAI_SUPP_SPAT",60],
        ["FAI_TANK_BATTLE",45],
        ["FAI_TANK_HEAVY",35],
        ["FAI_TANK_HOVER",45],
        ["FAI_TANK_LIGHT",65],
        ["FAI_TANK_MECH",65],
        ["FAI_TRAIN_ARMOR",45],
        ["FAI_TRAIN_DIESEL",45],
        ["FAI_TRAIN_ELEC",45],
        ["FAI_TRAIN_GUN",55],
        ["FAI_TRAIN_STEAM",45],
        ["FAI_TRAIN_SUPPLY",45],
        ["FAI_TRANS_AMPHI",65],
        ["FAI_TRANS_HALFT",70],
        ["FAI_TRANS_HORSE",95],
        ["FAI_TRANS_SCREW",65],
        ["FAI_TRANS_TRUCK",65],
        ["FAI_UTIL_ARV",65],
        ["FAI_UTIL_AVLB",65],
        ["FAI_UTIL_DOZER",65],
        ["FAI_UTIL_RADAR",65],
        ["FAI_UTIL_SUPPLY",65],
        ["FAI_UTIL_SWEEP",65],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_RAILWAYGUN.damageTable, "WEP_FAI_RAILWAYGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_RAILWAYGUN = new Constructor();
