import { getTables } from "@/services/getTableDatas";

export async function generateTableOptions(customerCount) {
	const response = await getTables();
	const tables = response.message;
	
	const groupedTables = await tables?.reduce((groups, table) => {
		if (!groups[table.category]) {
			groups[table.category] = [];
		}
		groups[table.category].push(table);
		return groups;
	}, {});
	return Object.entries(groupedTables)
		.filter(([category, tables]) =>
			tables.some(table => !table.status && table.capacity >= customerCount)
		)
		.map(([category, tables]) => (
			<optgroup key={category} label={category}>
				{tables
					.filter(table => !table.status && table.capacity >= customerCount)
					.map(table => (
						<option key={table.name} value={table.id}>
							{table.name} ({table.capacity} kursi)
						</option>
					))}
			</optgroup>
		));
};
