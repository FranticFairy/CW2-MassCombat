var Constructor = function () {
    this.getName = function () {
        return qsTr("L. Tank Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 15;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",40],
        ["FAI_GUN_AA",25],
        ["FAI_GUN_ARTY",25],
        ["FAI_GUN_AT",25],
        ["FAI_HOVER_HEAVY",35],
        ["FAI_HOVER_TRANS",60],
        ["FAI_HOVERCRAFT",55],
        ["FAI_IFV",60],
        ["FAI_IFV_AMPHI",60],
        ["FAI_IFV_HEAVY",55],
        ["FAI_LAUNCHER_ASM",70],
        ["FAI_LAUNCHER_RKT",70],
        ["FAI_LAUNCHER_SAM",70],
        ["FAI_LAUNCHER_WMD",80],
        ["FAI_OTH_OGRE",2],
        ["FAI_SUPP_ARMORCAR",55],
        ["FAI_SUPP_RECON",65],
        ["FAI_SUPP_SPAA",50],
        ["FAI_SUPP_SPARTY",50],
        ["FAI_SUPP_SPAT",50],
        ["FAI_TANK_BATTLE",35],
        ["FAI_TANK_HEAVY",15],
        ["FAI_TANK_HOVER",35],
        ["FAI_TANK_LIGHT",55],
        ["FAI_TANK_MECH",55],
        ["FAI_TRAIN_ARMOR",25],
        ["FAI_TRAIN_DIESEL",40],
        ["FAI_TRAIN_ELEC",40],
        ["FAI_TRAIN_GUN",45],
        ["FAI_TRAIN_STEAM",40],
        ["FAI_TRAIN_SUPPLY",40],
        ["FAI_TRANS_AMPHI",65],
        ["FAI_TRANS_HALFT",70],
        ["FAI_TRANS_SCREW",65],
        ["FAI_TRANS_TRUCK",65],
        ["FAI_UTIL_ARV",55],
        ["FAI_UTIL_AVLB",55],
        ["FAI_UTIL_DOZER",55],
        ["FAI_UTIL_RADAR",55],
        ["FAI_UTIL_SUPPLY",65],
        ["FAI_UTIL_SWEEP",55],        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_LIGHTTANKGUN.damageTable, "WEP_FAI_LIGHTTANKGUN");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_LIGHTTANKGUN = new Constructor();
