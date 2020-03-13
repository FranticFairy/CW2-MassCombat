var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            // none neutral player
            building.loadSprite("temporary_airport", false);
            building.loadSprite("temporary_airport+mask", true);
        }
        else
        {
            // neutral player
            building.loadSprite("temporary_airport+neutral", false);
        }
    };

    this.addCaptureAnimationBuilding = function(animation, building, startColor, capturedColor)
    {
        animation.addBuildingSprite("airport+mask", startColor , capturedColor, true);
        animation.addBuildingSprite("airport", startColor , capturedColor, false);
    };
    this.getName = function()
    {
        return qsTr("Temporary Airport");
    };
    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "";
    };
    this.getBaseIncome = function()
    {
        return 0;
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
    this.getDefense = function()
    {
        return 1;
    };

    this.getDescription = function()
    {
        return "<r>" + qsTr("Airport made by APC. ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("Resupplying ") + "</div>" +
               "<r>" + qsTr("of ") + "</r>" +
               "<div c='#00ff00'>" + qsTr("air ") + "</div>" +
               "<r>" + qsTr("units is possible.") + "</r>";
    };
}

Constructor.prototype = BUILDING;
var TEMPORARY_AIRPORT = new Constructor();
