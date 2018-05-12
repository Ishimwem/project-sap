var Graph = require('../models/Graph');
var User = require('../models/User');

function loadCategory (req, res, next){
    res.sendFile('/SAP/views/CategoryGraph/categories.html', {'root': '../'})
}

/** Find specific category **/
function findCategory(req, res, next){
  var realName = ''
  if (req.params.name == "documents"){
    realName = 'Documents';
  }
  else if (req.params.name == "counsellors"){
    realName = "Counsellors";
  }
  else if (req.params.name == "notes"){
    realName = "Note Taking";
  }
  else if (req.params.name == "test"){
    realName = "Test and Exam Accommodation";
  }
  else if (req.params.name == "build"){
    realName = "Building Accessibility";
  }

  console.log(realName)
    Graph.findOne({name: realName},function(err, services) {
          if (err) throw err;


          // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030/category');
          // res.setHeader('Access-Control-Allow-Methods', 'GET');
          // res.json(services);
          res.send(services);
    });
}


function addFavourite(req, res, next){
  // var cat = req.params.category
  console.log("here")
  console.log(req.body.newcat)
  console.log(req.body.subcat)
  console.log(req.session.currentUser)
  var flag = false
  var username = req.session.currentUser.utorid
  var oldFav = req.session.currentUser.favourites
  console.log(oldFav)
  var favObject = req.session.currentUser.favourites.nodes[0]
  var nodesLen =  Object.keys(favObject).length

  console.log(nodesLen)
  console.log(username)

  var catName = ""
  var subName = ""
  var link = ""
  var subLink = ""
  if (req.body.newcat == "documents"){
    catName = "Documents"
    link = "http://localhost:3030/category?category=documents"
    if (req.body.subcat == "verify"){
      subName = "Verification of Illness"
      subLink = "http://localhost:3030/category?category=documents&subcategory=verify"
    }
    if (req.body.subcat == "renewal"){
      subName = "Accommodation Renewal"
      subLink = "http://localhost:3030/category?category=documents&subcategory=renewal"
    }
    if (req.body.subcat == "letter"){
      subName = "Letter of Accommodation"
      subLink = "http://localhost:3030/category?category=documents&subcategory=letter"
    }
  }
  if (req.body.newcat == "test"){
    catName = "Test and Exam Accommodation"
    link = "http://localhost:3030/category?category=test"
    if (req.body.subcat == "request"){
      subName = "Request"
      subLink = "http://localhost:3030/category?category=test&subcategory=request"
    }
    if (req.body.subcat == "late"){
      subName = "Late Request"
      subLink = "http://localhost:3030/category?category=test&subcategory=late"
    }
    if (req.body.subcat == "info"){
      subName = "Information"
      subLink = "http://localhost:3030/category?category=test&subcategory=info"
    }
  }
  if (req.body.newcat == "counsellors"){
    catName = "Counsellors"
    link = "http://localhost:3030/category?category=counsellors"
    if (req.body.subcat == "adaptive"){
      subName = "Adaptive Technologist"
      subLink = "http://localhost:3030/category?category=counsellors&subcategory=adaptive"
    }
    if (req.body.subcat == "learning"){
      subName =  "Learning Strategist"
      subLink = "http://localhost:3030/category?category=counsellors&subcategory=learning"
    }
    if (req.body.subcat == "advisor"){
      subName = "Accessibility Advisor"
      subLink = "http://localhost:3030/category?category=counsellors&subcategory=advisor"
    }
  }
  if (req.body.newcat == "notes"){
    catName = "Note Taking"
    link = "http://localhost:3030/category?category=notes"
    if (req.body.subcat == "upload"){
      subName = "Upload Notes"
      subLink = "http://localhost:3030/category?category=notes&subcategory=upload"
    }
    if (req.body.subcat == "volunteer"){
      subName =  "Volunteer"
      subLink = "http://localhost:3030/category?category=notes&subcategory=volunteer"
    }
    if (req.body.subcat == "notesrequest"){
      subName = "Request Note Taking"
      subLink = "http://localhost:3030/category?category=notes&subcategory=notesrequest"
    }
  }
  if (req.body.newcat == "build"){
    catName = "Building Accessibility"
    link = "http://localhost:3030/category?category=build"
    if (req.body.subcat == "washrooms"){
      subName = "Gender Neutral Washrooms"
      subLink = "http://localhost:3030/category?category=build&subcategory=washrooms"
    }
    if (req.body.subcat == "wheelchair"){
      subName =  "Wheelchair Entrance Map"
      subLink = "http://localhost:3030/category?category=build&subcategory=wheelchair"
    }
    if (req.body.subcat == "elevator"){
      subName = "Elevator Map"
      subLink = "http://localhost:3030/category?category=build&subcategory=elevator"
    }
  }

  for (var key in favObject){
    if (favObject[key].label == catName){
      // res.status(404).send("already exists")
      // return;
      flag = true;
    }
    if (key == req.body.subcat){
      res.status(404).send("sub-category already exists")
      return;
    }
  }


    var newFav = oldFav
    var favName = req.body.newcat
    var favNode = {"color": "#008BB0", "shape": "dot", "label": catName, "link": link}
    // var favNode = {}

    newFav.nodes[0][favName] = favNode

    //special case new user
    var newObj = {};
    if (newFav.edges.length == 0){
      newObj = {"center" : {}}
      newFav.edges[0] = newObj;
      console.log("HELLLO");
      console.log(newFav.edges[0]);
    }
    newFav.edges[0]["center"][favName] = {"length": "0.4"}
    if (flag == false){
      newFav.edges[0][favName] = {}
    }
  // }

  // add syb category here
  var subCatNode = {
            "color": "#008BB0",
            "shape": "rectangle",
            "label": subName,
            "link": subLink,
            "parent": req.body.newcat}

  newFav.nodes[0][req.body.subcat] = subCatNode
  newFav.edges[0][favName][req.body.subcat] = {"length": "0.4"}



  User.updateOne( {utorid:username}, { $set: { favourites: newFav } }, function(err) {

    if (!err){
      console.log("fav works")
      req.session.currentUser.favourites = newFav
      res.status(200).send("yay")
    }
    else {
      res.status(400).send("ERRROOr")
    }

  });

}

