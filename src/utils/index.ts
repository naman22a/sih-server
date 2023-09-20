export const maxArgs = (nums: number[]): number => {
    const max = Math.max(...nums);
    let index = -1;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (max == num) {
            index = i;
            break;
        }
    }

    return index;
};
