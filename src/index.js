class validationError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
  }
}

class ValidationAmountError extends ValidationError {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

function getTransaction() {
  const data = {
    name: "euro",
    amount: 123,
  };

  if (!data.amount) {
    // const e = new Error("need amount");
    // throw e;
    throw new Error("need amount");
  }

  throw new Error("unexpected error");
}

function initApp() {
  try {
    getTransaction();
  } catch (e) {
    // if (e.name === "ValidationError") {
    if (e instanceof ValidationError) {
      console.log("you should retry");
    } else {
      throw e;
    }
  }
}

try {
  initApp();
} catch (e) {
  console.error(e);
}
