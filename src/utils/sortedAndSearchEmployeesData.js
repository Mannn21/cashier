export const sortedAndSearchEmployeesData = (employees, keyword, sort) => {
	if (typeof employees === "string") {
		return [];
	}

	const filteredData = employees?.filter(data => {
		return ["address", "name", "email"].some(
			prop =>
				data[prop] && data[prop].toLowerCase().includes(keyword.toLowerCase())
		);
	});

    const sortedData = filteredData?.slice().sort((a, b) => {
        if (sort === "upName") {
            return a.name.localeCompare(b.name);
        } else if (sort === "downName") {
            return b.name.localeCompare(a.name);
        }
    
        if (sort === "upSalary") {
            return a.salary - b.salary;
        } else if (sort === "downSalary") {
            return b.salary - a.salary;
        }
    
        if (sort === "upAge") {
            return a.age - b.age;
        } else if (sort === "downAge") {
            return b.age - a.age;
        }
    
        if (sort === "upJoin") {
            return new Date(a.startedAt) - new Date(b.startedAt);
        } else if (sort === "downJoin") {
            return new Date(b.startedAt) - new Date(a.startedAt);
        }
    
        return 0;
    });

	return sortedData;
};
