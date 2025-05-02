const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "WealthWise API",
      version: "1.0.0",
      description: "API documentation for your wealth wise system",
    },
    servers: [
      {
        url: "http://localhost:8080/api/v1",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
