var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);

        unit.setWeapon2ID("WEP_FAI_HVYVMG");

        unit.setAmmo2(10);
        unit.setMaxAmmo2(10);
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(5);
        unit.setVision(4)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_SCREW", false);
        unit.loadSprite("FAI_SCREW+mask", true);
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
        return "MOVE_FAI_SCREW";
    };
    this.getBaseCost = function()
    {
        return 4000;
    };
    this.getName = function()
    {
        return qsTr("All-Terrain Infantry")
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_MISSILE,ACTION_CAPTURE,ACTION_FIRE,ACTION_JOIN,ACTION_LOAD,ACTION_UNLOAD,ACTION_WAIT,ACTION_CO_UNIT_0,ACTION_CO_UNIT_1";
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_FOOTSOLDIER"];
    };
    this.getDescription = function()
    {
        return qsTr("For when most of the terrain around you is rough, screw vehicles can come in handy. Though slow on hard, flat terrain, they excel in muddy, wet, snowy and sandy conditions.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_SCREW = new Constructor();
