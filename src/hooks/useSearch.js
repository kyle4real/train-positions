import { useMemo, useState } from "react";

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
    const [filterObj, setFilterObj] = useState(null);

    const filtersIndexHash = useMemo(() => {
        return filters.reduce((r, v, i) => ({ ...r, [v.target]: i }), {});
    }, [filters]);

    const onFilterChange = ({ target, filterArr }) => {
        setFilterObj((p) => {
            const cpy = { ...p };
            if (filterArr === null) delete cpy[target];
            else cpy[target] = filterArr;
            if (!Object.keys(cpy).length) return null;
            else return cpy;
        });
    };

    const searchedArr = useMemo(() => {
        if (!resourceArr) return null;
        let newResourceArr = resourceArr;
        if (!!filterObj) {
            const targetKeys = Object.keys(filterObj);
            newResourceArr = newResourceArr.filter((resource) => {
                let filter = true;
                targetKeys.forEach((targetKey) => {
                    const { type } = filters[filtersIndexHash[targetKey]];
                    const targetValue = resource[targetKey];
                    if (type === "byValue") {
                        const filterValues = filterObj[targetKey];
                        filterValues.forEach((value) => {
                            if (value === targetValue) filter = false;
                        });
                    } else if (type === "range") {
                        const [min, max] = filterObj[targetKey];
                        if (targetValue < min || targetValue > max) filter = false;
                    }
                });
                return filter;
            });
        }
        return newResourceArr;
    }, [resourceArr, filterObj, filters, filtersIndexHash]);

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
                        filterValues: filterObj?.[target] || null,
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
                        filterValues: filterObj?.[target] || null,
                    }),
                },
            ];
        }
    }, []);

    return { searchedArr, filterArr };
};

export default useSearch;
