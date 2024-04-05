const candidates = document.getElementById("candidate");
let button = document.getElementById("btn");

function dynamicallycreateelement(){
    //so this is actually an array objects parang mag sstore lang tayo ng maraming varaible sa array
    const officers = [
        {name:'Cleighrone Maramag', collegeimg: 'Pictures/cct.png' ,course: 'BSCS - 3A DM',collegecolor: 'RED',image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving."}, 
        {name:'Don Don Comia', collegeimg: 'Pictures/BED.png', course: 'BED - 3A DM', collegecolor: 'blue', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {name:'Jusip Orinio', collegeimg: 'Pictures/sas.png', course: 'BAELS - 3A DM', collegecolor: 'darkviolet', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {name: 'Junny Lester Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." }
    ]

    //no need ilagay sa object array since lahat naman ng placard gagamit nito
    let checkimg = "Pictures/GreenCheck.png"

    //then of course we need to loop sa object array then sa loob narin ng looping
    //natin iinitialized yung mga dynamically elements as weels yung mga styles nila
    for(let i = 0; i < officers.length; i++){
        let addOfficers = document.createElement('div');
        addOfficers.classList.add('officers-placard')
        //ito namang classlist.add basically parang nag bibigay tayo ng class para magamit natin to sa css

        let imgofficer = document.createElement('img');
        imgofficer.classList.add('imgofficer')
        imgofficer.src = officers[i].image

        let imgofficercollege = document.createElement('img');
        imgofficercollege.classList.add('imgofficercollege')
        imgofficercollege.src = officers[i].collegeimg

        let circlebackground = document.createElement('div')
        circlebackground.classList.add('circlebackground')

        //etong text container as div kasi need natin ilagay dito yung names, quotes as well as yung vote icon
        let textcontainer = document.createElement('div');
        textcontainer.classList.add('textcontainer')
        textcontainer.style.textAlign = 'left'

        let officername = document.createElement('p')
        officername.classList.add('officername')
        officername.textContent = officers[i].name;
        officername.style.color = officers[i].collegecolor

        let officercourse = document.createElement('p')
        officercourse.classList.add('officercourse')
        officercourse.textContent = officers[i].course;

        let officerquote = document.createElement('p')
        officerquote.classList.add('officerquote')
        officerquote.textContent = officers[i].quotes;

        let votetext = document.createElement('p')
        votetext.classList.add('votetext')
        votetext.textContent = "Vote"
        votetext.style.fontFamily = 'sans-serif'

        let imgvote = document.createElement('img')
        imgvote.classList.add('imgvote')
        imgvote.src = checkimg

        let votecontainer = document.createElement('div')
        votecontainer.classList.add('votecontainer')

        //itong mga nasa baba ibig sabihin naman neto is nilalagay natin sa loob ng element kung ano yung nasa parenthesis
        votecontainer.appendChild(votetext)
        votecontainer.appendChild(imgvote)

        textcontainer.appendChild(officername);
        textcontainer.appendChild(officercourse)
        textcontainer.appendChild(officerquote);
        textcontainer.appendChild(votecontainer)

        addOfficers.appendChild(imgofficer);
        addOfficers.appendChild(circlebackground);
        addOfficers.appendChild(imgofficercollege);
        addOfficers.appendChild(textcontainer);

        //eto yung pinaka mother div yung candidates
        candidates.appendChild(addOfficers);
    }
}

dynamicallycreateelement();