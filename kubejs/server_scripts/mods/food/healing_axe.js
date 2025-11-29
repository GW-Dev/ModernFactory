// healing axe gives you saturation on right click
const /**@type {{uuid: {itemId: tick}}} */ playerPseudoCD = {}
ItemEvents.firstRightClicked('kubejs:healing_axe', event => {
    const cd = 200
    const {player, item, server} = event;
    const cdUntil = (playerPseudoCD[player.uuid] || {})[item.id]||0
    if(server.tickCount < cdUntil) return;
    player.potionEffects.add("saturation", 10, 0, false, false)
    player.addItemCooldown(item, cd)
    playerPseudoCD[player.uuid] = playerPseudoCD[player.uuid] || {}
    playerPseudoCD[player.uuid][item.id] = server.tickCount + cd
})