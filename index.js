const freelancers = [
    {
            name: "Alice",
            occupation: "Writer",
            price: 30,
            render: false
    },
    {
            name: "Bob",
            occupation: "Teacher",
            price: 50,
            render: false
    },
    {
        name:"Carol",
        Occupation:"Programmer",
        price:70,
        render:false,
    }
];

const bank = [{ name: "Tommy", occupation: "Driver", price: 70, render: false },
{ name: "Aaron", occupation: "Mechanical Engineer", render: false },
{ name: "Kyle", occupation: "Marketer", render: false },
{ name: "Chris", occupation: "Accountant", render: false },
{ name: "April", occupation: "Data Scientist", render: false },
{ name: "Kevin", occupation: "Writer", render: false },
{ name: "Mark", occupation: "Teacher", render: false },
{ name: "Tina", occupation: "Singer", render: false },
]


const Interval = setInterval(addFreelancers, 1000);

render();

function avgPrice() {
    return freelancers.reduce((acc, obj) => acc + obj.price, 0) / freelancers.length;
}

function render() {
    const table = document.querySelector("table tbody");
    freelancers.forEach(freelancer => {
            if (!freelancer.render) {
                    if (!freelancer.hasOwnProperty("price")) {
                            freelancer.price = Math.floor(Math.random() * (100 - 10) + 10);
                    }
                    const tablerow = document.createElement("tr");
                    for (let key in freelancer) {
                            if (key !== "render") {
                                    const tabledata = document.createElement("td");
                                    tabledata.innerText = `${key === "price" ? "$" : ""}${freelancer[key]}`;
                                    tablerow.appendChild(tabledata);
                            }
                    }
                    table.appendChild(tablerow);
                    freelancer.render = true;
            }
    })
    const avg = document.getElementById("average");
    avg.innerText = `The average starting price is \$${avgPrice().toFixed(2)}`;
}

function addFreelancers() {
    freelancers.push(bank.shift());
    render();
    if (bank.length === 0) {
            clearInterval(Interval);
    }
}
