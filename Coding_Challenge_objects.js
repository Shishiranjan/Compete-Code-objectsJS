const Mark = {
    FullName: 'Mark Miller',
    Mass:78,
    Height: 1.69,
    
    calcBMI: function()
    {
    this.BMI = this.Mass/(this.Height*2);
    return this.BMI;
}
};
console.log(Mark.calcBMI());

const John = {
  FullName: 'John Smith',
  Mass: 94,
  Height: 1.95,

  calcBMI2: function()
  {
    this.BMI = this.Mass/(this.Height*2);
    return this.BMI;
  }
};
console.log(John.calcBMI2());

if(Mark.BMI > John.BMI)
{
   console.log(`${Mark.FullName}'s BMI (${Mark.BMI}) is higher than ${John.FullName}'s BMI (${John.BMI})`);
}

else{
  console.log(`${John.FullName}'s BMI (${John.BMI}) is higher than ${Mark.FullName}'s BMI (${Mark.BMI})`);
}