export const updateObject = function (oldObject, newValues) {
    return {
        ...oldObject,
        ...newValues
    }
};