function deleteFavourite(req, res, next){
  // var cat = req.params.category
  //console.log("here")
  //console.log(req.body.newcat)
  var flag = true
  var username = req.session.currentUser.utorid
  var oldFav = req.session.currentUser.favourites;
  var oldNodes = oldFav.nodes[0]
  var oldEdges = req.session.currentUser.favourites.edges[0]
  var catt = req.body.newcat
  var oldEdgesCat = req.session.currentUser.favourites.edges[0].catt
  var nodesLen =  Object.keys(oldNodes).length

  var catName = ""
  var subName = ""
  if (req.body.newcat == "documents"){
    catName = "Documents"
    if (req.body.subcat == "verify"){
      subName = "Verification of Illness"
    }
    if (req.body.subcat == "renewal"){
      subName = "Accommodation Renewal"
    }
    if (req.body.subcat == "verify"){
      subName = "Letter of Accommodation"
    }
  }
  if (req.body.newcat == "test"){
    catName = "Test and Exam Accommodation"
    if (req.body.subcat == "request"){
      subName = "Request"
    }
    if (req.body.subcat == "late"){
      subName = "Late Request"
    }
    if (req.body.subcat == "info"){
      subName = "Information"
    }
  }
  if (req.body.newcat == "counsellors"){
    catName = "Counsellors"
    if (req.body.subcat == "adaptive"){
      subName = "Adaptive Technologist"
    }
    if (req.body.subcat == "learning"){
      subName =  "Learning Strategist"
    }
    if (req.body.subcat == "advisor"){
      subName = "Accessibility Advisor"
    }
  }
  if (req.body.newcat == "notes"){
    catName = "Note Taking"
    if (req.body.subcat == "upload"){
      subName = "Upload Notes"
    }
    if (req.body.subcat == "volunteer"){
      subName =  "Volunteer"
    }
    if (req.body.subcat == "notesrequest"){
      subName = "Request Note Taking"
    }
  }
  if (req.body.newcat == "build"){
    catName = "Building Accessibility"
    if (req.body.subcat == "washrooms"){
      subName = "Gender Neutral Washrooms"
    }
    if (req.body.subcat == "wheelchair"){
      subName =  "Wheelchair Entrance Map"
    }
    if (req.body.subcat == "elevator"){
      subName = "Elevator Map"
    }
  }
  var edgeToRemove = ""

  //console.log("list")

  for (var key in oldNodes) {

    // if (oldNodes[key].label == catName){
    //   edgeToRemove = key
    //   delete oldNodes[key]
    // }

    // console.log(key)
    if (key == req.body.subcat){
      edgeToRemove = key
      delete oldNodes[key]
    }
  }

  if (edgeToRemove == ""){
    res.status(404).send("Data doesn't exist")
    return;
  }



  for (var key in oldEdges) {

    if(key == req.body.newcat){

      for (var key2 in oldEdges[key]){


        if (key2 == edgeToRemove){
          delete oldEdges[key][key2]
        }

      }
    }

  }

  // check if old Edges if empty
  console.log("HEYYYYY")
  console.log(oldNodes)
  console.log("EXCUSE ME")
  console.log(oldEdges)
  console.log("MISS")
  console.log(oldEdges["center"][key]);
  for (var key in oldEdges){
    console.log(key);

    if (Object.keys(oldEdges[key]).length == 0 && key != "center"){
      console.log("TO DELETE")
      console.log(key)
      delete oldEdges[key]
      delete oldEdges["center"][key]
      delete oldNodes[key]
    }

  }

  /*console.log("after")
  console.log(oldNodes)
  console.log(oldEdges)*/
  var edgeToList = [oldEdges]

  if (oldEdges["center"].length == 0){
    edgeToList = []
  }

  var newFav = {edges: edgeToList, nodes: [oldNodes]}

  User.updateOne( {utorid:username}, { $set: { favourites: newFav } }, function(err) {

    if (!err){
      console.log("unfav works")
      req.session.currentUser.favourites = newFav
      res.status(200).send("yay")
    }
    else {
      res.status(400).send("ERRROOr")
    }

  });

}

module.exports = {loadCategory, findCategory, addFavourite, deleteFavourite};
