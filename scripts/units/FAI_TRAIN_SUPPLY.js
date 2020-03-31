var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(7);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_TRAIN_SUPPLY", false);
        unit.loadSprite("FAI_TRAIN_SUPPLY+mask", true);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("train.wav", -2, "mods/MassCombat/sounds/");
        return animation;
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_RATION,ACTION_JOIN,ACTION_LOAD,ACTION_UNLOAD,ACTION_WAIT";
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_RAIL";
    };
    this.getBaseCost = function()
    {
        return 7000;
    };
    this.getName = function()
    {
        return qsTr("Supply Train")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("Sometimes, you need to get lots of supplies to the frontline, and for that Supply Trains are the best. Instead of resupplying only 4 tiles, Supply Trains resupply all 8 tiles around itself!.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_TRAIN_SUPPLY = new Constructor();
