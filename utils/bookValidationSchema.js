export const bookValidationSchema ={
    title: {
        notEmpty: { errorMessage: "title cant be empty" },
        isString: { errorMessage: "title must be a string"},
        isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: "title length must be within range 5-32 chars",
    } 
    },
    author: {
        notEmpty: { errorMessage: " cant be empty" },
        isString: { errorMessage: " must be a string"}
    },
    price: {
        notEmpty: { errorMessage: "cant be empty" },
        isNumeric: { errorMessage: "must be a number"},
    } 
};

export const bookUpdateSchema = {
  title: {
    optional: true,
    isString: { errorMessage: "Title must be a string" },
    isLength: { options: { min: 2 }, errorMessage: "Title too short" }
  },
  author: {
    optional: true,
    isString: { errorMessage: "Author must be a string" }
  },
  price: {
    optional: true,
    isFloat: { options: { min: 1 }, errorMessage: "Price must be a number greater than 0" }
  }
};