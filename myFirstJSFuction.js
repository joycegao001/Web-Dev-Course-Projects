function addNumbers(greetingName, ...numbers){
  let total = 0;
  for(index in numbers){
      total = total + numbers[index];
  }
  return console.log(`${greetingName}: the total cost is $${total}`);
  
}
  

addNumbers("Bob", 1,4,7,13)
