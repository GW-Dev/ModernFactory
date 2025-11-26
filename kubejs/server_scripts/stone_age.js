ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:stone_age/${id}`;


    // bronze boots
    event.shaped(Item.of(kj('bronze_boots')),
    [   '   ',
        'A A',
        'A A'
    ],
    {A: '#c:ingots/bronze'}).id(mf('bronze_boots'))

    // bronze chestplate
    event.shaped(Item.of(kj('bronze_chestplate')),
    [   'A A',
        'AAA',
        'AAA'
    ],
    {A: '#c:ingots/bronze'}).id(mf('bronze_chestplate'))

    // bronze leggings
    event.shaped(Item.of(kj('bronze_leggings')),
    [   'AAA',
        'A A',
        'A A'
    ],
    {A: '#c:ingots/bronze'}).id(mf('bronze_leggings'))

    // bronze helmet
    event.shaped(Item.of(kj('bronze_helmet')),
    [   'AAA',
        'A A',
        '   '
    ],
    {A: '#c:ingots/bronze'}).id(mf('bronze_helmet'))

    // bronze pick
    event.shaped(Item.of(kj('bronze_pickaxe')),
    [   'AAA',
        ' B ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id(mf('bronze_pickaxe'))

    // bronze axe
    event.shaped(Item.of(kj('bronze_axe')),
    [   'AA ',
        'AB ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id(mf('bronze_axe'))

    // bronze shovel
    event.shaped(Item.of(kj('bronze_shovel')),
    [   ' A ',
        ' B ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id(mf('bronze_shovel'))

    // bronze sword
    event.shaped(Item.of(kj('bronze_sword')),
    [   ' A ',
        ' A ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id(mf('bronze_sword'))

    // bronze hoe
    event.shaped(Item.of(kj('bronze_hoe')),
    [   'AA ',
        ' B ',
        ' B '
    ],
    {
        A: '#c:ingots/bronze',
        B: '#c:rods/wooden'
    }).id(mf('bronze_hoe'))

    // starter bronze nugget recipe
    event.recipes.modern_industrialization.primitive_furnace(1, 400)
        .itemIn(mi('bronze_dust'))
        .itemOut(mi('bronze_nugget'))
        .adjacentBlock(mc('campfire'), 'below')
        .id(mf('first_bronze'))
})