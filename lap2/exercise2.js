const find = function(filename) {
    return (tree) => {
        if (tree.files.indexOf(filename) > -1) {
            return true;
        }
        return tree.subFolders.some((subtree) => {
            return find(filename)(subtree);
        })
    }
}
const tree = {
    name : "home",
    files : ["notes.txt","todo.txt"],
    subFolders: [
        { name : "payroll",
            files : ["paper.pdf","funds.csv"],
            subFolders: []
        },
        { name: "misc",
            files : ["summer1.jpg","summer2.jpg", "summer3.jpg"],
            subFolders: [
                { name : "logs",
                    files : ["logs1","logs2","logs3","logs4"],
                    subFolders: []
                }]
        }]
};

const test1 = find("paper.pdf")(tree);
const test2 = find("summer2.jpg")(tree);
const test3 = find("randomfile")(tree);

if (test1 == true &&  test2 == true && test3 == false) {
    console.log("All tests passed. You're done");
} else {
    console.log("There are test failed");
    console.log("Test1", test1);
    console.log("Test2", test2);
    console.log("Test3", test3);
}