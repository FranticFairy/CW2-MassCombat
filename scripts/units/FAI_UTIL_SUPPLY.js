var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon2ID("WEP_FAI_MINE");
        unit.setAmmo2(1);
        unit.setMaxAmmo2(1);

        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(4);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_UTIL_SUPPLY", false);
        unit.loadSprite("FAI_UTIL_SUPPLY+mask", true);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("truck.wav", -2, "mods/MassCombat/sounds/");
        return animation;
    };
    this.startOfTurn = function(unit)
    {
        ACTION_SUPPORTALL_RATION.giveRation(unit);
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_SUPPORTALL_RATION,ACTION_PLACE_LANDMINE,ACTION_JOIN,ACTION_LOAD,ACTION_UNLOAD,ACTION_WAIT";
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_LIGHT_WHEEL";
    };
    this.getBaseCost = function()
    {
        return 1500;
    };
    this.getName = function()
    {
        return qsTr("Supply Trucks")
    };
    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_GUN_ARTY","FAI_GUN_AT","FAI_INF_RIFLE"];
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("For ensuring that the troops at the front have enough bullets to shoot with. Supply trucks can resupply allied units, transport towed guns, but not much else.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_UTIL_SUPPLY = new Constructor();
