var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setWeapon2ID("WEP_FAI_INFWEP");

        unit.setAmmo2(10);
        unit.setMaxAmmo2(10);
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(4);
        unit.setVision(4)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_TRUCK", false);
        unit.loadSprite("FAI_TRUCK+mask", true);
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
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_MISSILE,ACTION_CAPTURE,ACTION_FIRE,ACTION_JOIN,ACTION_LOAD,ACTION_UNLOAD,ACTION_WAIT,ACTION_CO_UNIT_0,ACTION_CO_UNIT_1";
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_LIGHT_WHEEL";
    };
    this.getBaseCost = function()
    {
        return 1000;
    };
    this.getName = function()
    {
        return qsTr("Motorized Infantry")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("The simplest tool available for getting your soldiers to the front. Basic trucks are still surprisingly useful.");
    };
    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_FOOTSOLDIER"];
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_TRUCK = new Constructor();
