// <---------  exercise   --------> =>  5kyu =>

// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
// 1. your referral bonus, and
// 2. the price of a beer can

// <---------  exsample   -------->

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// <---------  solution  -------->

export function beeramid(bonus: number, price: number): number {
  let level: number = 0;
  let totalCost: number = 0;

  while (true) {
    level++;
    totalCost += level * level * price;
    if (totalCost > bonus) return level - 1;
  }
}
