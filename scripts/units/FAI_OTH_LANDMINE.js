var Constructor = function () {
    this.init = function (unit) {
        unit.setAmmo1(0);
        unit.setMaxAmmo1(0);
        unit.setWeapon1ID("");

        unit.setAmmo2(0);
        unit.setMaxAmmo2(0);
        unit.setWeapon2ID("");

        unit.setFuel(0);
        unit.setMaxFuel(0);
        unit.setBaseMovementPoints(0);
        unit.setMinRange(0);
        unit.setMaxRange(0);
        unit.setVision(1);

        unit.setHidden(true);
    };
    // called for loading the main sprite
    this.loadSprites = function (unit) {
        // load sprites
        unit.loadSprite("FAI_OTH_LANDMINE", false);
        unit.loadSprite("FAI_OTH_LANDMINE+mask", true);
    };
    this.doWalkingAnimation = function (action) {
        var unit = action.getTargetUnit();
        var animation = GameAnimationFactory.createWalkingAnimation(unit, action);
        var unitID = unit.getUnitID().toLowerCase();
        animation.loadSprite(unitID + "+mask", true, 1);
        animation.loadSprite(unitID, false, 1);
        animation.setSound("movetank.wav", -2);
        return animation;
    };
    this.getMovementType = function () {
        return "MOVE_FAI_FOOT";
    };
    this.startOfTurn = function (unit) {
    };
    this.getName = function () {
        return qsTr("Landmine")
    };
    this.getLoadingPlace = function () {
        return 0;
    };
    this.getActions = function () {
        // returns a string id list of the actions this unit can perform
        return "";
    };
    this.getDescription = function () {
        return qsTr("Immobile but dangerous, Landmines deal 4 damage to any enemy land unit that comes in contact with it. They're permanently stealthed...");
    };
    this.getUnitType = function () {
        return GameEnums.UnitType_Ground;
    };
}

Constructor.prototype = UNIT;
var FAI_OTH_LANDMINE = new Constructor();
