const candidates = document.getElementById("candidate");
let button = document.getElementById("btn");

function dynamicallycreateelement(){
    //so this is actually an array objects parang mag sstore lang tayo ng maraming varaible sa array
    const officers = [
        {name:'Cleighrone Maramag', collegecolor: 'RED',image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving."}, 
        {name:'Don Don Comia', collegecolor: 'gold', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {name:'Jusip Orinio', collegecolor: 'darkviolet', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {name: 'Junny Lester Paguia', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." }
    ]

    //no need ilagay sa object array since lahat naman ng placard gagamit nito
    let checkimg = "Pictures/GreenCheck.png"

    //then of course we need to loop sa object array then sa loob narin ng looping
    //natin iinitialized yung mga dynamically elements as weels yung mga styles nila
    for(let i = 0; i < officers.length; i++){
        let addOfficers = document.createElement('div');
        addOfficers.image = officers[i].image;
        addOfficers.style.display = "flex";
        addOfficers.style.height = '300px';
        addOfficers.style.width = '500px';
        addOfficers.style.margin = '10px';
        addOfficers.style.borderRadius = '50px';
        addOfficers.style.backgroundColor = 'White';
        addOfficers.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 1)';

        let imgofficer = document.createElement('img');
        imgofficer.src = officers[i].image

        //etong text container as div kasi need natin ilagay dito yung names, quotes as well as yung vote icon
        let textcontainer = document.createElement('div');
        textcontainer.style.textAlign = 'left'

        let officername = document.createElement('p')
        officername.textContent = officers[i].name;
        officername.style.marginTop = '50px';
        officername.style.fontFamily = 'sans-serif';
        officername.style.fontWeight = 'bold'
        officername.style.color = officers[i].collegecolor

        let officerquote = document.createElement('p')
        officerquote.textContent = officers[i].quotes;
        officerquote.style.marginTop = '30px';
        officerquote.style.padding = '20px'
        officerquote.style.fontFamily = 'sans-serif';

        let votetext = document.createElement('p')
        votetext.textContent = "Vote"
        votetext.style.fontFamily = 'sans-serif'

        let imgvote = document.createElement('img')
        imgvote.src = checkimg
        imgvote.style.height = '50px';

        let votecontainer = document.createElement('div')
        votecontainer.style.display = 'flex'
        votecontainer.style.marginTop = '40px'
        votecontainer.style.marginLeft = '190px'

        votecontainer.appendChild(votetext)
        votecontainer.appendChild(imgvote)

        textcontainer.appendChild(officername);
        textcontainer.appendChild(officerquote);
        textcontainer.appendChild(votecontainer)

        addOfficers.appendChild(imgofficer);
        addOfficers.appendChild(textcontainer);

        //eto yung pinaka mother div yung candidates
        candidates.appendChild(addOfficers);
    }
}

dynamicallycreateelement();