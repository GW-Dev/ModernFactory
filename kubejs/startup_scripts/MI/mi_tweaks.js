let PRIMITIVE_FURNACE;

MIMachineEvents.registerRecipeTypes((event) =>
{
	PRIMITIVE_FURNACE = event.register("primitive_furnace")
		.withItemInputs()
		.withItemOutputs();
});

MITweaksMachineEvents.registerPowerlessMachines((event) =>
{
	event.singleblock(
		// English name, internal name
		"Primitive Furnace", "primitive_furnace",
		// Recipe type,
		PRIMITIVE_FURNACE,
		// Background height (or -1 for default value), progress bar
		186, event.progressBar(86, 45, "furnace"),
		// Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
		1, 1, 0, 0,
		// Capacity for fluid slots
		16,
		// Item slot positions
		(items) => items.addSlots(41, 45, 1, 1).addSlots(117, 45, 1, 1),
		// Fluid slot positions
		(fluids) =>
		{
		},
		// Casing of the machine, overlay folder, front overlay?, top overlay?, side overlay?
		"mud_bricks", "primitive_furnace", true, false, false,
		// Base recipe EU, allow redstone control module?
		1, false
	);
})