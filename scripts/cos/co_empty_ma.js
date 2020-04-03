CO_EMPTY_MA.getCODescription = function()
{
    return qsTr("An unusual organization headed by a group of scientists, the Steel League is is the forerunner in military-grade AI.");
};
CO_EMPTY_MA.getName = function()
{
    return qsTr("Steel League");
};
CO_EMPTY_MA.getBio = function()
{
    return qsTr("A blank CO for the Steel League.");
};
CO_EMPTY_MA.loadCOMusic = function(co)
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
            audio.addMusic("mods/MassCombat/music/cos/steellegion.mp3");
            break;
    }
};