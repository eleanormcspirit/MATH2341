var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "1.1",
  "title": "Week 1",
  "body": " Week 1    A linear equation in the variables is an equation of the form   where the and are constants.     The equation   is linear.   A system of linear equations is a collection of linear equations involving the same variables (e.g. ).    A solution to a system is a choice of values for the variables that makes every equation in the system true.  The solution set is the set of all solutions to a system of linear equations.     The system of linear equations   has solution because   You can see that this is the only solution by algebraically eliminating one of the variables, or by graphing the two lines and seeing that they intersect at a single point, as shown below.   Graph of the lines x plus y equals 5 and 2x minus y equals 1 intersecting at the point (2,3).     "
},
{
  "id": "notes-week-01-2",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-2",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A linear equation in the variables is an equation of the form   where the and are constants.   "
},
{
  "id": "notes-week-01-3",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": " The equation   is linear.  "
},
{
  "id": "notes-week-01-4",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "system of linear equations "
},
{
  "id": "notes-week-01-5",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  A solution to a system is a choice of values for the variables that makes every equation in the system true.  The solution set is the set of all solutions to a system of linear equations.   "
},
{
  "id": "notes-week-01-6",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-6",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " The system of linear equations   has solution because   You can see that this is the only solution by algebraically eliminating one of the variables, or by graphing the two lines and seeing that they intersect at a single point, as shown below.   Graph of the lines x plus y equals 5 and 2x minus y equals 1 intersecting at the point (2,3).    "
},
{
  "id": "activity-week-01",
  "level": "1",
  "url": "activity-week-01.html",
  "type": "Section",
  "number": "2.1",
  "title": "Week 1 Activity: Systems and Row Reduction",
  "body": " Week 1 Activity: Systems and Row Reduction   This activity is intended for small groups. Students should discuss their reasoning before writing final answers. This is just a sample activity.    From Equations to Matrices   For each system below, write the augmented matrix, perform row reduction, and interpret the result geometrically.     Solve       Create a second system with no solutions, then explain how the row reduction reveals inconsistency.     "
},
{
  "id": "act-week-01-systems",
  "level": "2",
  "url": "activity-week-01.html#act-week-01-systems",
  "type": "Activity",
  "number": "2.1.1",
  "title": "From Equations to Matrices.",
  "body": " From Equations to Matrices   For each system below, write the augmented matrix, perform row reduction, and interpret the result geometrically.     Solve       Create a second system with no solutions, then explain how the row reduction reveals inconsistency.    "
},
{
  "id": "problem-set-week-01",
  "level": "1",
  "url": "problem-set-week-01.html",
  "type": "Section",
  "number": "3.1",
  "title": "Problem Set 1: Linear Systems",
  "body": " Problem Set 1: Linear Systems   Replace the due date and instructions below with your course policies.    Instructions  Due: Friday of Week 1. Write complete solutions, not just final answers. You may discuss ideas with classmates, but your submitted work should be written independently in your own words.    Exercises    Row reduce the augmented matrix and describe the solution set.      Determine whether lies in . Explain your answer using a linear system.      In two or three sentences, explain the relationship between row reduction and solving a system of linear equations.     "
},
{
  "id": "ps-week-01-row-reduction",
  "level": "2",
  "url": "problem-set-week-01.html#ps-week-01-row-reduction",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "  Row reduce the augmented matrix and describe the solution set.   "
},
{
  "id": "ps-week-01-span",
  "level": "2",
  "url": "problem-set-week-01.html#ps-week-01-span",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": "  Determine whether lies in . Explain your answer using a linear system.   "
},
{
  "id": "ps-week-01-reflection",
  "level": "2",
  "url": "problem-set-week-01.html#ps-week-01-reflection",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": "  In two or three sentences, explain the relationship between row reduction and solving a system of linear equations.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
