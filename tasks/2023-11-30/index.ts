interface Mineral {
	value: number;
	mass: number;
}

export function optimizeLoad(minerals: Mineral[], maxMass: number): Mineral[] {
	const sortedMinerals = minerals.sort(
		(mineralA, mineralB) =>
			getValueToMassRatio(mineralB) - getValueToMassRatio(mineralA)
	);

	let currentMass = 0;
	const load: Mineral[] = [];
	for (const mineral of sortedMinerals) {
		if (currentMass + mineral.mass <= maxMass) {
			load.push(mineral);
			currentMass += mineral.mass;
		}
	}

	return load;
}

function getValueToMassRatio(mineral: Mineral): number {
	return mineral.value / mineral.mass;
}
