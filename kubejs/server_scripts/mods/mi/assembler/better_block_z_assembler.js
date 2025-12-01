ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/assembler/better_block_z/${id}`;
    
    const DYE_COLORS = [
        'white',
        'light_gray',
        'gray',
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'cyan',
        'light_blue',
        'blue',
        'purple',
        'magenta',
        'pink'
    ]

     DYE_COLORS.forEach((dye, index) => {
        event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('8x ' + bz('eclipse_blockz_0'))
            .itemIn('1x ' + bz(`cyberlight_blockz_${index}`))
            .itemOut('8x ' + bz(`zeon_${dye}_blockz_0`))
            .id(mf(`zeon_${dye}_blockz_0`))

        event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('4x ' + mc('gravel'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz(`zeno_${dye}_blockz_0`))
            .id(mf(`zeno_${dye}_blockz_0`))

    })

    event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('2x ' + mc('iron_ingot'))
            .itemIn('1x ' + mc('gold_ingot'))
            .itemIn('4x ' + bz('blockz_core'))
            .fluidIn('1000x ' + mc('water'))
            .fluidIn('1000x ' + mc('lava'))
            .itemOut('1x ' + bz('transmuter_blockz'))
            .id(mf('cobblestone_transmuter'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('4x ' + mc('stone'))
            .itemIn('4x ' + mc('cobblestone'))
            .itemIn('1x ' + mc('smooth_stone'))
            .itemOut('8x ' + bz('blockz_core'))
            .id(mf('blockz_core'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('8x ' + mc('cobblestone'))
            .itemIn('1x ' + bz('blockz_core'))
            .itemOut('16x ' + bz('stone_blockz'))
            .id(mf('blockz_stone'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('4x #c:dyes')
            .itemIn('1x ' +mc('glass'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('16x ' + bz('aurora_blockz'))
            .id(mf('blockz_aurora'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('5x ' + bz('blockz_core'))
            .itemOut('5x ' + bz('variant_shuffler'))
            .id(mf('variant_shuffler'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('4x ' + mc('glowstone_dust'))
            .itemIn('4x ' + mc('glass'))
            .itemIn('1x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('flat_lamp'))
            .id(mf('flat_lamp'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('4x ' + mc('stone'))
            .itemIn('5x ' + bz('zeno_white_blockz_0'))
            .itemOut('8x ' + bz('zenohex_blockz_0'))
            .id(mf('zeno_hex_white'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('2x ' + bz('cyberlight_alt_blockz_0'))
            .itemOut('1x ' + bz('cyberlight_bar_vertical_0'))
            .id(mf('cyberlight_bar_vertical_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + bz('cyberlight_blockz_0'))
            .itemOut('1x ' + bz('cyberlight_thin_0'))
            .id(mf('cyberlight_thin_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + bz('cyberlight_alt_blockz_0'))
            .itemOut('1x ' + bz('cyberlight_thin_alt_0'))
            .id(mf('cyberlight_thin_alt_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('2x ' + bz('cyberlight_alt_blockz_0'))
            .itemOut('1x ' + bz('cyberlight_bar_0'))
            .id(mf('cyberlight_bar_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('copper_ingot'))
            .itemIn('4x ' + mc('stone'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('forgecopper_blockz_0'))
            .id(mf('forgecopper_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('iron_ingot'))
            .itemIn('4x ' + mc('cobbled_deepslate'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('ironslate_blockz_0'))
            .id(mf('ironslate_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('iron_ingot'))
            .itemIn('4x ' + mc('deepslate'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('ironslate_blockz_0'))
            .id(mf('ironslate_blockz_0_alt'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('crimson_fungus'))
            .itemIn('8x ' + bz('ironslate_blockz_0'))
            .itemOut('8x ' + bz('crimson_blockz_0'))
            .id(mf('crimson_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('crimson_stem'))
            .itemIn('8x ' + bz('ironslate_blockz_0'))
            .itemOut('8x ' + bz('crimson_blockz_0'))
            .id(mf('crimson_blockz_0_alt'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('redstone'))
            .itemIn('8x ' + bz('ironslate_blockz_0'))
            .itemOut('8x ' + bz('ironslateredstone_blockz_0'))
            .id(mf('ironslateredstone_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('4x ' + mc('yellow_dye'))
            .itemIn('5x ' + bz('ironslate_blockz_0'))
            .itemOut('8x ' + bz('hazard_blockz_0'))
            .id(mf('hazard_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x #c:coal')
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('eclipse_blockz_0'))
            .id(mf('eclipse_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('green_dye'))
            .itemIn('8x ' + bz('eclipse_blockz_0'))
            .itemOut('8x ' + bz('armz_blockz_0'))
            .id(mf('armz_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('iron_ingot'))
            .itemIn('4x ' + mc('quartz'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('16x ' + bz('synthalloy_blockz_0'))
            .id(mf('synthalloy_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('orange_dye'))
            .itemIn('8x ' + bz('synthalloy_blockz_0'))
            .itemOut('8x ' + bz('ambercore_blockz_0'))
            .id(mf('ambercore_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('white_dye'))
            .itemIn('8x ' + bz('synthalloy_blockz_0'))
            .itemOut('8x ' + bz('lablink_blockz_0'))
            .id(mf('lablink_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('glowstone_dust'))
            .itemIn('4x ' + mc('glass'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('cyberlight_blockz_0'))
            .id(mf('cyberlight_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('iron_ingot'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('iron_blockz_0'))
            .id(mf('iron_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('copper_ingot'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('copper_blockz_0'))
            .id(mf('copper_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('gold_ingot'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('gold_blockz_0'))
            .id(mf('gold_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('diamond'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('diamond_blockz_0'))
            .id(mf('diamond_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('glowstone_dust'))
            .itemIn('4x ' + mc('glass'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('cyberlight_alt_blockz_0'))
            .id(mf('cyberlight_alt_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + bz('aurora_blockz'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('agon_blockz_0'))
            .id(mf('agon_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('ice'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('lave_blockz_0'))
            .id(mf('lave_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('slime_ball'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('mint_blockz_0'))
            .id(mf('mint_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .fluidIn('100x ' + mi('acrylic_glue'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('mint_blockz_0'))
            .id(mf('mint_blockz_0_alt'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x #c:mushrooms')
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('myst_blockz_0'))
            .id(mf('myst_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('ghast_tear'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('vect_blockz_0'))
            .id(mf('vect_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('ender_pearl'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('vena_blockz_0'))
            .id(mf('vena_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('lapis_lazuli'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('azur_blockz_0'))
            .id(mf('azur_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('gold_ingot'))
            .itemIn('4x ' + mc('stone'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('jelt_blockz_0'))
            .id(mf('jelt_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('iron_ingot'))
            .itemIn('4x ' + mc('blackstone'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('korp_blockz_0'))
            .id(mf('korp_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x #c:coal')
            .itemIn('4x ' + bz('aurora_blockz'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('bitt_blockz_0'))
            .id(mf('bitt_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('sugar_cane'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('reed_blockz_0'))
            .id(mf('reed_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('clay'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('cray_blockz_0'))
            .id(mf('cray_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('4x #c:coal')
            .itemIn('1x ' + mc('iron_ingot'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('16x ' + bz('ztyl_blockz_0'))
            .id(mf('ztyl_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + bz('aurora_blockz'))
            .itemIn('8x ' + bz('ztyl_blockz_10'))
            .itemOut('8x ' + bz('iszm_blockz_0'))
            .id(mf('iszm_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + bz('aurora_blockz'))
            .itemIn('8x ' + bz('ztyl_blockz_8'))
            .itemOut('8x ' + bz('fort_blockz_0'))
            .id(mf('fort_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + bz('aurora_blockz'))
            .itemIn('8x ' + bz('ztyl_blockz_9'))
            .itemOut('8x ' + bz('zane_blockz_0'))
            .id(mf('zane_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('4x ' + mc('stone'))
            .itemIn('5x ' + bz('ztyl_blockz_0'))
            .itemOut('8x ' + bz('zoea_blockz_0'))
            .id(mf('zoea_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('crimson_fungus'))
            .itemIn('4x ' + mc('netherrack'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('lairblood_blockz_0'))
            .id(mf('lairblood_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('rotten_flesh'))
            .itemIn('4x ' + mc('netherrack'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('lairflesh_blockz_0'))
            .id(mf('lairflesh_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('nether_wart'))
            .itemIn('4x ' + mc('netherrack'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('lairhusk_blockz_0'))
            .id(mf('lairhusk_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('brown_mushroom'))
            .itemIn('4x ' + mc('netherrack'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('lairdecay_blockz_0'))
            .id(mf('lairdecay_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('spider_eye'))
            .itemIn('4x ' + mc('netherrack'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('lairstain_blockz_0'))
            .id(mf('lairstain_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + bz('aurora_blockz'))
            .itemIn('8x ' + mc('glass'))
            .itemOut('8x ' + bz('tintedglass_blockz_0'))
            .id(mf('tintedglass_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('stone'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('stone_blockz_0'))
            .id(mf('stone_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + bz('aurora_blockz'))
            .itemIn('4x ' + mc('paper'))
            .itemIn('4x ' + bz('blockz_core'))
            .itemOut('16x ' + bz('number_blockz_0'))
            .id(mf('number_blockz_0'))

    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('obsidian'))
            .itemIn('8x ' + bz('blockz_core'))
            .itemOut('8x ' + bz('tank_blockz_0'))
            .id(mf('tank_blockz_0'))

})