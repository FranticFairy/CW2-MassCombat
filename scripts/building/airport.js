var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            // none neutral player
            building.loadSprite("airport", false);
            building.loadSprite("airport+mask", true);
        }
        else
        {
            // neutral player
            building.loadSprite("airport+neutral", false);
        }
    };

    this.addCaptureAnimationBuilding = function(animation, building, startColor, capturedColor)
    {
        animation.addBuildingSprite("airport+mask", startColor , capturedColor, true);
        animation.addBuildingSprite("airport", startColor , capturedColor, false);
    };
    this.getName = function()
    {
        return qsTr("Airport");
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "ACTION_BUILD_UNITS";
    };

    this.getConstructionList = function(building)
    {
        return ["FAI_GUNSHIP","FAI_HELIINF","FAI_HELIVHC","FAI_FIGHTER","FAI_SEAPLANE","FAI_STEALTHFIGHTER","FAI_AEWC","FAI_BOMBER","FAI_TANKBUSTER","FAI_STEALTHBOMBER","FAI_TRANSPLANE","FAI_CASH_PLANE"];
    };

    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_airport";
    };

    this.getTerrainAnimationBackground = function(unit, terrain)
    {
        return "back_airport";
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Once captured can be used for ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("production and resupplying") + "</div>" +
               "<r>" + qsTr(" of ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("air") + "</div>" +
               "<r>" + qsTr(" units.") + "</r>";
    };
}

Constructor.prototype = BUILDING;
var AIRPORT = new Constructor();
