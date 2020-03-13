var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setMinRange(1);
        unit.setMaxRange(1);
        unit.setWeapon1ID("WEP_FAI_AIM");

        unit.setAmmo1(4);
        unit.setMaxAmmo1(4);
        unit.setFuel(40);
        unit.setMaxFuel(40);
        unit.setBaseMovementPoints(7);
        unit.setVision(5)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_STEALTHFIGHTER", false);
        unit.loadSprite("FAI_STEALTHFIGHTER+mask", true);
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_AIR";
    };
    this.getBaseCost = function()
    {
        return 19000;
    };
    this.getName = function()
    {
        return qsTr("Stealth Fighter")
    };
    this.startOfTurn = function(unit)
    {
        // pay unit upkeep
        var fuelCosts = 4;
        if (unit.getHidden())
        {
            fuelCosts += 2;
        }
        fuelCosts = fuelCosts + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), fuelCosts);
        if (fuelCosts < 0)
        {
            fuelCosts = 0;
        }
        unit.setFuel(unit.getFuel() - fuelCosts);
    };
    this.createExplosionAnimation = function(x, y, unit)
    {
        var animation = GameAnimationFactory.createAnimation(x, y);
        animation.addSprite("explosion+air", -map.getImageSize() / 2, -map.getImageSize(), 0, 1.5);
        audio.playSound("explosion+air.wav");
        return animation;
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1.5);
        animation.loadSprite(unitID, false, 1.5);
        animation.setSound("moveair.wav", -2);
        return animation;
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this unit can perform
        return "ACTION_FIRE,ACTION_STEALTH,ACTION_UNSTEALTH,ACTION_LOAD,ACTION_JOIN,ACTION_WAIT,ACTION_CO_UNIT_0,ACTION_CO_UNIT_1";
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.useTerrainDefense = function()
    {
        return false;
    };
    this.getTerrainAnimationBase = function(unit, terrain)
    {
        return "base_air";
    };

    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "";
    };
    this.getDescription = function()
    {
        return qsTr("The Anti-Plane Cousin of the Stealth Bomber, for sneakily raiding your enemy's transport planes. Also surprisingly good at scouting. It's low fuel means it's only good for quick scouting runs, however...");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Air;
    };
}

Constructor.prototype = UNIT;
var FAI_STEALTHFIGHTER = new Constructor();
