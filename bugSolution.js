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
    $addFields: {
      results: { $ifNull: [ "$results", [] ] }
    }
  },
  {
    $unwind: {
      path: "$results",
      preserveNullAndEmptyArrays: true
    }
  }
];

const cursor = db.collection('collectionA').aggregate(pipeline);

cursor.forEach(doc => {
  console.log(doc);
});
```