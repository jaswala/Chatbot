var mongoose = require('mongoose');
var {Data} = require('../models/data');

// exports.processRequest = function(req, res) {
// if (req.body.result.action == "schedule") {
//     getTeamSchedule(req,res)
//   }
//   else if (req.body.result.action == "tell.about")
//   {
//       getTeamInfo(req,res)
//   }
// };

exports.processRequest = function(req,res) {
      //console.log(req.body.queryResult.parameters);

    //get web_id parameter

    const parameter = req.body.queryResult.parameters
    const web_id = (parameter["Web-ID"]);
    console.log(web_id);
      //get date parameters
      const startDate = parameter["date-period"]["startDate"];
      const endDate = parameter["date-period"]["endDate"];

    //get fullfillment
    const fullfillment = req.body.queryResult.fulfillmentText
      console.log(startDate);
      console.log(endDate);
      console.log(fullfillment);

      // Data.find().limit(5).then((FORM_PERFORMANCE_LEADS_DAILY_V1) => {
      //       res.send({FORM_PERFORMANCE_LEADS_DAILY_V1});
      //       console.log('results for from collections');
      //   }, (err) => {
      //        console.log('unable to fetch data');
      //    });

      if ( typeof web_id !== 'undefined' && web_id ) {
        getLeads(req,res)  
      } else 
      {
        getOtherinfo(req,res)
      }

};

  function getLeads(req,res) 
  {
   //console.log(res);
   const parameter = req.body.queryResult.parameters
   const web_id = (parameter["Web-ID"]);
   const fullfillment = req.body.queryResult.fulfillmentText
   console.log(web_id);
   console.log(fullfillment);

    // Data.find().limit(5).then((Session_Summary) => {
    //    res.send({Session_Summary});
    //      console.log('results for from collections');
    //  }, (err) => {
    //     console.log('unable to fetch data');
    //  })

 
    var gettotalleads = function(req,res) {
      const parameter = req.body.queryResult.parameters
      const web_id = (parameter["Web-ID"]);
      const startDate = parameter["date-period"]["startDate"];
      const endDate = parameter["date-period"]["endDate"];
      const fullfillment = req.body.queryResult.fulfillmentText

      // const startDateKey = Integer.parseInt(getJulianDateKey(startDate, "yyyy-MM-dd"));
      // const endDateKey = Integer.parseInt(getJulianDateKey(endDate, "yyyy-MM-dd"));
      // console.log(startDateKey);
      
      Data.aggregate([
          { $match: {
            web_id: web_id
          }},
          { $group: {
            _id: {web_id: web_id} ,
              leads: { $sum: "$LEADS"  }
          }} 
      ], function (err, result) {
          if (err) {
              console.log(err);
              return;
          }
          //console.log(result);
          //console.log(JSON.stringify(result[0]["leads"]));

         // return res.json(result["leads"]);
          //return res.json.stringify(result, undefined, 2);
          var fulfillmentTextWithLead = fullfillment.replace("<n>", JSON.stringify(result[0]["leads"])).toString();
          //console.log(fulfillmentTextWithLead);
          return res.json({ fulfillmentText: fulfillmentTextWithLead});


      });
  }

  gettotalleads(req,res);
 

  };

  function getOtherinfo(req,res) 
  {
   console.log("nothing to show");

  };



// function getTeamInfo(req,res)
// {
// let teamToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.team ? req.body.result.parameters.team : 'Unknown';
// TeamInfo.findOne({name:teamToSearch},function(err,teamExists)
//       {
//         if (err)
//         {
//           return res.json({
//               speech: 'Something went wrong!',
//               displayText: 'Something went wrong!',
//               source: 'team info'
//           });
//         }
// if (teamExists)
//         {
//           return res.json({
//                 speech: teamExists.description,
//                 displayText: teamExists.description,
//                 source: 'team info'
//             });
//         }
//         else {
//           return res.json({
//                 speech: 'Currently I am not having information about this team',
//                 displayText: 'Currently I am not having information about this team',
//                 source: 'team info'
//             });
//         }
//       });
// }

// function getTeamSchedule(req,res)
// {
// let parameters = req.body.result.parameters;
//     if (parameters.team1 == "")
//     {
//       let game_occurence = parameters.game_occurence;
//       let team = parameters.team;
//       if (game_occurence == "previous")
//       {
//         //previous game
//         GameSchedule.find({opponent:team},function(err,games)
//         {
//           if (err)
//           {
//             return res.json({
//                 speech: 'Something went wrong!',
//                 displayText: 'Something went wrong!',
//                 source: 'game schedule'
//             });
//           }
//           if (games)
//           {
//             var requiredGame;
//             for (var i=0; i < games.length; i++)
//             {
//                 var game = games[i];
// var convertedCurrentDate = new Date();
//                 var convertedGameDate = new Date(game.date);
// if (convertedGameDate > convertedCurrentDate)
//                 {
//                   if(games.length > 1)
//                   {
//                     requiredGame = games[i-1];
// var winningStatement = "";
//                     if (requiredGame.isWinner)
//                     {
//                         winningStatement = "Kings won this match by "+requiredGame.score;
//                     }
//                     else {
//                       winningStatement = "Kings lost this match by "+requiredGame.score;
//                     }
//                     return res.json({
//                         speech: 'Last game between Kings and '+parameters.team+' was played on '+requiredGame.date+' .'+winningStatement,
//                         displayText: 'Last game between Kings and '+parameters.team+' was played on '+requiredGame.date+' .'+winningStatement,
//                         source: 'game schedule'
//                     });
//                     break;
//                   }
//                   else {
//                     return res.json({
//                         speech: 'Cant find any previous game played between Kings and '+parameters.team,
//                         displayText: 'Cant find any previous game played between Kings and '+parameters.team,
//                         source: 'game schedule'
//                     });
//                   }
//                 }
//             }
// }
// });
//       }
//       else {
//         return res.json({
//             speech: 'Next game schedules will be available soon',
//             displayText: 'Next game schedules will be available soon',
//             source: 'game schedule'
//         });
//       }
//     }
//     else {
//       return res.json({
//           speech: 'Cant handle the queries with two teams now. I will update myself',
//           displayText: 'Cant handle the queries with two teams now. I will update myself',
//           source: 'game schedule'
//       });
//     }
//   }