var Project_RCR = {Name: "Rift City Rebels", Description: "Rift City Rebels is a multiplayer platform fighter set in a near-future reimagining of Winnipeg, Manitoba. Play as one of seven exciting characters and battle for control of the Downtown Exclusion Zone! This game was created as the Red River College Polytechnic Class of 2024's final term project"}

var Project_PhantomPursuit = {Name: "Phantom Pursuit", Description: "Rift City Rebels is a multiplayer platform fighter set in a near-future reimagining of Winnipeg, Manitoba. Play as one of seven exciting characters and battle for control of the Downtown Exclusion Zone! This game was created as the Red River College Polytechnic Class of 2024's final term project"}

var Project_PokemonRec = {Name: "Pokemon Recreation", Description: "Rift City Rebels is a multiplayer platform fighter set in a near-future reimagining of Winnipeg, Manitoba. Play as one of seven exciting characters and battle for control of the Downtown Exclusion Zone! This game was created as the Red River College Polytechnic Class of 2024's final term project"}

var currentProj = 0;

var Projects = [];
Projects[0] = {Name: "Rift City Rebels", Description: "Rift City Rebels is a multiplayer platform fighter set in a near-future reimagining of Winnipeg, Manitoba. Play as one of seven exciting characters and battle for control of the Downtown Exclusion Zone! This game was created as the Red River College Polytechnic Class of 2024's final term project"};
Projects[1] = {Name: "Phantom Pursuit", Description: "Rift City Rebels is a multiplayer platform fighter set in a near-future reimagining of Winnipeg, Manitoba. Play as one of seven exciting characters and battle for control of the Downtown Exclusion Zone! This game was created as the Red River College Polytechnic Class of 2024's final term project"}
Projects[2] = {Name: "Pokemon Recreation", Description: "Rift City Rebels is a multiplayer platform fighter set in a near-future reimagining of Winnipeg, Manitoba. Play as one of seven exciting characters and battle for control of the Downtown Exclusion Zone! This game was created as the Red River College Polytechnic Class of 2024's final term project"}


var btn_Left = document.querySelector("#LeftButton");
btn_Left.style.cursor = "pointer";
btn_Left.addEventListener("click", MoveLeft, false);


var btn_right = document.querySelector("#RightButton");
btn_right.style.cursor = "pointer";
btn_right.addEventListener("click", MoveRight, false);

var title = document.querySelector("#GameName");

var mainImg = document.querySelector("#GameImg")
var leftImg = document.querySelector("#LeftImg");
var rightImg = document.querySelector("#RightImg")

var desc = document.querySelector("#GameDescription")

function GetLeftProj()
{
    if(currentProj == 0)
    {
        return Projects[Projects.length - 1];
    }

    return currentProj - 1;
}

function GetRightProj()
{
    if(currentProj == Projects.length - 1)
    {
        return Projects[0];
    }

    return currentProj - 1;
}

function MoveLeft()
{
    if(currentProj == 0)
    {
        currentProj = Projects.length - 1;
    }
    else
    {
        currentProj--;
    }

    UpdateMainProject()
}

function MoveRight()
{
    if(currentProj == Projects.length - 1)
    {
        currentProj = 0;
    }
    else
    {
        currentProj++;
    }

    UpdateMainProject();
}

function UpdateMainProject()
{
    title.innerHTML = Projects[currentProj].Name;
    desc.innerHTML = Projects[currentProj].Description;
}