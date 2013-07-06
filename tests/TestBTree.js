var btree = require("../src/BTree.js"), util = require("util");
(function () {
    var bt = new btree(2);

    function testInsert() {
        bt = new btree(3);
        bt.insert(10).insert(30).insert(20).insert(40).insert(55);//cause root split
        bt.insert(5)
        bt.insert(11)
        bt.insert(6);
        bt.insert(50).insert(65).insert(15).insert(22).insert(24).insert(26);
        console.log(bt.inspect());
    }

    function testDelete() {
        bt = new btree(3);
        bt.insert(10).insert(30).insert(20).insert(40).insert(55);//cause root split
        bt.insert(5)
        bt.insert(11)
        bt.insert(6);
        bt.insert(50).insert(65).insert(15)
        bt.insert(22).insert(24).insert(26).insert(27).insert(28).insert(29);
        bt.delete(20);
        bt.delete(26);
        bt.delete(6);
        console.log(bt.inspect());
    }

    /**
     * reduce height of the tree
     */
    function testDelete2(){
        var b=new btree(3);
        b.insert(10).insert(20).insert(15).insert(35).insert(18).insert(22);
        b.delete(20);
        b.delete(22);
        console.log(b.inspect());
    }

    /**
     * 3 level tree delete
     */
    function testDelete3(){
        var b=new btree(3);
        b.insert(10).insert(20).insert(15).insert(35).insert(18).insert(22);
        b.insert(99).insert(98).insert(97).insert(96).insert(95);
        b.insert(94)

        b.delete(98)
        b.delete(94)
        console.log(b.inspect());
        b.delete(22)
        console.log(b.inspect());

    }

    function testSearch(){
        console.log("*test search*")
        bt = new btree(4);
        bt.insert(10).insert(30).insert(20).insert(40).insert(55);//cause root split
        bt.insert(5)
        bt.insert(11)
        bt.insert(6);
        bt.insert(50).insert(65).insert(15)
        var n=bt.search(30);
        console.log(n);
    }

    (function runTests() {
        //testInsert()
        //testDelete()
        //testDelete2()
        testDelete3()
        //testSearch()
    })();

})();