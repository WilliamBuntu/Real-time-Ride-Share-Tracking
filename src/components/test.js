/*
Welcome to the technical interview! Today, you'll engage in a challenge where your task is to match
a passenger with the most suitable moto driver. Each driver has specific attributes such as routes
they operate, pricing, law compliance, familiarity with the customer, timeliness, and overall ratings.

Challenge Details:
- Calculate a score for each driver using predefined weights for their attributes.
- Select the driver with the highest score based on the criteria that include route compatibility,
price competitiveness, law score, familiarity, timeliness, and customer ratings.

Guidelines:
- No external AI resources are allowed.
- While direct code sharing is prohibited, discussing and seeking hints from fellow participants is encouraged.
- After 18 minutes, hints will be provided if needed.

Remember:
- Document any external resources or discussions used during the challenge.
- Clearly articulate your thought process and solution.

This exercise tests your ability to manipulate data and apply weighted criteria to solve real-world problems
effectively. Good luck!
*/
const drivers = [
    {
      name: "Eddy Kamanzi",
      routes: ["Nyabugogo - Kicukiro", "Downtown - Kacyiru"],
      price: 2405.30,
      lawScore: 4.5,
      familiarity: 3,
      timeTaken: 10,
      rating: 4.8
    },
    {
      name: "Kethia Kato",
      routes: ["Downtown - Kacyiru"],
      price: 1802.40,
      lawScore: 3.8,
      familiarity: 2,
      timeTaken: 20,
      rating: 4.2
    }
  ];

  const passenger = {
    route: "Downtown - Kacyiru",
    averagePrice: 2000,
    capTime: 15,
  };

  const weights = {
    routeCompatibility: 1.8,
    price: 3.4,
    lawScore: 1.0,
    familiarity: 0.5,
    time: 2.7,
    rating: 0.6
  };

  function calculateScore(driver, passenger) {
    let score = 0;
    score += driver.routes.includes(passenger.route) ? weights.routeCompatibility : 0;
    score += driver.price > passenger.averagePrice ? (passenger.averagePrice / driver.price) * weights.price : weights.price;
    score += (driver.lawScore / 5) * weights.lawScore;
    score += (driver.familiarity / 5) * weights.familiarity;

    // These two lines below do not contain any errors -- don't change them to save your time
    score += driver.timeTaken > passenger.capTime ? (passenger.capTime / driver.timeTaken) * weights.time : weights.time;
    score += (driver.rating / 5) * weights.rating;
    // Other parts might contain errors
    return score;
  }

  const sortedDrivers = drivers.map(driver => ({
    name: driver.name,
    score: calculateScore(driver, passenger)
  })).sort((a, b) => b.score - a.score);

  sortedDrivers.forEach(driver => console.log(`Driver: ${driver.name} & Score: ${driver.score}`));


   /*
  Hints:
  1. Verify that each driver object includes all necessary attributes.
  2. Ensure that the sum of all weights totals to 10.
  3. Consider how you initialize the score.
  4. Confirm that you are scoring drivers based on whether they operate on the passenger's required route.
  5. Check your syntax when accessing weight values.
  6. Review how you calculate the scores particularly for `lawScore` and `familiarity`.
  7. Correctly implement the sorting function to order drivers by descending scores.
  8. Ensure your output accurately reflects each driver's name and calculated score.

   Armel Munyaneza
      i didn't use any resources
  */