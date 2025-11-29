ServerEvents.tags('item', event => {

    event.add('c:ingots/red_alloy', mr('red_alloy_ingot'))
    event.add('c:ingots', mr('red_alloy_ingot'))

    const TYPES = [
        'dust',
        'tiny_dust',
        'ingot',
        'nugget',
        'block',
        'rod',
        'gear',
        'plate'
    ]

    const MATERIALS_NEW = [
        'red_alloy'
    ]

MATERIALS_NEW.forEach(MATERIALS_NEW => {
    TYPES.forEach(TYPES => {
        let item = mi(`${MATERIALS_NEW}_${TYPES}`)
        if (Item.exists(item)) {
            if (`${TYPES}` =='block') {
                event.add(`c:storage_${TYPES}s`, item)
                event.add(`c:storage_${TYPES}s/${MATERIALS_NEW}`, item)
            } else {
                event.add(`c:${TYPES}s`, item)
                event.add(`c:${TYPES}s/${MATERIALS_NEW}`, item)
            }
        }
    })
})
    
})