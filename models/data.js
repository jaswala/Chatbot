var mongoose = require('mongoose');

var Session_Summary = new mongoose.Schema({
    web_id: {
        type: String,
        required: true
      },
    dim_year_month_key: {
     type: Number
    },
    year_month_start_dt: {
        type:  Date
    },
    locale: {
        type: String
    },
    visitors: {
     type:  Number
    },
    visits: {
        type: Number
    },
    phone_calls: {
        type:  Number
    },
    searches: {
        type:  Number
    },
    email_leads: {
        type:  Number
    },
    time_on_vdp: {
        type:  Number
    },
    vehicle_detail_views: {
        type:  Number
    },
    pages: {
        type:  Number
    },
    hd_visits: {
        type:  Number  
    },
    inv_search_visits: {
        type:  Number  
    },
    duration: {
        type:  Number  
    },
   bounced_visits: {
        type:  Number  
    },
    vdp_views: {
        type:  Number  
    },
    hd_views: {
        type:  Number  
    },
    inv_searches: {
        type:  Number  
    },


});

var Data = mongoose.model('Session_Summary', Session_Summary ,'Session_Summary');

module.exports = {Data};