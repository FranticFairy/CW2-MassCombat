CO_EMPTY_YC.getCODescription = function()
{
    return qsTr("An international paramilitary organization, the Wolves' Pact has members in almost all nations, and are often hired by multiple nations to do espionage, sabotage and guerilla warfare.");
};
CO_EMPTY_YC.getName = function()
{
    return qsTr("Wolves' Pact");
};
CO_EMPTY_YC.getBio = function()
{
    return qsTr("A blank CO for the Wolves' Pact.");
};
CO_EMPTY_YC.loadCOMusic = function(co)
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
            audio.addMusic("mods/MassCombat/music/cos/wolvespact.mp3");
            break;
    }
};