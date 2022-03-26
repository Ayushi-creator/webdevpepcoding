//in javascript objects are basically key val pair

//to declare an object
// let obj={}//object declaration

// let person={
//     name:'Mohit',//here name is the key and string (Mohit) is the value
//     age:'20',
//     phone:'1234567890'
// }
// console.log(person);//{ name: 'Mohit', age: '20', phone: '1234567890' }

// let cap={
//     firstName:'steve',
//     lastName:"rogers",
//     freinds:['bucky','tony','dr banner',],
//     age:'102',
//     address:{
//         state:'Mahatam',
//         city:'new york'
//     },
//     sayHi:function(){
//         console.log('captain say hi')
//     }
// }
//console.log(cap)//{
//     firstName: 'steve',
//     lastName: 'rogers',
//     freinds: [ 'bucky', 'tony', 'dr banner' ],
//     age: '102',
//     address: { state: 'Mahatam', city: 'new york' },
//     sayHi: [Function: fn]
//   }
// console.log(cap.firstName);//access a property of an object//steve//dot notation
//bracket notation
//console.log(cap'[firstName]')//steve
//console.log('my best freind is',cap.freinds[0])//bucky
//console.log(cap.address.city)//new york
//cap.sayHi()//captain say hi

//loop---->for in loop
// let cap={
//     firstName:'steve',
//     lastName:"rogers",
//     freinds:['bucky','tony','dr banner',],
//     age:'102',
//     address:{
//         state:'Mahatam',
//         city:'new york'
//     },
//     sayHi:function(){
//         console.log('captain say hi')
//     }
// }
// for(let key in cap){
//     console.log('key: ','key',"value : ",cap[key])
//}//opt
//key:  key value :  steve
// key:  key value :  rogers
// key:  key value :  [ 'bucky', 'tony', 'dr banner' ]
// key:  key value :  102
// key:  key value :  { state: 'Mahatam', city: 'new york' }
// key:  key value :  [Function: sayHi]

//object manupulation

let cap={
        firstName:'steve',
        lastName:"rogers",
        freinds:['bucky','tony','dr banner',],
        age:'102',
        isAvenger:true,
        address:{
            state:'Mahatam',
            city:'new york'
        },
        sayHi:function(){
            console.log('captain say hi')
        }
    }
//     cap.isAvenger=false
//     console.log(cap);// opt{
    //     firstName: 'steve',
    //     lastName: 'rogers',
    //     freinds: [ 'bucky', 'tony', 'dr banner' ],
    //     age: '102',
    //     isAvenger: false,
    //     address: { state: 'Mahatam', city: 'new york' },
    //     sayHi: [Function: sayHi]
    //   }

    //add new property to an object

    // cap.movies=['Age of ultron','First avenger']
    // console.log(cap);
    //opt{
    //     firstName: 'steve',
    //     lastName: 'rogers',
    //     freinds: [ 'bucky', 'tony', 'dr banner' ],
    //     age: '102',
    //     isAvenger: true,
    //     address: { state: 'Mahatam', city: 'new york' },
    //     sayHi: [Function: sayHi],
    //     movies: [ 'Age of ultron', 'First avenger' ]
    //   }


//delete any property from object
// delete cap.age
// console.log(cap)
// opt//{
//     firstName: 'steve',
//     lastName: 'rogers',
//     freinds: [ 'bucky', 'tony', 'dr banner' ],
//     isAvenger: true,
//     address: { state: 'Mahatam', city: 'new york' },
//     sayHi: [Function: sayHi]
//   }





  