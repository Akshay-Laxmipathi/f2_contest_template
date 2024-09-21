/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let employee = { id: 4, name: "susan", age: "20", profession: "intern" };

let arr2 = [
  { id: 5, name: "jane", age: "21", profession: "developer" },
  { id: 6, name: "jill", age: "23", profession: "developer" },
  { id: 7, name: "charles", age: "22", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  console.log(
    arr.map((x) => {
      if (x.profession == "developer") {
        return x;
      }
    })
  );
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  console.log(
    arr.forEach((x) => {
      if (x.profession == "developer") {
        return x;
      }
    })
  );
}

function addData() {
  //Write your code here, just console.log
  arr = [...arr, employee];
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  console.log(
    arr.filter((x) => {
      if (x.profession != "admin") {
        return x;
      }
    })
  );
}

function concatenateArray() {
  //Write your code here, just console.log
  let cc = arr.concat(arr2);
  console.log(cc);
}
