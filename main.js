const president = document.getElementById("president");
const vicepresident = document.getElementById("vicepresident");


function dynamicallycreateelement(){
    //so this is actually an array objects parang mag sstore lang tayo ng maraming varaible sa array
    const Officers = [
        {position: "president", name:'Frank Ellis A. Gines', collegeimg: 'Pictures/cct.png' ,course: 'BSCS - 3A DM',collegecolor: 'RED',image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving."}, 
        {position: "president", name:'Don Don Comia', collegeimg: 'Pictures/BED.png', course: 'BED - 3A DM', collegecolor: 'blue', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "president", name:'Jusip Orinio', collegeimg: 'Pictures/sas.png', course: 'BAELS - 3A DM', collegecolor: 'darkviolet', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "president", name: 'Junny Lester Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "vicepresident", name: 'Mark Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "vicepresident", name: 'Mark Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "vicepresident", name: 'Mark Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." }

    ]

    //no need ilagay sa object array since lahat naman ng placard gagamit nito
    let checkimg = "Pictures/GreenCheck.png";

    //then of course we need to loop sa object array then sa loob narin ng looping
    //natin iinitialized yung mga dynamically elements as weels yung mga styles nila

    for(let i = 0; i < Officers.length; i++){
        let addOfficers = document.createElement('div');
        addOfficers.classList.add(Officers[i].position + "-placard");
        //ito namang classlist.add basically parang nag bibigay tayo ng class para magamit natin to sa css

        let imgofficer = document.createElement('img');
        imgofficer.classList.add('imgofficer');
        imgofficer.src = Officers[i].image;

        let imgofficercollege = document.createElement('img');
        imgofficercollege.classList.add('imgofficercollege');
        imgofficercollege.src = Officers[i].collegeimg;

        //etong text container as div kasi need natin ilagay dito yung names, quotes as well as yung vote icon
        let textcontainer = document.createElement('div');
        textcontainer.classList.add('textcontainer')
        textcontainer.style.textAlign = 'left'

        let officername = document.createElement('p')
        officername.classList.add('officername')
        officername.textContent = Officers[i].name;
        officername.style.color = Officers[i].collegecolor

        let officercourse = document.createElement('p')
        officercourse.classList.add('officercourse')
        officercourse.textContent = Officers[i].course;

        let officerquote = document.createElement('p')
        officerquote.classList.add('officerquote')
        officerquote.textContent = Officers[i].quotes;

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

        if(Officers[i].position == 'president'){
            president.appendChild(addOfficers);

        } else if(Officers[i].position == 'vicepresident'){
            vicepresident.appendChild(addOfficers);
        }    


        //so itong var gagamitin natin para maselect lahat ng elements na officers-placard
                    
        //then mag loloop tayo para lagyan lahat ng elements ng onclick feature
        //then maglalagay tayo ng default na function() para ma trigger yung nasa lob ng addeventlistener magrarun yon
        //yung nasa loob kasi non is actually looping ulit icocompare nya yung index ng first loop
        //sa pangalawang loop, then pag same sila, oh d wala na tayo baguhin
        //if hinde then hide natin sila

        function showvoted(){
            var Positions = ['president', 'vicepresident'];

            Positions.forEach(function(Positions){
                var allplacards = document.querySelectorAll('.' + Positions + '-placard');

                allplacards.forEach(function(officer, index) {
                    officer.addEventListener('click', function firstclick() {
                        allplacards.forEach(function(element, idx) {
                            if (idx == index){
                                officer.style.backgroundColor = '#b3ffb3';
                                var imgvote = officer.querySelector('.imgvote');
                                var votetext = officer.querySelector('.votetext');
                                imgvote.src = 'Pictures/unvote.png';
                                votetext.textContent = "UnVote";
                                
                                //need muna natin iremove yung click function kasi para makapag click tayo later on ulit sa placard
                                //lagay ulit tayo eventlistener para kapag pinindot ulit ni user yung voted placard ibabalik nya sa dati
                                officer.removeEventListener('click', firstclick);
                                officer.addEventListener('click', unhide);
                                function unhide(){
                                    allplacards.forEach(function(element){
                                        element.classList.remove('hide');
                                        officer.style.backgroundColor = 'white';
                                        imgvote.classList.remove('hide');
                                        imgvote.src = 'Pictures/GreenCheck.png'
                                        votetext.classList.remove('hide');
                                        votetext.textContent = 'Vote';
                                    });    
                                    //then iadd ulit natin yung vote function
                                    officer.addEventListener('click', firstclick);
                                }
                                
                            } else {
                                element.classList.add('hide');  //tago natin yung ibang placards
                            }
                        });
                    });
                });
            })
        }

        //initialized muna natin yung function
        showvoted();
    }

    DisplayOfficer(Officers);
}

dynamicallycreateelement();