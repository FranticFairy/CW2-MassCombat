CO_EMPTY_BG.getCODescription = function()
{
    return qsTr("[REDACTED]");
};
CO_EMPTY_BG.getName = function()
{
    return qsTr("Sol Confederacy");
};
CO_EMPTY_BG.getBio = function()
{
    return qsTr("A blank CO for the Sol Confederacy.");
};
CO_EMPTY_BG.loadCOMusic = function(co)
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
            audio.addMusic("mods/MassCombat/music/cos/solconfederacy.mp3");
            break;
    }
};