var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);
        
        unit.setWeapon1ID("WEP_FAI_ATGM");

        unit.setAmmo1(2);
        unit.setMaxAmmo1(2);

        unit.setWeapon2ID("WEP_FAI_AUTOCAN");

        unit.setAmmo2(10);
        unit.setMaxAmmo2(10);

        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(4);
        unit.setVision(3)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_IFV_HEAVY", false);
        unit.loadSprite("FAI_IFV_HEAVY+mask", true);
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
        return "MOVE_FAI_TREAD";
    };
    this.getBaseCost = function()
    {
        return 5000;
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_MISSILE,ACTION_CAPTURE,ACTION_FIRE,ACTION_JOIN,ACTION_LOAD,ACTION_UNLOAD,ACTION_WAIT,ACTION_CO_UNIT_0,ACTION_CO_UNIT_1";
    };
    this.getName = function()
    {
        return qsTr("Hvy. Arm. Infantry")
    };
    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_INF_RIFLE"];
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("For adding even more firepower to your infantry! These IFVs come with stronger autocannons and three attacks worth of Anti-Tank Missiles!");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_IFV_HEAVY = new Constructor();
