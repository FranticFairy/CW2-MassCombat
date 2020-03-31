var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);

        unit.setWeapon2ID("WEP_FAI_MG_HVYVMG");

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
        unit.loadSprite("FAI_IFV_AMPHI", false);
        unit.loadSprite("FAI_IFV_AMPHI+mask", true);
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
    this.getMovementType = function()
    {
        return "MOVE_FAI_AMPHIB";
    };
    this.getBaseCost = function()
    {
        return 4000;
    };
    this.getName = function()
    {
        return qsTr("Amph. Arm. Infantry")
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
        return ["FAI_INF_RIFLE"];
    };
    this.getDescription = function()
    {
        return qsTr("IFVs are nice and all, but rivers can sometimes be annoying. Not anymore, thanks to the Amphibious IFV! Though it's autocannon is weaker, this vehicle can cross rivers without issue!");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_IFV_AMPHI = new Constructor();
