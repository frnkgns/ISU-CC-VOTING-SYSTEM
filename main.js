const president = document.getElementById("president");
const vicepresident = document.getElementById("vicepresident");


function Dynamicallycreateelement(){
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
    //natin iinitialized yung mga dynamically elements as well as yung mga styles nila

    //dito na starting ng dynamic elements
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

        //dito sa votecontainer natin ilalagay yung imagevote, tyaka textvote, para kaapg nag adjust tayo 
        //sa css container nlang gagalawin natin, 'sana'
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

        //ilalagay natin sa perfective positions yung mga candidates, hindi kasi pwedeng nasa president category
        //si treasurer and the rest of the positions, actually maganda to kapag loop
        if(Officers[i].position == 'president'){
            president.appendChild(addOfficers);

        } else if(Officers[i].position == 'vicepresident'){
            vicepresident.appendChild(addOfficers);
        }    
                    
        //then itong function mag seserved sa lahat ng placards ng click function as well as yung hide functions nila
        function showvoted(){
            //then itong part needed para makapag loop tayo sa selection ng placards from pres-businessM
            //katamad kapag mano mano tyaka madaming code masyado
            var Positions = ['president', 'vicepresident'];

            Positions.forEach(function(Positions){
                var allplacards = document.querySelectorAll('.' + Positions + '-placard');
                //then dito na mag start yung loop 
                allplacards.forEach(function(officer, index) {
                    //maglalagay tayo ng click function sa mga placards
                    officer.addEventListener('click', function firstclick() {
                        //then kapag yung pinindot nila yung placard na yun, yung lang yung malalagyan ng effects
                        //the rest ihahide nanatin
                        allplacards.forEach(function(element, idx) {
                            if (idx == index){
                                officer.style.backgroundColor = '#b3ffb3';
                                var imgvote = officer.querySelector('.imgvote');
                                var votetext = officer.querySelector('.votetext');
                                imgvote.src = 'Pictures/unvote.png';
                                votetext.textContent = "UnVote";
                                
                                //need muna natin iremove yung click function para makapag click tayo later on ulit sa placard
                                //lagay ulit tayo eventlistener para kapag pinindot ulit ni user yung voted placard ibabalik nya yung unvoted candidates
                                officer.removeEventListener('click', firstclick);
                                officer.addEventListener('click', unhide);
                                function unhide(){
                                    //then eto sa baba kapag ibabalik sa dati yung mga componetns ng ibang placard
                                    allplacards.forEach(function(element){
                                        element.classList.remove('hide');
                                        officer.style.backgroundColor = 'white';
                                        imgvote.classList.remove('hide');
                                        imgvote.src = 'Pictures/GreenCheck.png'
                                        votetext.classList.remove('hide');
                                        votetext.textContent = 'Vote';
                                    });    

                                    //then iadd ulit natin yung vote function, para makapag click tayo since niremove natin kanina
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

        //of course hindi gagana yung function kapag hindi mo natawag, kaya need muna natin tawagin
        showvoted();
    }

    //pati to syempte
    DisplayOfficer(Officers);
}

//lalo nato
Dynamicallycreateelement();