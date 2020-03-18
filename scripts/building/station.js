var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            // none neutral player
            building.loadSprite("station", false);
            building.loadSprite("station+mask", true);
        }
        else
        {
            // neutral player
            building.loadSprite("station+neutral", false);
        }
    };
    this.getName = function()
    {
        return qsTr("Station");
    };
    this.addCaptureAnimationBuilding = function(animation, building, startColor, capturedColor)
    {
        animation.addBuildingSprite("station+mask", startColor , capturedColor, true);
        animation.addBuildingSprite("station", startColor , capturedColor, false);
    };

    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "ACTION_BUILD_UNITS";
    };

    this.getConstructionList = function(building)
    {
        return ["FAI_TRAIN_ARMOR","FAI_TRAIN_GUN","FAI_TRAIN_ELEC","FAI_TRAIN_DIESEL","FAI_CASH_TRAIN","FAI_TRAIN_SUPPLY"];
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_station";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_factory";
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Once captured can be used for ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("production and resupplying ") + "</div>" +
               "<r>" + qsTr("of ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("ground ") + "</div>" +
               "<r>" + qsTr("units.") + "</r>";
    };
}

Constructor.prototype = BUILDING;
var STATION = new Constructor();
