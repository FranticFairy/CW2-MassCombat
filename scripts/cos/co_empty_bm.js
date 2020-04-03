CO_EMPTY_BM.getCODescription = function()
{
    return qsTr("One of the few superpowers in the world, the Parlin Republic is famous for it's merchants and it's powerful navy.");
};
CO_EMPTY_BM.getName = function()
{
    return qsTr("Parlin Republic");
};
CO_EMPTY_BM.getBio = function()
{
    return qsTr("A blank CO for the Parlin Republic.");
};
CO_EMPTY_BM.loadCOMusic = function(co)
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
            audio.addMusic("mods/MassCombat/music/cos/parlinrepublic.mp3");
            break;
    }
};