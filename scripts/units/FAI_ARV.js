var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setFuel(80);
        unit.setMaxFuel(80);
        unit.setBaseMovementPoints(6);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_ARV", false);
        unit.loadSprite("FAI_ARV+mask", true);
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
        return "ACTION_PICKUP,ACTION_JOIN,ACTION_LOAD,ACTION_UNLOAD,ACTION_WAIT";
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_TREAD";
    };
    this.getBaseCost = function()
    {
        return 5500;
    };
    this.getName = function()
    {
        return qsTr("ARV")
    };
    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_LIGHTTANK","FAI_TANK","FAI_HVYTANK","FAI_SPAA","FAI_SPARTY","FAI_LAUNCHERSAM","FAI_LAUNCHERRKT","FAI_LAUNCHERASM","FAI_RECON","FAI_ARMORCAR"];
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("Sometimes, your armoured vehicles are in need of rescue. In this case, the ARV is your best choice. It is capable of picking up a single allied vehicle from an adjacent tile and transporting them to safety, but it is unarmed.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_ARV = new Constructor();
