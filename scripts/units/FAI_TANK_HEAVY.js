var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setWeapon1ID("WEP_FAI_TANKGUN_HEAVY");
        unit.setWeapon2ID("WEP_FAI_MG_HVYVMG");

        unit.setAmmo1(6);
        unit.setMaxAmmo1(6);
        unit.setAmmo2(10);
        unit.setMaxAmmo2(10);

        unit.setFuel(60);
        unit.setMaxFuel(60);
        unit.setBaseMovementPoints(5);
        unit.setVision(1)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_TANK_HEAVY", false);
        unit.loadSprite("FAI_TANK_HEAVY+mask", true);
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 2);
        animation.loadSprite(unitID, false, 2);
        animation.setSound("tank.wav", -2, "mods/MassCombat/sounds/");
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_TREAD";
    };
    this.getBaseCost = function()
    {
        return 16000;
    };
    this.getName = function()
    {
        return qsTr("Heavy Tank")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getDescription = function()
    {
        return qsTr("The Tank's oversized nephew. A big gun and thick armour make it a beast to fight, but it's low speed and high cost can be problematic.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_TANK_HEAVY = new Constructor();
