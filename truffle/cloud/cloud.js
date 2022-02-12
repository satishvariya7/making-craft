Moralis.Cloud.define("biggestWinners", async (request) => {
  const query = new Parse.Query("flips");
  query.equalTo("win", true);
  // query.greaterThan("bet", 100);
  const pipeline = [
    {
      group: {
        objectId: "\$user",
        total_sum: { $sum: { $toInt: "$bet" } },
      },
    },
  ];
  const result = await query.aggregate(pipeline, { useMasterKey: true });
  return result;
});


Moralis.Cloud.define("biggestLosers", async (request) => {
  const query = new Parse.Query("flips");
  query.equalTo("win", false);
  // query.greaterThan("bet", 100);
  const pipeline = [
    {
      group: {
        objectId: "\$user",
        total_sum: { $sum: { $toInt: "$bet" } },
      },
    },
  ];
  const result = await query.aggregate(pipeline, { useMasterKey: true });
  return result;
});
