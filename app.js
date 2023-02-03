// console.log("Hello World");
// // alert("k xa prakwal ranamati");

// alert("hello" + " " + response);
// document bata items search garera tanya
// let output = document.querySelector("#output");
// console.log(output);
// output.innerText = "Tero breakup hunxa vaag !";

function calculate() {

    let name1 = yourName.value;
    let name2 = theirName.value;
    let singlePeople = ['rupesh', 'shyam', 'ram']
    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "ENTER THE COUPLES NAME!!"
    }
    else {
        if (singlePeople.includes(name1.toLowerCase())) {
            output.innerText = "SINGLE FOREVER!!";

        }
        else {
            let lovePercent = parseInt(Math.random() * 100)  // random no generate
            // console.log(name1, name2) multiple output at the same time
            let output = document.querySelector("#output");
            output.innerText = name1 + " " + name2 + " are  in " + lovePercent + "% love.❤️"

        }
        yourName.value = ""
        theirName.value = ""
    }

}
let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName");


