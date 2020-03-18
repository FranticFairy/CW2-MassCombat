var Constructor = function()
{
    // called for loading the main sprite
    this.loadSprites = function(building, neutral)
    {
        if (building.getOwnerID() >= 0 && !neutral)
        {
            // none neutral player
            building.loadSprite("factory", false);
            building.loadSprite("factory+mask", true);
        }
        else
        {
            // neutral player
            building.loadSprite("factory+neutral", false);
        }
    };
    this.getName = function()
    {
        return qsTr("Base");
    };
    this.addCaptureAnimationBuilding = function(animation, building, startColor, capturedColor)
    {
        animation.addBuildingSprite("factory+mask", startColor , capturedColor, true);
        animation.addBuildingSprite("factory", startColor , capturedColor, false);
    };

    this.getActions = function()
    {
        // returns a string id list of the actions this building can perform
        return "ACTION_BUILD_UNITS";
    };

    this.getConstructionList = function(building)
    {
        return ["FAI_TRANS_TRUCK","FAI_UTIL_SUPPLY","FAI_TRANS_HALFT","FAI_TRANS_AMPHI","FAI_IFV","FAI_IFV_AMPHI","FAI_IFV_HEAVY","FAI_GUN_ARTY","FAI_GUN_AT","FAI_TANK_LIGHT","FAI_TANK_BATTLE","FAI_TANK_HEAVY","FAI_SUPP_SPAA","FAI_SUPP_SPARTY","FAI_LAUNCHER_SAM","FAI_LAUNCHER_WMD","FAI_LAUNCHER_RKT","FAI_LAUNCHER_ASM","FAI_SUPP_RECON","FAI_SUPP_ARMORCAR","FAI_UTIL_AVLB","FAI_UTIL_ARV","FAI_UTIL_DOZER","FAI_CASH_TRUCK","FAI_TRANS_SCREW"];
    };
    this.getTerrainAnimationForeground = function(unit, terrain)
    {
        return "fore_factory";
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
var FACTORY = new Constructor();
