var Constructor = function()
{
    this.init = function(unit)
    {
        unit.setWeapon1ID("WEP_FAI_ASM");

        unit.setMinRange(1);
        unit.setMaxRange(2);
        unit.setAmmo1(2);
        unit.setMaxAmmo1(2);

        unit.setFuel(70);
        unit.setMaxFuel(70);
        unit.setBaseMovementPoints(7);
        unit.setVision(2)
    };
    // called for loading the main sprite
    this.loadSprites = function(unit)
    {
        // load sprites
        unit.loadSprite("FAI_EKRANOPLAN", false);
        unit.loadSprite("FAI_EKRANOPLAN+mask", true);
    };
    this.startOfTurn = function(unit)
    {
        // pay unit upkeep
        var fuelCosts = 1 + unit.getFuelCostModifier(Qt.point(unit.getX(), unit.getY()), 1);
        if (fuelCosts < 0)
        {
            fuelCosts = 0;
        }
        unit.setFuel(unit.getFuel() - fuelCosts);
    };
    this.createExplosionAnimation = function(x, y, unit)
    {
        var animation = GameAnimationFactory.createAnimation(x, y);
        animation.addSprite("explosion+water", -map.getImageSize() / 2, -map.getImageSize(), 0, 1.5);
        audio.playSound("explosion+water.wav");
        return animation;
    };
    this.doWalkingAnimation = function(action)
    {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1.5);
        animation.loadSprite(unitID, false, 1.5);
        animation.setSound("moveship.wav", -2);
        return animation;
    };
    this.getMovementType = function()
    {
        return "MOVE_FAI_GEV";
    };
    this.getBaseCost = function()
    {
        return 17000;
    };
    this.getName = function()
    {
        return qsTr("Ekranoplan")
    };
    this.canMoveAndFire = function()
    {
        return true;
    };
    this.getTerrainAnimationBase = function(unit, terrain)
    {
        return "base_air";
    };

    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_sea";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_sea";
    };
    this.getLoadingPlace = function()
    {
        return 1;
    };
    this.getTransportUnits = function()
    {
        return ["FAI_TRUCK","FAI_AMPHIBTRUCK","FAI_IFV","FAI_AMPHIBIFV","FAI_FIELDARTY","FAI_FIELDAT","FAI_LIGHTTANK","FAI_SPAA","FAI_SPARTY","FAI_RECON","FAI_ARMORCAR","FAI_SUPPLYTRUCK","FAI_MECHINF","FAI_FOOTSOLDIER","FAI_ARV","FAI_DOZER","FAI_CASH_TRUCK"];
    };
    this.getDescription = function()
    {
        return qsTr("A plane that's also a boat but not quite! Very fast on water, they slow down a lot on land, and cannot enter dense terrain. Also carries a single attack's worth of Anti-Ship Missiles. Additionally, Ekranoplans can carry one light unit.");
    };
    this.getUnitType = function()
    {
        return GameEnums.UnitType_Naval;
    };
}

Constructor.prototype = UNIT;
var FAI_EKRANOPLAN = new Constructor();
