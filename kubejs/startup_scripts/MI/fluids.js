MIRegistrationEvents.registerFluids(event => {
    // -- WOOD TAR -- //
    event.register(
        'Wood Tar',
        'wood_tar',
        0x2a200e,
        'lava',
        false,
        'full'
    );

    // -- POLYTETRAFLUROETHYLENE -- //
    event.register(
        'Polytetrafluoroethylene',
        'polytetrafluoroethylene',
        0x454545,
        'lava',
        false,
        'full'
    );

    // -- TETRAFLUOROETHYLENE -- //
    event.register(
        'Tetrafluoroethylene',
        'tetrafluoroethylene',
        0x4c4c4c,
        'water',
        false,
        'high'
    )

    // -- HYDROFLOURIC ACID -- //
    event.register(
        'Hydrofluoric Acid',
        'hydrofluoric_acid',
        0x419ad2,
        'water',
        false,
        'medium'
    );

    // -- CHLOROFORM -- //
    event.register(
        'Chloroform',
        'chloroform',
        0xefefef,
        'water',
        false,
        'low'
    );

    // -- FLUORINE -- // 
    event.register(
        'Fluorine',
        'fluorine',
        0xe8fb97,
        'water',
        true,
        'low'
    );

    // -- LIQUID ENDER -- //
    event.register(
        'Liquid Ender',
        'liquid_ender',
        0x105e51,
        'water',
        false,
        'medium'
    );

    // -- MOLTEN ENDERIUM -- //
    event.register(
        'Molten Enderium',
        'molten_enderium',
        0x105e51,
        'lava',
        false,
        'high'
    );

    // -- NITRIC ACID -- //
    event.register(
        'Nitric Acid',
        'nitric_acid',
        0xfcf8c9,
        'water',
        true,
        'low'
    );

    // -- AMMONIA -- //
    event.register(
        'Ammonia',
        'ammonia',
        0xdee4e8,
        'water',
        true,
        'low'
    );
});