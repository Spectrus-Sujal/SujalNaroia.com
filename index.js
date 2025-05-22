
var currentProj = 0;

var Projects = [];
Projects[0] = {Name: "Rift City Rebels", Img: "RiftCityRebels.png", Video: "RCRDemoReel.webm", Description: "Rift City Rebels is a multiplayer platform fighter set in a near-future reimagining of Winnipeg, Manitoba. Play as one of seven exciting characters and battle for control of the Downtown Exclusion Zone! This game was created as the Red River College Polytechnic Class of 2024's final term project", MyRole: "</br> Created a Smash Bros. style Combat System.  </br>Worked with artists to develop a character and move-set. </br>Coded an ability system that adapted for different moves. </br> Connected animations to work with code​ parameters. </br>Manage and Collect play-test data​to balance characters."};
Projects[1] = {Name: "Phantom Pursuit", Img: "PhantomPursuit.png", Video: "PhantomPursuit.webm", Description: "A hiker travels to an abandoned facility to find out what happened to their lost sibling. They become trapped inside after awakening a monster from a different dimension and must race through light-based puzzles to turn on 3 generators and escape! </br>Phantom Pursuit is a puzzle horror platformer where the player must solve puzzles using light while being chased by an eldritch horror.", MyRole: "</br>Creating the throwing mechanic that shows a predictive line. </br>Create a flare that reduces light over time and triggers light sensors. </br>Make light sensors that toggles colliders on platforms, and starts/stops moving platforms. </br> Create a boss that chases the player through the map. "}
Projects[2] = {Name: "Pokemon Recreation", Img: "Pokemon.jpg", Video: "PokemonRecreationDemoReel.webm", Description: "This is a recreation of the core Pokemon gameplay loop involving two Pokemon fighting in a turn based manner.​", MyRole: "I made this project in order to practice creating modular systems. This game was made in a way that as many Pokemon, Moves, and Attributes can be added and the game still works with no changes needed to other scripts."}
Projects[3] = {Name: "Skeleton Dave", Img: "SkeletonDave.png", Video: "SkeletonDaveDemoReel.webm", Description: "Play as Dave, a skeleton who is sent to the dangerous dungeon named Albaz by his master Visigius, one of the greatest necromancers to have ever lived. Dave is sent to retrieve “The Yogurtnomicon”, an item of great importance which is used to resurrect dead bacteria. Play through a 2D platformer in the form of a dungeon crawling RPG where you swap the body parts of enemies with your own to get stronger. Defeat countless foes in live action-packed combat by utilizing your abilities to strengthen your attacks, so that your master can use the resurrected bacteria to make a delicious ice cream sundae.", MyRole: "Slowly improve a platforming AI"}


var btn_Left = document.querySelector("#LeftButton");
btn_Left.style.cursor = "pointer";
btn_Left.addEventListener("click", MoveLeft, false);


var btn_right = document.querySelector("#RightButton");
btn_right.style.cursor = "pointer";
btn_right.addEventListener("click", MoveRight, false);

var title = document.querySelector("#GameName");

var mainVid = document.querySelector("#GameVideo")
var leftImg = document.querySelector("#LeftImg");
var rightImg = document.querySelector("#RightImg")

var desc = document.querySelector("#GameDescription")

var myRole = document.querySelector("#MyRole")

function GetLeftProj()
{
    if(currentProj == 0)
    {
        return Projects[Projects.length - 1];
    }

    return Projects[currentProj - 1];
}

function GetRightProj()
{
    if(currentProj == Projects.length - 1)
    {
        return Projects[0];
    }

    return Projects[currentProj + 1];
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
    
    // mainVid.setAttribute("src", "videos/" + Projects[currentProj].Video);

    mainVid.src = "images/" + Projects[currentProj].Img

    leftImg.src = "images/" + GetLeftProj().Img;
    rightImg.src = "images/" + GetRightProj().Img;
    desc.innerHTML = Projects[currentProj].Description
    myRole.innerHTML = Projects[currentProj].MyRole;
}

UpdateMainProject();