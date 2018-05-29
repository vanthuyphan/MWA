Array.prototype.isDual = () => {
    if (this.length == 0) return 1
    const hasEvenNumberOfElements = (this.length % 2) == 0;
    if (!hasEvenNumberOfElements) {
        return 0;
    } else {
        const sum = this[0] + this[1];
        for (let i = 2 ; i < this.length; i = i + 2) {
            let nextSum = this[i] + this[i + 1];
            if (nextSum != sum) {
                return 0;
            }
        }
        return 1;
    }
}

const test1 = [1, 2, 3, 0].isDual();
const test2 = [1, 2, 2, 1, 3, 0].isDual();
const test3 = [1, 1, 2, 2].isDual();
const test4 = [1, 2, 3].isDual();
const test5 = [].isDual();
if (test1 == 1 && test2 == 1 && test3 == 0 && test4 == 0 && test5 == 1) {
    console.log("All test cases passed");
} else {
    console.log("Test1", test1);
    console.log("Test2", test2);
    console.log("Test3", test3);
    console.log("Test4", test4);
    console.log("Test5", test5);
}
