//Use reduce() to group the categories and count how many times each category appears.
const obj = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const countItems = obj.reduce((a,ele)=>{
    a[ele]=(a[ele] || 0 )+1;
//Return the resulting object.
    return a;
}, {});
console.log(countItems);
const entriesSort = Object.entries(countItems).sort((a,b)=>b[1]-a[1]).map(entry => `${entry[0]}: ${entry[1]}`);
console.log(entriesSort);