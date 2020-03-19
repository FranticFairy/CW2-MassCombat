var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(6);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_TRAIN_DIESEL", false);
        unit.loadSprite("FAI_TRAIN_DIESEL+mask", true);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 2);
        animation.loadSprite(unitID, false, 2);
        animation.setSound("movetank.wav", -2);
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_RAIL";
    };
    this.getBaseCost = function()
    {
        return 10000;
    };
    this.getName = function()
    {
        return qsTr("Diesel Train")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getLoadingPlace = function()
    {
        return 3;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_TRANS_TRUCK","FAI_TRANS_AMPHI","FAI_IFV","FAI_IFV_AMPHI","FAI_IFV_HEAVY","FAI_GUN_ARTY","FAI_GUN_AT","FAI_TANK_LIGHT","FAI_TANK_BATTLE","FAI_TANK_HEAVY","FAI_TANK_HOVER","FAI_SUPP_SPAA","FAI_SUPP_SPARTY","FAI_LAUNCHER_SAM","FAI_LAUNCHER_WMD","FAI_LAUNCHER_RKT","FAI_LAUNCHER_ASM","FAI_SUPP_RECON","FAI_SUPP_ARMORCAR","FAI_UTIL_SUPPLY","FAI_TRANS_HALFT","FAI_INF_RIFLE","FAI_UTIL_AVLB","FAI_UTIL_ARV","FAI_UTIL_DOZER","FAI_CASH_TRUCK","FAI_TRANS_SCREW"];
    };
    this.getDescription = function()
    {
        return qsTr("Is quantity more important than speed? Get Heavy Trains instead of Fast Trains! Although slower, they can carry three units instead of two! Still no better at not getting destroyed, though.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_TRAIN_DIESEL = new Constructor();
