/* GET travel view */
const request = require('request');

const travel = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `http://localhost:3000${path}`,
        method: 'GET',
        json: {}
    };

    request(
        requestOptions,
        (err, response, body) => {
            if (err) {
                console.log(err);
            } else if (response.statusCode === 200) {
                res.render('travel', {
                    title: 'Travlr Getaways',
                    trips: body
                });
            } else {
                console.log(response.statusCode);
            }
        }
    );
};

module.exports = {
    travel
};