module.exports = {
    handler: async (event, context, callback) => {
        
        //callback(JSON.stringify({statusCode: 400, body: {}, headers: {}}))
        callback(JSON.stringify({statusCode: 400, success: true, message: "Bad Request", errors: []}))
        
        
        //return new Error("500");
        //return JSON.stringify({statusCode: 400});
        //return callback(new Error('An error has occurred'));
        if ('throw' in event.query){
            throw new Error('An error has occurred');
        }
        return 'This is the successful response body';
    }
}
