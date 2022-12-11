//1

function task1(){
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.innerHTML = "Show";
    document.body.appendChild(input);
    document.body.appendChild(button);
    button.addEventListener("click", function(){
        alert(input.value);
    });
};
task1();

//2

function task2(){
    const coords = document.createElement("div");
    coords.class = "coords";
    document.body.appendChild(coords);
    document.addEventListener("mousemove", function(event){
        let x = event.clientX;
        let y = event.clientY;
        coords.innerHTML = "X: " + x + ", Y: " + y;
    });    
};
task2();

//3

function task3(){
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.innerHTML = "Show";
    document.body.appendChild(input);
    document.body.appendChild(button);
    button.addEventListener("click", function(){
        const img = document.createElement("img");
        img.src = input.value;
        document.body.appendChild(img);
    });
};
task3();

//4

function task4(){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const button = document.createElement("button");
    button.innerHTML = "Remove";
    document.body.appendChild(button);
    console.log(numbers);
    button.addEventListener("click", function(){
        numbers.pop();
        console.log(numbers);
    });
};
task4();

//5

function task5(){
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    const button3 = document.createElement("button");
    const button4 = document.createElement("button");
    button1.innerHTML = "black";
    button2.innerHTML = "green";
    button3.innerHTML = "red";
    button4.innerHTML = "blue";
    document.body.appendChild(button1);
    document.body.appendChild(button2);
    document.body.appendChild(button3);
    document.body.appendChild(button4);
    button1.addEventListener("mouseover", function(){
        document.body.style.backgroundColor = "black";
    });
    button2.addEventListener("mouseover", function(){
        document.body.style.backgroundColor = "green";
    });
    button3.addEventListener("mouseover", function(){
        document.body.style.backgroundColor = "red";
    });
    button4.addEventListener("mouseover", function(){
        document.body.style.backgroundColor = "blue";
    });
};
task5();

//6

function task6(){
    const colors = ["red", "green", "blue", "orange", "pink", "purple"];
    setInterval(function(){
        const color = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = color;
    }, 2000);    
};
task6();
