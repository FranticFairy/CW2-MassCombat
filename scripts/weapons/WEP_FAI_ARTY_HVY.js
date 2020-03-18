var Constructor = function () {
    this.getName = function () {
        return qsTr("Heavy Artillery Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 55;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",55],
        ["FAI_GUN_AA",75],
        ["FAI_GUN_ARTY",75],
        ["FAI_GUN_AT",75],
        ["FAI_HOVER_HEAVY",55],
        ["FAI_HOVER_TRANS",80],
        ["FAI_HOVERCRAFT",75],
        ["FAI_IFV",80],
        ["FAI_IFV_AMPHI",80],
        ["FAI_IFV_HEAVY",75],
        ["FAI_INF_CONSCRIPT",105],
        ["FAI_INF_ELITE",85],
        ["FAI_INF_ENGINEER",105],
        ["FAI_INF_MANPAD",105],
        ["FAI_INF_MG",105],
        ["FAI_INF_RIFLE",95],
        ["FAI_INF_RPG",105],
        ["FAI_INF_SNIPER",105],
        ["FAI_LAUNCHER_ASM",80],
        ["FAI_LAUNCHER_RKT",80],
        ["FAI_LAUNCHER_SAM",80],
        ["FAI_LAUNCHER_WMD",90],
        ["FAI_OTH_OGRE",25],
        ["FAI_SHIP_BATTLESHIP",25],
        ["FAI_SHIP_CARRIER",25],
        ["FAI_SHIP_CRUISER",35],
        ["FAI_SHIP_DESTROYER",45],
        ["FAI_SHIP_FRIGATE",50],
        ["FAI_SHIP_INVASION",55],
        ["FAI_SHIP_LCA",70],
        ["FAI_SHIP_LIBERTY",65],
        ["FAI_SHIP_SUPPLY",50],
        ["FAI_SHIP_TRANS",50],
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
        ["FAI_TRAIN_ARMOR",45],
        ["FAI_TRAIN_DIESEL",55],
        ["FAI_TRAIN_ELEC",55],
        ["FAI_TRAIN_GUN",65],
        ["FAI_TRAIN_STEAM",55],
        ["FAI_TRAIN_SUPPLY",55],
        ["FAI_TRANS_AMPHI",75],
        ["FAI_TRANS_HALFT",80],
        ["FAI_TRANS_HORSE",95],
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
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ARTY_HVY.damageTable, "WEP_FAI_ARTY_HVY");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ARTY_HVY = new Constructor();
