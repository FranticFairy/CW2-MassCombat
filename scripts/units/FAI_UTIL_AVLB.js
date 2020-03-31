var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(5);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_UTIL_AVLB", false);
        unit.loadSprite("FAI_UTIL_AVLB+mask", true);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("ifv.wav", -2, "mods/MassCombat/sounds/");
        return animation;
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_PLACE_PONTOON,ACTION_JOIN,ACTION_LOAD,ACTION_UNLOAD,ACTION_WAIT";
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_TREAD";
    };
    this.getBaseCost = function()
    {
        return 6500;
    };
    this.getName = function()
    {
        return qsTr("AVLB")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("For dealing with pesky rivers standing in the way of your advance. AVLB (Armoured Vehicle-Launched Bridge) units can lay a single bridge across a river before being expended.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_UTIL_AVLB = new Constructor();
