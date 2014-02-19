var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;
    models.Project
      .find({"_id": projectID})
      .exec(afterQuery);

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);
  var newProject = new models.Project({
    "title": form_data.project_title,
    "date": form_data.date,
    "image": form_data.image_url,
    "summary": form_data.summary
  })
  newProject.save(afterAdding);

  function afterAdding(err,pojects){
    if(err) console.log(err);
    res.send("we ok");
  }

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;
    models.Project
      .find({"_id": projectID})
      .remove()
      .exec(afterDeleting);

    function afterDeleting(err,projects){
      if(err) console.log(err);
      res.send("we ok");
    }

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}