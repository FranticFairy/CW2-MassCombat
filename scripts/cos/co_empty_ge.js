CO_EMPTY_GE.getCODescription = function()
{
    return qsTr("An autocratic Empire infamous for it's ruthless military tactics. It has one of the largest standing armies in the world.");
};
CO_EMPTY_GE.getName = function()
{
    return qsTr("Tenaris Empire");
};
CO_EMPTY_GE.getBio = function()
{
    return qsTr("A blank CO for the Tenaris Empire.");
};
CO_EMPTY_GE.loadCOMusic = function(co)
{
    // put the co music in here.
    switch (co.getPowerMode())
    {
        case GameEnums.PowerMode_Power:
            audio.addMusic("resources/music/cos/power.mp3", 992, 45321);
            break;
        case GameEnums.PowerMode_Superpower:
            audio.addMusic("resources/music/cos/superpower.mp3", 1505, 49515);
            break;
        case GameEnums.PowerMode_Tagpower:
            audio.addMusic("resources/music/cos/tagpower.mp3", 14611, 65538);
            break;
        default:
            audio.addMusic("mods/MassCombat/music/cos/tenarisempire.mp3");
            break;
    }
};