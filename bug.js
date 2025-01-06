```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results"
    }
  },
  {
    $unwind: "$results" // This is the problematic line
  }
];

const cursor = db.collection('collectionA').aggregate(pipeline);

cursor.forEach(doc => {
  console.log(doc);
});
```