var mongoose = require('mongoose');

var FORM_PERFORMANCE_LEADS_DAILY_V1 = new mongoose.Schema({
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

var Data = mongoose.model('FORM_PERFORMANCE_LEADS_DAILY_V1', FORM_PERFORMANCE_LEADS_DAILY_V1 ,'FORM_PERFORMANCE_LEADS_DAILY_V1');

module.exports = {Data};