export const userValidationSchema ={
    name: {
        notEmpty: { errorMessage: "name cant be empty" },
        isString: { errorMessage: "name must be a string"},
        isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: "name length must be within range 5-32 chars",
    } 
    },
    email: {
        notEmpty: { errorMessage: "email cant be empty" },
        isEmail: {errorMessage: "Invalid email address" },
    },
    password: {
        isLength: {
        options: { min: 8 },
        errorMessage: "Password must be at least 8 characters long"
        },
        matches: {
        options: /^(?=.*[A-Z])(?=.*\d).+$/,
        errorMessage: "Password must contain at least one uppercase letter and one number"
    }
    },
    phone: {
        isMobilePhone: {
        options: ["any"],
        errorMessage: "Invalid phone number"
    }
    }
};

export const userUpdateSchema = {
  name: {
    optional: true,
    isString: { errorMessage: "Name must be a string" },
    isLength: { options: { min: 2 }, errorMessage: "Name too short" }
  },
  email: {
    optional: true,
    isEmail: { errorMessage: "Invalid email" }
  },
  password: {
    optional: true,
    isLength: {
        options: { min: 8 },
        errorMessage: "Password must be at least 8 characters long"
        },
        matches: {
        options: /^(?=.*[A-Z])(?=.*\d).+$/,
        errorMessage: "Password must contain at least one uppercase letter and one number"
    }
  },
  phone: {
    optional: true,
      isMobilePhone: {
      options: ["any"],
      errorMessage: "Invalid phone number"
    }
  }
};