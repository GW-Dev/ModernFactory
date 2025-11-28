RecipeViewerEvents.removeCategories(event => {
	//event.remove(mr('soldering'))
})

RecipeViewerEvents.removeEntries('item', event => {
    event.remove(mr('soldering_table'))
})