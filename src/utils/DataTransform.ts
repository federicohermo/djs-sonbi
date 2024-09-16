// src/utils/DataTransform.ts

/**
 * Automatically detects keys containing objects in arrays and converts them into arrays of values.
 *
 * @param items - The array of items to transform.
 * @returns A new array with any object-containing arrays transformed into arrays of values.
 */
export const transformNestedObjectsToArrays = (items: any[]): any[] => {
  return items.map(item => {
    const newItem = { ...item };

    Object.keys(newItem).forEach(key => {
      const value = newItem[key];

      // Check if the value is an array and its first element is an object
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && value[0] !== null) {
        // Convert the first object in the array to an array of its values
        newItem[key] = Object.values(value[0]);
      }
    });

    return newItem;
  });
};