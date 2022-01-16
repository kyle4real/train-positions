import { useState } from "react";

const getSet = (resourceArr, target) => {
    return resourceArr.reduce((r, v) => r.add(v[target]), new Set());
};

const getMinMax = (resourceArr, target) => {
    if (!resourceArr.length) return [0, 0];
    return resourceArr.reduce(
        (r, v) => {
            let [curLowest, curHighest] = r;
            if (v[target] < curLowest) curLowest = v[target];
            if (v[target] > curHighest) curHighest = v[target];
            return [curLowest, curHighest];
        },
        Array.from({ length: 2 }, () => resourceArr[0][target])
    );
};

const useSearch = ({ resourceArr, filters }) => {
    const [filter, setFilter] = useState(null);

    const onFilterChange = ({ target, filterArr }) => {
        setFilter((p) => {
            const cpy = { ...p };
            if (filterArr === null) delete cpy[target];
            else cpy[target] = filterArr;
            if (!Object.keys(cpy).length) return null;
            else return cpy;
        });
    };

    const filterArr = filters.reduce((r, v) => {
        const { target, type, callback, label } = v;
        if (type === "byValue") {
            const optionsSet = getSet(resourceArr, target);
            return [
                ...r,
                {
                    label,
                    component: callback({
                        optionsSet,
                        onFilterChange: (filterArr) => onFilterChange({ target, filterArr }),
                        filterValues: filter?.[target] || null,
                    }),
                },
            ];
        } else {
            const minMax = getMinMax(resourceArr, target);
            return [
                ...r,
                {
                    label,
                    component: callback({
                        minMax,
                        onFilterChange: (filterArr) => onFilterChange({ target, filterArr }),
                        filterValues: filter?.[target] || null,
                    }),
                },
            ];
        }
    }, []);

    return { filterArr };
};

export default useSearch;
