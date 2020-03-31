var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setWeapon2ID("WEP_FAI_MG_MMG");

        unit.setAmmo2(10);
        unit.setMaxAmmo2(10);
        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(4);
        unit.setVision(3);
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_SUPP_SECURITY", false);
        unit.loadSprite("FAI_SUPP_SECURITY+mask", true);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("recon.wav", -2, "mods/MassCombat/sounds/");
        return animation;
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
        return qsTr("Security Forces")
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
    this.getDescription = function()
    {
        return qsTr(".");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_SUPP_SECURITY = new Constructor();
