 // task -1: console log the secondary school location of Sophia 
  let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}


console.log(data.Sophia.study[1].secondary[0].school_name);





// task-2: console .log  output: Petersburg, Herry

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}

console.log(students['2222'].address['city'],students['3333'].name);






// task-3 : access and then show habluder adda
// show output Beginner
// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

console.log(data2.data[0].bookDetails.name);







//practice problem map(),filter(),find()

const numbers =[1,3,5,7,9];

const result = numbers.map(num=>num+1);
console.log(result)


//filter

const array = [33,50,79,78,60,30,101];

const output = array.filter(num=> num%10===0);
console.log(output);

//find()
const output2 = array.find(num=> num%10===0);
console.log(output2);


//practice problem filter ()

const instructor =[{name:'nadi', age:21,position:'senior'},
{name:'Akil', age:26,position:'junior'},
{name:'shabuj', age:30,position:'senior'}];


const insName=instructor.filter(ins => ins.position === 'senior');

console.log(insName )




// practice problem reduce ()

const people = [
{name:'Mena',age:20},
{name:'Rena',age:15},
{name:'Suchorita',age:22}];

const sum = people.reduce((p,c)=>p+c.age,0);
console.log(sum);