ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:cc-tweaked/${id}`;

        // -- REMOVED RECIPES -- //
    const RECIPES_TO_REMOVE = [
        cc('turtle_normal'),
        cc('computer_advanced'),
        cc('computer_advanced_upgrade'),
        cc('computer_normal'),
        cc('pocket_computer_normal'),
        cc('pocket_computer_advanced'),
        cc('pocket_computer_advanced_upgrade'),
        cc('turtle_advanced'),
        cc('turtle_advanced_upgrade'),
        cc('wireless_modem_normal'),
        cc('wireless_modem_advanced'),
        cc('cable'),
        cc('wired_modem'),
        cc('redstone_relay'),
        cc('monitor_normal'),
        cc('monitor_advanced'),
        cc('speaker'),
        cc('printer'),
        cc('disk_drive')
    ];
    RECIPES_TO_REMOVE.forEach(id => event.remove( {id: id} ));

    
    // -- COMPUTER -- //
    event.shaped(cc('computer_normal'), [
        'SSS',
        'SAS',
        'SFS'
    ],
    {
        S: mi('steel_plate'),
        F: mi('red_alloy_plate'),
        A: mi('analog_circuit'),

    })
    .id(mf('computer_normal'));

    // -- TURTLE -- //
    event.shaped(cc('turtle_normal'), [
        'SSS',
        'SCS',
        'SFS'
    ],
    {
        S: mi('steel_plate'),
        F: mi('red_alloy_plate'),
        C: cc('computer_normal'),

    })
    .id(mf('turtle_normal'));

    // -- POCKET COMPUTER -- //
    event.shaped(cc('pocket_computer_normal'), [
        'SGS',
        'SAS',
        'SFS'
    ],
    {
        S: mi('steel_plate'),
        F: mi('red_alloy_plate'),
        A: mi('analog_circuit'),
        G: '#c:glass_panes'

    })
    .id(mf('pocket_computer_normal'));

    // -- MONITOR -- //
    event.shaped(cc('monitor_normal'), [
        'SSS',
        'SLS',
        'GGG'
    ],
    {
        S: mi('steel_plate'),
        L: mc('redstone_lamp'),
        G: '#c:glass_panes'

    })
    .id(mf('monitor_normal'));

    // -- WIRELESS MODEM -- //
    event.shaped(cc('wireless_modem_normal'), [
        'SSS',
        'SES',
        'PEP'
    ],
    {
        S: mi('steel_plate'),
        E: mc('ender_pearl'),
        P: mr('red_alloy_wire')

    })
    .id(mf('wireless_modem_normal'));

    // -- ADVANCED COMPUTER -- //
    event.shaped(cc('computer_advanced'), [
        'AAA',
        'ACA',
        'EFE'
    ],
    {
        A: mi('aluminum_plate'),
        F: mi('red_alloy_block'),
        C: cc('computer_normal'),
        E: mi('electronic_circuit')

    })
    .id(mf('computer_advanced'));

    // -- ADVANCED TURTLE -- //
    event.shaped(cc('turtle_advanced'), [
        'AAA',
        'ACA',
        'EFE'
    ],
    {
        A: mi('aluminum_plate'),
        F: mi('red_alloy_block'),
        C: cc('turtle_normal'),
        E: mi('electronic_circuit')

    })
    .id(mf('turtle_advanced'));

    // -- ADVANCED POCKET COMPUTER -- //
    event.shaped(cc('pocket_computer_advanced'), [
        'AAA',
        'ACA',
        'EFE'
    ],
    {
        A: mi('aluminum_plate'),
        F: mi('red_alloy_block'),
        C: cc('pocket_computer_normal'),
        E: mi('electronic_circuit')

    })
    .id(mf('pocket_computer_advanced'));

    // -- ADVANCED MONITOR -- //
    event.shaped(cc('monitor_advanced'), [
        'PEP',
        'PFP',
        'PMP'
    ],
    {
        P: mi('electrum_plate'),
        F: mi('red_alloy_plate'),
        M: cc('monitor_normal'),
        E: mi('silicon_plate')

    })
    .id(mf('monitor_advanced'));

    // -- ADVANCED WIRELESS MODEM -- //
    event.shaped(cc('wireless_modem_advanced'), [
        'PEP',
        'PMP',
        'PEP'
    ],
    {
        M: cc('wireless_modem_normal'),
        E: mc('ender_eye'),
        P: mi('aluminum_wire')

    })
    .id(mf('wireless_modem_advanced'));

    // -- CABLE -- //
    event.shaped(Item.of(cc('cable'), 3), [
        'WWW',
        'MMM',
        'SSS'
    ],
    {
        M: mr('red_alloy_wire'),
        W: '#c:wools',
        S: mi('steel_plate')

    })
    .id(mf('cable'));

    // -- WIRED MODEM -- //
    event.shaped(cc('wired_modem'), [
        'SAS',
        'SMS',
        'SSS'
    ],
    {
        M: mr('red_alloy_wire'),
        A: mi('analog_circuit'),
        S: mi('steel_plate')

    })
    .id(mf('wired_modem'));

    // -- REDSTONE RELAY -- //
    event.shaped(cc('redstone_relay'), [
        'SAS',
        'PMP',
        'SPS'
    ],
    {
        M: cc('wired_modem'),
        A: mi('analog_circuit'),
        S: mi('steel_plate'),
        P: mi('red_alloy_plate')

    })
    .id(mf('redstone_relay'));

    // -- SPEAKER -- //
    event.shaped(cc('speaker'), [
        'SAS',
        'PNP',
        'SPS'
    ],
    {
        N: mc('note_block'),
        A: mi('analog_circuit'),
        S: mi('steel_plate'),
        P: mi('red_alloy_plate')

    })
    .id(mf('speaker'));

    // -- PRINTER -- //
    event.shaped(cc('printer'), [
        'SAS',
        'SPS',
        'SDS'
    ],
    {
        D: '#c:dyes',
        A: mi('analog_circuit'),
        S: mi('steel_plate'),
        P: mi('red_alloy_plate')

    })
    .id(mf('printer'));

    // -- DISK DRIVE -- //
    event.shaped(cc('disk_drive'), [
        'SAS',
        'SAS',
        'SPS'
    ],
    {
        A: mi('analog_circuit'),
        S: mi('steel_plate'),
        P: mc('paper')

    })
    .id(mf('disk_drive'));
   
})

