var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_RAILWAYGUN");

        unit.setMinRange(3);
        unit.setMaxRange(7);
        unit.setAmmo1(3);
        unit.setMaxAmmo1(3);

        unit.setFuel(99);
        unit.setMaxFuel(99);
        unit.setBaseMovementPoints(4);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_TRAIN_GUN", false);
        unit.loadSprite("FAI_TRAIN_GUN+mask", true);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 2);
        animation.loadSprite(unitID, false, 2);
        animation.setSound("train.wav", -2, "mods/MassCombat/sounds/");
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_RAIL";
    };
    this.getBaseCost = function()
    {
        return 16000;
    };
    this.getName = function()
    {
        return qsTr("Railway Gun")
    };
    this.canMoveAndFire = function()
    {
        return false;
    };
    this.getDescription = function()
    {
        return qsTr("For shooting from far, far, far away. Railway Guns die easily to direct attacks, but they can hit the enemy long before the enemy can shoot back!");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_TRAIN_GUN = new Constructor();
