```javascript
//Correct Usage of $inc operator
function incrementCount(id, increment){  
  if(typeof increment !== 'number' || isNaN(increment) || !isFinite(increment)){     
     console.error("Invalid increment value. Increment must be a finite number.");
     return; 
  } 
db.collection('myCollection').updateOne({"_id":ObjectId(id)},{$inc:{count:increment}});
}

incrementCount("someId", 5); //Correct usage
incrementCount("someId", NaN); //Handles invalid input
```