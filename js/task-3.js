const findBestEmployee = function(employees) {
  
  const nameValue = Object.entries(employees)

    let workEmploy = [];
    let nameEmploy = [];

  for (const value of nameValue) {

    if (value[1] < workEmploy) {
      continue;      
    }
      
    if (value[1] > workEmploy)
      
    workEmploy = value[1];
    nameEmploy = value[0];    
  }
  
  return nameEmploy;
};


console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux