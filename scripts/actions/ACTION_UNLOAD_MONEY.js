var Constructor = function()
{
    // called for loading the main sprite
    this.canBePerformed = function(action)
    {
        var unit = action.getTargetUnit();
        var actionTargetField = action.getActionTarget();
        var targetField = action.getTarget();
        if ((unit.getHasMoved() === true) ||
            (unit.getBaseMovementCosts(actionTargetField.x, actionTargetField.y) <= 0))
        {
            return false;
        }
        if ((actionTargetField.x === targetField.x) && (actionTargetField.y === targetField.y) ||
            (action.getMovementTarget() === null))
        {
            var building = action.getMovementBuilding();
            if ((building !== null))
            {
                unitID = unit.getUnitID();
                buildingID = building.getBuildingID();
                if((unitID == "FAI_CASH_TRUCK" && buildingID == "HQ") || (unitID == "FAI_CASH_PLANE" && (buildingID == "AIRPORT" || buildingID == "TEMPORARY_AIRPORT") ) || (unitID == "FAI_CASH_SHIP" && (buildingID == "HARBOUR" || buildingID == "TEMPORARY_HARBOUR")) || (unitID == "FAI_CASH_TRAIN" && buildingID == "STATION")) {
                }
                if(unit.getOwner().isEnemy(building.getOwner())) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        return false;
    };
    this.getActionText = function()
    {
        return qsTr("Transfer Money");
    };
    this.getIcon = function()
    {
        return "build";
    };
    this.isFinalStep = function(action)
    {
        return true;
    };
    
    this.postAnimationUnit = null;
    this.postAnimationTargetX = -1;
    this.postAnimationTargetY = -1;
    this.perform = function(action)
    {
        // we need to move the unit to the target position
        var unit = action.getTargetUnit();
        var animation = Global[unit.getUnitID()].doWalkingAnimation(action);
        var building = action.getMovementBuilding();
        animation.setEndOfAnimationCall("ACTION_UNLOAD_MONEY", "performPostAnimation");
        // move unit to target position
        unit.moveUnitAction(action);
        // disable unit commandments for this turn

        action.startReading();
        // read action data
        ACTION_UNLOAD_MONEY.postAnimationBuilding = building;
        ACTION_UNLOAD_MONEY.postAnimationTargetX = action.readDataInt32();
        ACTION_UNLOAD_MONEY.postAnimationTargetY = action.readDataInt32();
        ACTION_UNLOAD_MONEY.postAnimationUnit = unit;
    };
    this.performPostAnimation = function(postAnimation)
    {
        var building = ACTION_UNLOAD_MONEY.postAnimationBuilding;
        var unit = ACTION_UNLOAD_MONEY.postAnimationUnit;
        var owner = building.getOwner();
        owner.addFunds(unit.getCosts());

        unit.removeUnit();
        ACTION_UNLOAD_MONEY.postAnimationTargetX = -1;
        ACTION_UNLOAD_MONEY.postAnimationTargetY = -1;
        ACTION_UNLOAD_MONEY.postAnimationUnit = null;
        ACTION_UNLOAD_MONEY.postAnimationBuilding = null;
    }
}

Constructor.prototype = ACTION;
var ACTION_UNLOAD_MONEY = new Constructor();
