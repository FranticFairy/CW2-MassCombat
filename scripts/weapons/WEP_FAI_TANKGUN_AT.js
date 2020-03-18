var Constructor = function () {
    this.getName = function () {
        return qsTr("Anti-Tank Gun");
    };
    this.getEnviromentDamage = function (enviromentId) {
        return 25;
    };
    this.damageTable = [
        ["FAI_CASH_TRAIN",40],
        ["FAI_GUN_AA",20],
        ["FAI_GUN_ARTY",20],
        ["FAI_GUN_AT",20],
        ["FAI_HOVER_HEAVY",75],
        ["FAI_HOVER_TRANS",95],
        ["FAI_HOVERCRAFT",90],
        ["FAI_IFV",95],
        ["FAI_IFV_AMPHI",95],
        ["FAI_IFV_HEAVY",90],
        ["FAI_LAUNCHER_ASM",60],
        ["FAI_LAUNCHER_RKT",60],
        ["FAI_LAUNCHER_SAM",60],
        ["FAI_LAUNCHER_WMD",70],
        ["FAI_OTH_OGRE",10],
        ["FAI_SUPP_ARMORCAR",90],
        ["FAI_SUPP_RECON",55],
        ["FAI_SUPP_SPAA",85],
        ["FAI_SUPP_SPARTY",85],
        ["FAI_SUPP_SPAT",85],
        ["FAI_TANK_BATTLE",75],
        ["FAI_TANK_HEAVY",55],
        ["FAI_TANK_HOVER",75],
        ["FAI_TANK_LIGHT",90],
        ["FAI_TANK_MECH",90],
        ["FAI_TRAIN_ARMOR",25],
        ["FAI_TRAIN_DIESEL",40],
        ["FAI_TRAIN_ELEC",40],
        ["FAI_TRAIN_GUN",45],
        ["FAI_TRAIN_STEAM",40],
        ["FAI_TRAIN_SUPPLY",40],
        ["FAI_TRANS_AMPHI",55],
        ["FAI_TRANS_HALFT",60],
        ["FAI_TRANS_SCREW",55],
        ["FAI_TRANS_TRUCK",55],
        ["FAI_UTIL_ARV",90],
        ["FAI_UTIL_AVLB",90],
        ["FAI_UTIL_DOZER",90],
        ["FAI_UTIL_RADAR",90],
        ["FAI_UTIL_SUPPLY",55],
        ["FAI_UTIL_SWEEP",90],
        
    ];

    this.getBaseDamage = function (unit) {
        return WEAPON.getDamageFromTable(unit, WEP_FAI_TANKGUN_AT.damageTable, "WEP_FAI_TANKGUN_AT");
    };
};

Constructor.prototype = WEAPON;
var WEP_FAI_TANKGUN_AT = new Constructor();
