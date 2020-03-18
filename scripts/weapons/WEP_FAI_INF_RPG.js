var Constructor = function () {
    this.getName = function () {
        return qsTr("Battle Rifles");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 0;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",30],
        ["FAI_HOVER_HEAVY",60],
        ["FAI_HOVER_TRANS",75],
        ["FAI_HOVERCRAFT",70],
        ["FAI_IFV",75],
        ["FAI_IFV_AMPHI",75],
        ["FAI_IFV_HEAVY",70],
        ["FAI_LAUNCHER_ASM",75],
        ["FAI_LAUNCHER_RKT",75],
        ["FAI_LAUNCHER_SAM",75],
        ["FAI_LAUNCHER_WMD",85],
        ["FAI_OTH_OGRE",1],
        ["FAI_SUPP_ARMORCAR",70],
        ["FAI_SUPP_RECON",70],
        ["FAI_SUPP_SPAA",65],
        ["FAI_SUPP_SPARTY",65],
        ["FAI_SUPP_SPAT",65],
        ["FAI_TANK_BATTLE",60],
        ["FAI_TANK_HEAVY",40],
        ["FAI_TANK_HOVER",60],
        ["FAI_TANK_LIGHT",70],
        ["FAI_TANK_MECH",70],
        ["FAI_TRAIN_ARMOR",20],
        ["FAI_TRAIN_DIESEL",30],
        ["FAI_TRAIN_ELEC",30],
        ["FAI_TRAIN_GUN",40],
        ["FAI_TRAIN_STEAM",30],
        ["FAI_TRAIN_SUPPLY",30],
        ["FAI_TRANS_AMPHI",70],
        ["FAI_TRANS_HALFT",75],
        ["FAI_TRANS_SCREW",70],
        ["FAI_TRANS_TRUCK",70],
        ["FAI_UTIL_ARV",70],
        ["FAI_UTIL_AVLB",70],
        ["FAI_UTIL_DOZER",70],
        ["FAI_UTIL_RADAR",70],
        ["FAI_UTIL_SUPPLY",70],
        ["FAI_UTIL_SWEEP",70],           
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_INF_RPG.damageTable, "WEP_FAI_INF_RPG");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_INF_RPG = new Constructor();
