import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
    openapi: '3.0.1',
    info: {
        title: 'AdoptMe API',
        description: 'Documentación del módulo Users',
        version: '1.0.0'
    }
},
    apis: ['./src/routes/users.router.js']
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);

export default swaggerSpecs;
