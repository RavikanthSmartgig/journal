function add(num1: number, num2: number) {
    return num1 + num2;
  }
  let result=0
  function addItem(num:number) {
      result = result + num;
    }
  
  function addMulti(num1: number, ...list: number[]) {
    console.log("num1", num1);
    console.log("rest", list);
    let result = 0;
    list.forEach(addItem);
  
    return num1 + result;
  }
  // console.log("multi add",addMulti(1,4,6,7,8))
  
  // const result = add(2,5);
  // const result1 = add(30,35);
  
  // console.log("result",result);
  // console.log("result1",result1);
  const MIN_WIDTH = 100;
  
  function getWidthOfScreen(screenType: "Small" | "Medium" | "Large") {
     
    if (screenType == "Small") return MIN_WIDTH + 10;
    if (screenType == "Medium") {
      return MIN_WIDTH + 50;
    }
    return MIN_WIDTH + 100;
  }
  
  // console.log("small",getWidthOfScreen("Small"))
  // console.log("medium",getWidthOfScreen("Medium"))
  // console.log("large",getWidthOfScreen("Large"))
  
  
  function multipleNumber(number:number){
      return function (number2:number){
          return number2*number
      }
  }
  // function multipleNumber(number:number){
  //     return  (number2:number)=>{
  //         return number2*number
  //     }
  // }
  // const doubleNumber=(number2:number)=>{
  //     return number2*2
  // }
  const doubleNumber= multipleNumber(2)
  console.log("doubleNumber function",multipleNumber(3)(8))
  const threNumber= multipleNumber(3)
  const nNumber= multipleNumber(100)
  
  console.log("doubleNumber",doubleNumber(4))
  console.log("threNumber",threNumber(4))
  console.log("nNumber",nNumber(4))
  
  
  
  
  
  
  export {};
  