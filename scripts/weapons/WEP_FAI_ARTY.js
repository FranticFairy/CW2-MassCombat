var Constructor = function () {
    this.getName = function () {
        return qsTr("Artillery Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 35;
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
        ["FAI_INF_CONSCRIPT",95],
        ["FAI_INF_ELITE",75],
        ["FAI_INF_ENGINEER",95],
        ["FAI_INF_MANPAD",95],
        ["FAI_INF_MG",95],
        ["FAI_INF_RIFLE",85],
        ["FAI_INF_RPG",95],
        ["FAI_INF_SNIPER",95],
        ["FAI_LAUNCHER_ASM",70],
        ["FAI_LAUNCHER_RKT",70],
        ["FAI_LAUNCHER_SAM",70],
        ["FAI_LAUNCHER_WMD",80],
        ["FAI_OTH_OGRE",10],
        ["FAI_SHIP_CRUISER",5],
        ["FAI_SHIP_DESTROYER",10],
        ["FAI_SHIP_FRIGATE",15],
        ["FAI_SHIP_INVASION",25],
        ["FAI_SHIP_LCA",40],
        ["FAI_SHIP_LIBERTY",35],
        ["FAI_SHIP_SUPPLY",20],
        ["FAI_SHIP_TRANS",20],
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
        ["FAI_TRAIN_ARMOR",35],
        ["FAI_TRAIN_DIESEL",45],
        ["FAI_TRAIN_ELEC",45],
        ["FAI_TRAIN_GUN",55],
        ["FAI_TRAIN_STEAM",45],
        ["FAI_TRAIN_SUPPLY",45],
        ["FAI_TRANS_AMPHI",65],
        ["FAI_TRANS_HALFT",70],
        ["FAI_TRANS_HORSE",85],
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
        return WEAPON.getDamageFromTable(unit, WEP_FAI_ARTY.damageTable, "WEP_FAI_ARTY");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_ARTY = new Constructor();
