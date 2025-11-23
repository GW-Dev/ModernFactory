ServerEvents.recipes(event => {

    // bronze boots
    event.shaped(Item.of('kubejs:bronze_boots'),
    [   '   ',
        'A A',
        'A A'
    ],
    {A: '#c:ingots/bronze'}).id('kubejs:crafting/stone_age/bronze_boots')

    // bronze chestplate
    event.shaped(Item.of('kubejs:bronze_chestplate'),
    [   'A A',
        'AAA',
        'AAA'
    ],
    {A: '#c:ingots/bronze'}).id('kubejs:crafting/stone_age/bronze_chestplate')

    // bronze leggings
    event.shaped(Item.of('kubejs:bronze_leggings'),
    [   'AAA',
        'A A',
        'A A'
    ],
    {A: '#c:ingots/bronze'}).id('kubejs:crafting/stone_age/bronze_leggings')

    // bronze helmet
    event.shaped(Item.of('kubejs:bronze_helmet'),
    [   'AAA',
        'A A',
        '   '
    ],
    {A: '#c:ingots/bronze'}).id('kubejs:crafting/stone_age/bronze_helmet')

    // bronze pick
    event.shaped(Item.of('kubejs:bronze_pickaxe'),
    [   'AAA',
        ' B ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id('kubejs:crafting/stone_age/bronze_pickaxe')

    // bronze axe
    event.shaped(Item.of('kubejs:bronze_axe'),
    [   'AA ',
        'AB ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id('kubejs:crafting/stone_age/bronze_axe')

    // bronze shovel
    event.shaped(Item.of('kubejs:bronze_shovel'),
    [   ' A ',
        ' B ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id('kubejs:crafting/stone_age/bronze_shovel')

    // bronze sword
    event.shaped(Item.of('kubejs:bronze_sword'),
    [   ' A ',
        ' A ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id('kubejs:crafting/stone_age/bronze_sword')

    // bronze hoe
    event.shaped(Item.of('kubejs:bronze_hoe'),
    [   'AA ',
        ' B ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id('kubejs:crafting/stone_age/bronze_hoe')
})