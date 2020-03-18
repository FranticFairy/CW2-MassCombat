var Constructor = function () {
    this.getName = function () {
        return qsTr("Autocannon");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 5;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",35],
        ["FAI_GUN_AA",70],
        ["FAI_GUN_ARTY",70],
        ["FAI_GUN_AT",70],
        ["FAI_HELI_ATTACK",40],
        ["FAI_HELI_GUNSHIP",30],
        ["FAI_HELI_INF",50],
        ["FAI_HELI_SCOUT",50],
        ["FAI_HELI_VHC",50],
        ["FAI_HOVER_HEAVY",15],
        ["FAI_HOVER_TRANS",25],
        ["FAI_HOVERCRAFT",20],
        ["FAI_IFV",25],
        ["FAI_IFV_AMPHI",25],
        ["FAI_IFV_HEAVY",20],
        ["FAI_INF_CONSCRIPT",115],
        ["FAI_INF_ELITE",95],
        ["FAI_INF_ENGINEER",115],
        ["FAI_INF_MANPAD",115],
        ["FAI_INF_MG",115],
        ["FAI_INF_RIFLE",105],
        ["FAI_INF_RPG",115],
        ["FAI_INF_SNIPER",115],
        ["FAI_LAUNCHER_ASM",75],
        ["FAI_LAUNCHER_RKT",75],
        ["FAI_LAUNCHER_SAM",75],
        ["FAI_LAUNCHER_WMD",85],
        ["FAI_OTH_OGRE",1],
        ["FAI_SUPP_ARMORCAR",20],
        ["FAI_SUPP_RECON",70],
        ["FAI_SUPP_SPAA",15],
        ["FAI_SUPP_SPARTY",15],
        ["FAI_SUPP_SPAT",15],
        ["FAI_TANK_BATTLE",15],
        ["FAI_TANK_HEAVY",5],
        ["FAI_TANK_HOVER",15],
        ["FAI_TANK_LIGHT",20],
        ["FAI_TANK_MECH",20],
        ["FAI_TRAIN_ARMOR",10],
        ["FAI_TRAIN_DIESEL",35],
        ["FAI_TRAIN_ELEC",35],
        ["FAI_TRAIN_GUN",40],
        ["FAI_TRAIN_STEAM",35],
        ["FAI_TRAIN_SUPPLY",35],
        ["FAI_TRANS_AMPHI",70],
        ["FAI_TRANS_HALFT",75],
        ["FAI_TRANS_HORSE",105],
        ["FAI_TRANS_SCREW",70],
        ["FAI_TRANS_TRUCK",70],
        ["FAI_UTIL_ARV",20],
        ["FAI_UTIL_AVLB",20],
        ["FAI_UTIL_DOZER",20],
        ["FAI_UTIL_RADAR",20],
        ["FAI_UTIL_SUPPLY",70],
        ["FAI_UTIL_SWEEP",20],
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_AUTOCANNON.damageTable, "WEP_FAI_AUTOCANNON");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_AUTOCANNON = new Constructor();
