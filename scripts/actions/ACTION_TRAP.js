var Constructor = function () {
    // called for loading the main sprite
    this.canBePerformed = function (action) {
        return false;
    };
    // this action can't be performed by the player it's performed when moving over a stealthed unit by the game itself
    // it replaces the actual action that should have been performed
    this.perform = function (action) {
        // we need to move the unit to the target position
        var unit = action.getTargetUnit();
        var animation = Global[unit.getUnitID()].doWalkingAnimation(action);
        // move unit to target position
        unit.moveUnitAction(action);
        // disable unit commandments for this turn
        unit.setHasMoved(true);
        animation.setEndOfAnimationCall("ACTION_TRAP", "performPostAnimation");
        action.startReading();
        ACTION_TRAP.postAnimationTrapSignX = action.readDataInt32();
        ACTION_TRAP.postAnimationTrapSignY = action.readDataInt32();
        ACTION_TRAP.postAnimationUnit = unit;
    };
    this.postAnimationTrapSignX = -1;
    this.postAnimationTrapSignY = -1;
    this.postAnimationUnit = null;
    this.performPostAnimation = function (postAnimation) {
        var animation = GameAnimationFactory.createAnimation(ACTION_TRAP.postAnimationTrapSignX, ACTION_TRAP.postAnimationTrapSignY);
        animation.addSprite("trap", map.getImageSize() / 2, 0, 400, 1.5);
        animation.addText(qsTr("TRAP!"), map.getImageSize() / 2 + 25, 2, 1);
        audio.playSound("trap.wav");
        var trappedUnit = ACTION_TRAP.postAnimationUnit;
        var trappingUnit = map.getTerrain(ACTION_TRAP.postAnimationTrapSignX, ACTION_TRAP.postAnimationTrapSignY).getUnit();
        if (trappingUnit.getUnitID() == "FAI_OTH_SEAMINE") {
            var terrain = map.getTerrain(trappedUnit.getX(), trappedUnit.getY());
            if (terrain.getBaseTerrainID() === "SEA" &&
                trappedUnit.getUnitType() == GameEnums.UnitType_Naval &&
                trappedUnit.getUnitType() !== GameEnums.UnitType_Air) {

                if(trappedUnit.getUnitID() == "FAI_SHIP_SWEEP") {

                } else {
                    trappedUnit.setHp(trappedUnit.getHpRounded() - 4);
    
                    if (trappedUnit.getHp() <= 0) {
                        map.getGameRecorder().destroyedUnit(trappedUnit.getOwner().getPlayerID());
                        trappedUnit.killUnit();
                    }
                }

                var animation2 = GameAnimationFactory.createAnimation(ACTION_TRAP.postAnimationTrapSignX, ACTION_TRAP.postAnimationTrapSignY);
                animation2.addSprite("explosion+water", -map.getImageSize() / 2, -map.getImageSize(), 0, 1.5);
                audio.playSound("explosion+water.wav");
                trappingUnit.killUnit();
                map.getGameRecorder().destroyedUnit(trappingUnit.getOwner().getPlayerID());
            }
        } else if (trappingUnit.getUnitID() == "FAI_OTH_LANDMINE") {
            var terrain = map.getTerrain(trappedUnit.getX(), trappedUnit.getY());
            if (trappedUnit.getUnitType() != GameEnums.UnitType_Naval &&
                trappedUnit.getUnitType() !== GameEnums.UnitType_Air) {

                    if(trappedUnit.getUnitID() == "FAI_TANK_SWEEP") {
    
                    } else {
                        trappedUnit.setHp(trappedUnit.getHpRounded() - 4);
        
                        if (trappedUnit.getHp() <= 0) {
                            map.getGameRecorder().destroyedUnit(trappedUnit.getOwner().getPlayerID());
                            trappedUnit.killUnit();
                        }
                    }

                var animation2 = GameAnimationFactory.createAnimation(ACTION_TRAP.postAnimationTrapSignX, ACTION_TRAP.postAnimationTrapSignY);
                animation2.addSprite("explosion+land", -map.getImageSize() / 2, -map.getImageSize(), 0, 1.5);
                audio.playSound("explosion+land.wav");
                trappingUnit.killUnit();
                map.getGameRecorder().destroyedUnit(trappingUnit.getOwner().getPlayerID());
            }
        }
        ACTION_TRAP.postAnimationTrapSignX = -1;
        ACTION_TRAP.postAnimationTrapSignY = -1;
        ACTION_TRAP.postAnimationUnit = null;
    }
}

Constructor.prototype = ACTION;
var ACTION_TRAP = new Constructor();
