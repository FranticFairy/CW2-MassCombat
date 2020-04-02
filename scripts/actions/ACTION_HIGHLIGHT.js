var Constructor = function()
{
    // called for loading the main sprite
    this.canBePerformed = function(action)
    {
        return true;
    };
    
    this.getActionText = function()
    {
        return qsTr("Highlight Unmoved");
    };
    this.getIcon = function()
    {
        return "help";
    };
    this.isFinalStep = function(action)
    {
        if (action.getInputStep() === 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    };
    this.perform = function(action)
    {
    };
    this.getStepCursor = function(action, cursorData)
    {
    };
    this.getStepData = function(action, data)
    {
        var units = map.getCurrentPlayer().getUnits();
        for (var i = 0; i < units.size(); i++)
        {
            var unit = units.at(i);
            if (unit.getHasMoved() === false && unit.getUnitID() !== "FAI_OTH_SEAMINE" && unit.getUnitID() !== "FAI_OTH_LANDMINE")
            {
                data.addPoint(Qt.point(unit.getX(), unit.getY()));
            }
        }
        data.setShowZData(false);
        data.setColor("#C8FFFFFF");
        units.remove();
    };
    this.getStepInputType = function(action)
    {
        return "FIELD";
    };
}

Constructor.prototype = ACTION;
var ACTION_HIGHLIGHT = new Constructor();
