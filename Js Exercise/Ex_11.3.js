const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];

   function getNames (array) {
       const output = array.map(person => {
           return person.name;
       });
       return output;
   }
   console.log(getNames(data));

   function older (array) {
       let ouput = [];
       array.forEach(person => {
           person.birthday = person.birthday.split('-');
           if (person.birthday[2] < 1990){
               ouput.push(person);
           }
       });
       return ouput;
   }
   console.log(older(data));

   function foodCount (array){
       let obj = {};
       let foodArr = [];
       array.forEach(person =>{
           person.favoriteFoods.meats.forEach(food => {
            foodArr.push(food);
           });
           person.favoriteFoods.fish.forEach(food => {
            foodArr.push(food);
           });
       })
       let counter = 0;
       foodArr.forEach(food => {
            foodArr.forEach(otherFood => {
                if (food === otherFood)
                counter++;
            });
            obj[food] = counter;
            counter = 0;
       });
       return obj;
   }
   console.log(foodCount(data));