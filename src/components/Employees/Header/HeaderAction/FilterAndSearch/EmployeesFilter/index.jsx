"use client"

import Icon from '@mdi/react';
import { mdiFilterVariant } from '@mdi/js';

const EmployeesFilter = () => {
    return (
        <div className="w-full h-auto">
            <div className="w-full h-auto p-2">
                <button type="button" className="w-auto h-auto p-2 flex flex-row justify-center items-center gap-2 border border-color-tersier3 rounded-md text-color-dark hover:border-color-secondary1hover hover:bg-color-secondary1hover hover:text-color-primer transition-all ease-in-out duration-300">
                    <Icon path={mdiFilterVariant} size={1} />
                    Filter
                </button>
            </div>
        </div>
    )
}

export default EmployeesFilter;