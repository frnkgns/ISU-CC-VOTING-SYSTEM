const candidates = document.getElementById("candidate");

function dynamicallycreateelement(){
    //so this is actually an array objects parang mag sstore lang tayo ng maraming varaible sa array
    const officers = [
        {name:'Frank Ellis A. Gines', collegeimg: 'Pictures/cct.png' ,course: 'BSCS - 3A DM',collegecolor: 'RED',image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving."}, 
        {name:'Don Don Comia', collegeimg: 'Pictures/BED.png', course: 'BED - 3A DM', collegecolor: 'blue', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {name:'Jusip Orinio', collegeimg: 'Pictures/sas.png', course: 'BAELS - 3A DM', collegecolor: 'darkviolet', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {name: 'Junny Lester Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." }
    ]

    //no need ilagay sa object array since lahat naman ng placard gagamit nito
    let checkimg = "Pictures/GreenCheck.png";

    //then of course we need to loop sa object array then sa loob narin ng looping
    //natin iinitialized yung mga dynamically elements as weels yung mga styles nila
    for(let i = 0; i < officers.length; i++){
        let addOfficers = document.createElement('div');
        addOfficers.classList.add('officers-placard');
        //ito namang classlist.add basically parang nag bibigay tayo ng class para magamit natin to sa css

        let imgofficer = document.createElement('img');
        imgofficer.classList.add('imgofficer');
        imgofficer.src = officers[i].image;

        let imgofficercollege = document.createElement('img');
        imgofficercollege.classList.add('imgofficercollege');
        imgofficercollege.src = officers[i].collegeimg;

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
        votetext.classList.add('votetext');
        votetext.textContent = "Vote";
        votetext.style.fontFamily = 'sans-serif';

        let imgvote = document.createElement('img');
        imgvote.classList.add('imgvote');
        imgvote.src = 'Pictures/GreenCheck.png';

        let votecontainer = document.createElement('div');
        votecontainer.classList.add('votecontainer');

        //itong mga nasa baba ibig sabihin naman neto is nilalagay natin sa loob ng element kung ano yung nasa parenthesis
        votecontainer.appendChild(votetext);
        votecontainer.appendChild(imgvote);

        textcontainer.appendChild(officername);
        textcontainer.appendChild(officercourse)
        textcontainer.appendChild(officerquote);
        textcontainer.appendChild(votecontainer)

        addOfficers.appendChild(imgofficer);
        addOfficers.appendChild(imgofficercollege);
        addOfficers.appendChild(textcontainer);

        //eto yung pinaka mother div yung candidates
        candidates.appendChild(addOfficers);

        //so itong var gagamitin natin para maselect lahat ng elements na officers-placard
        var allplacards = document.querySelectorAll('.officers-placard');
        
        //then mag loloop tayo para lagyan lahat ng elements ng onclick feature
        //then maglalagay tayo ng default na function() para ma trigger yung nasa lob ng addeventlistener magrarun yon
        //yung nasa loob kasi non is actually looping ulit icocompare nya yung index ng first loop
        //sa pangalawang loop, then pag same sila, oh d wala na tayo baguhin
        //if hinde then hide natin sila

        function showvoted(){
            allplacards.forEach(function(officer, index) {
                officer.addEventListener('click', function() {
                    allplacards.forEach(function(element, idx) {
                        if (idx == index) {
                            addOfficers.style.backgroundColor = '#b3ffb3';
                            imgvote.src = 'Pictures/unvote.png';
                            votetext.textContent = "UnVote";
                                
                            //lagay ulit tayo eventlistener para kapag pinindot ulit ni user yung voted placard ibabalik nya sa dati
                            officer.addEventListener('click', unhide);
                            function unhide(){
                                allplacards.forEach(function(element){
                                    element.classList.remove('hide');
                                    addOfficers.style.backgroundColor = 'white';
                                    imgvote.classList.remove('hide');
                                    imgvote.src = 'Pictures/GreenCheck.png'
                                    votetext.classList.remove('hide');
                                    votetext.textContent = 'Vote';
                                });

                                showvoted();
                            }
                            
                        } else {
                            element.classList.add('hide');  //taga natin yung ibang placards
                        }
                    });
                });
            });
        }

        showvoted();
    }
}

dynamicallycreateelement();