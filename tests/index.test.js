const { log,getQuote } = require("../lib/index.js");


const mockQuotes = [{
    "quote": "I have nipples, Greg. Could you milk me?",
    "id": 1,
    "movie": "Meet The Parents"
  },
  {
    "quote": "Don’t let yourself get attached to anything you are not willing to walk out on in 30 seconds flat if you feel the heat coming around the corner",
    "id": 2,
    "movie": "Heat"
  },
  {
    "quote": "Hey, kid, I think I got a little problem here",
    "id": 3,
    "movie": "Backdraft"
  }
];

describe("my first test suite", () => {
  test("my first test", () => {
    expect(1 + 1).toBe(2);
  });

  test("my second test", () => {
    expect(log("hello")).toBe("hello");
  });
  
});

describe("deniro quotes test suite", () => {
    test("get single quote", () => {
        expect(JSON.stringify(getQuote(1))).toBe(JSON.stringify(mockQuotes[0]))
    });
})

