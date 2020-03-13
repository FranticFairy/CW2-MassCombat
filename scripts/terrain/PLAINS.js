PLAINS.loadBaseSprite = function(terrain)
{
    var random = globals.randInt(0, 7);
    if(random >= 7) {
        terrain.loadBaseSprite("plains");   
    } else {
        terrain.loadBaseSprite("plains+" + random.toString());   
    }
};
PLAINS.loadOverlaySprite = function(terrain)
{
    
};

PLAINS.getTerrainSprites = function()
{
    // array of sprites that can be selected as fix sprites for this terrain
    return ["plains+0",
            "plains+1",
            "plains+2",
            "plains+3",
            "plains+4",
            "plains+5",
            "plains"];
};