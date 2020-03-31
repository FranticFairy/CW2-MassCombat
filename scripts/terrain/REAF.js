REAF.getName = function()
{
    return qsTr("Reef");
};
REAF.loadBaseSprite = function(terrain)
{
    terrain.loadBaseSprite("reef");   
};

REAF.init = function (terrain)
{
    terrain.setVisionHigh(0);
};