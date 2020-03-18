var Constructor = function () {
    this.getName = function () {
        return qsTr("Rocket Battery");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 40;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",55],
        ["FAI_GUN_AA",75],
        ["FAI_GUN_ARTY",75],
        ["FAI_GUN_AT",75],
        ["FAI_HOVER_HEAVY",45],
        ["FAI_HOVER_TRANS",70],
        ["FAI_HOVERCRAFT",65],
        ["FAI_IFV",70],
        ["FAI_IFV_AMPHI",70],
        ["FAI_IFV_HEAVY",65],
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
        ["FAI_OTH_OGRE",10],
        ["FAI_SHIP_DESTROYER",5],
        ["FAI_SHIP_FRIGATE",10],
        ["FAI_SHIP_INVASION",20],
        ["FAI_SHIP_LCA",35],
        ["FAI_SHIP_LIBERTY",30],        
        ["FAI_SHIP_SUPPLY",15],
        ["FAI_SHIP_TRANS",15],
        ["FAI_SUPP_ARMORCAR",65],
        ["FAI_SUPP_RECON",75],
        ["FAI_SUPP_SPAA",60],
        ["FAI_SUPP_SPARTY",60],
        ["FAI_SUPP_SPAT",60],
        ["FAI_TANK_BATTLE",45],
        ["FAI_TANK_HEAVY",35],
        ["FAI_TANK_HOVER",45],
        ["FAI_TANK_LIGHT",65],
        ["FAI_TANK_MECH",65],
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
        ["FAI_UTIL_ARV",65],
        ["FAI_UTIL_AVLB",65],
        ["FAI_UTIL_DOZER",65],
        ["FAI_UTIL_RADAR",65],
        ["FAI_UTIL_SUPPLY",75],
        ["FAI_UTIL_SWEEP",65],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ROCKETS.damageTable, "WEP_FAI_ROCKETS");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ROCKETS = new Constructor();
