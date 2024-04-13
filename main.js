const president = document.getElementById("president");
const vicepresident = document.getElementById("vicepresident");
const treasurer = document.getElementById("treasurer");
const auditor = document.getElementById("auditor");
const accountant = document.getElementById("accountant");
const sascouncil = document.getElementById("sas_council");
const cbmcouncil = document.getElementById("cbm_council");
const ccjecouncil = document.getElementById("ccje_council");
const cedcouncil = document.getElementById("ced_council");
const ccsictcouncil = document.getElementById("ccsict_council");
const pscouncil = document.getElementById("ps_council");
const iatcouncil = document.getElementById("iat_council");


function Dynamicallycreateelement(){
    //so this is actually an array objects parang mag sstore lang tayo ng maraming varaible sa array
    const Officers = [
        {position: "president", name:'Frank Ellis A. Gines', collegeimg: 'Pictures/cct.png' ,course: 'BSCS - 3A DM',collegecolor: 'RED',image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle."}, 
        {position: "president", name:'Don Don Comia', collegeimg: 'Pictures/ced.png', course: 'CED - 3A DM', collegecolor: 'blue', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "president", name:'Jusip Orinio', collegeimg: 'Pictures/sas.png', course: 'BAELS - 3A DM', collegecolor: 'darkviolet', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "president", name: 'Junny Lester Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "vicepresident", name: 'Michael A. Johnson', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
        {position: "vicepresident", name: 'Christopher M. Smith', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Believe you can and you're halfway there." },
        {position: "vicepresident", name: 'Andrew W. Williams', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "The only limit to our realization of tomorrow will be our doubts of today." },
        {position: "vicepresident", name: 'David J. Brown', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "You are never too old to set another goal or to dream a new dream." },
        {position: "treasurer", name: 'Robert E. Miller', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." },
        {position: "treasurer", name: 'Daniel P. Wilson', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "The future belongs to those who believe in the beauty of their dreams." },
        {position: "treasurer", name: 'James L. Martinez', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "It does not matter how slowly you go as long as you do not stop." },
        {position: "treasurer", name: 'Richard S. Taylor', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "In the middle of difficulty lies opportunity." },
        {position: "accountant", name:'Franklin G. Garcia', collegeimg: 'Pictures/cct.png' ,course: 'BSCS - 3A DM',collegecolor: 'RED',image: 'Pictures/male hap badi.png', quotes: "Your time is limited, don't waste it living someone else's life."}, 
        {position: "accountant", name:'Donald T. Thompson', collegeimg: 'Pictures/ced.png', course: 'CED - 3A DM', collegecolor: 'blue', image: 'Pictures/male hap badi.png', quotes: "The only way to do great work is to love what you do." },
        {position: "accountant", name: 'Dexter D. Comia', collegeimg: 'Pictures/ced.png', course: 'CED - 3A DM', collegecolor: 'blue', image: 'Pictures/male hap badi.png', quotes: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
        {position: "accountant", name: 'Joan O. Orlanes', collegeimg: 'Pictures/sas.png', course: 'BAELS - 3A DM', collegecolor: 'darkviolet', image: 'Pictures/male hap badi.png', quotes: "The only way to do great work is to love what you do." },
        {position: "sas_council", name: 'Julius L. Paguia', collegeimg: 'Pictures/sas.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Believe you can and you're halfway there." },
        {position: "sas_council", name: 'Michael P. Paguia', collegeimg: 'Pictures/sas.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "The future belongs to those who believe in the beauty of their dreams." },
        {position: "sas_council", name: 'Michael P. Paguia', collegeimg: 'Pictures/sas.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "The future belongs to those who believe in the beauty of their dreams." },
        {position: "sas_council", name: 'Miguel I. Pascual', collegeimg: 'Pictures/sas.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Strive not to be a success, but rather to be of value." },
        {position: "iat_council", name: 'Martin P. Guinto', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "The only limit to our realization of tomorrow will be our doubts of today." },
        {position: "iat_council", name: 'Matthew P. Gonzales', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Change your thoughts and you change your world." },
        {position: "iat_council", name: 'Maurice P. Garcia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "It does not matter how slowly you go as long as you do not stop." },
        {position: "iat_council", name: 'Marvin P. Guevara', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "The best way to predict the future is to create it." },
        {position: "auditor", name: 'Julian L. Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "In the middle of difficulty lies opportunity." },
                        
        {position: "auditor", name: 'Junny Lester Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "auditor", name: 'Mark Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "auditor", name: 'Mark Paguia', collegeimg: 'Pictures/agri.png', course: 'IAT - 3A DM', collegecolor: 'green', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ccsict_council", name: 'Mark Paguia', collegeimg: 'Pictures/cct.png', course: 'IAT - 3A DM', collegecolor: 'red', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
       
        {position: "ccsict_council", name: 'Mark Paguia', collegeimg: 'Pictures/cct.png', course: 'IAT - 3A DM', collegecolor: 'red', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ccsict_council", name: 'Mark Paguia', collegeimg: 'Pictures/cct.png', course: 'IAT - 3A DM', collegecolor: 'red', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ccsict_council", name: 'Mark Paguia', collegeimg: 'Pictures/cct.png', course: 'IAT - 3A DM', collegecolor: 'red', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "cbm_council", name: 'Mark Paguia', collegeimg: 'Pictures/cbm.png', course: 'IAT - 3A DM', collegecolor: '#FFCC00', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." }, 
       
        {position: "cbm_council", name: 'Junny Lester Paguia', collegeimg: 'Pictures/cbm.png', course: 'IAT - 3A DM', collegecolor: '#FFCC00', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "cbm_council", name: 'Mark Paguia', collegeimg: 'Pictures/cbm.png', course: 'IAT - 3A DM', collegecolor: '#FFCC00', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "cbm_council", name: 'Mark Paguia', collegeimg: 'Pictures/cbm.png', course: 'IAT - 3A DM', collegecolor: '#FFCC00    ', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ps_council", name: 'Mark Paguia', collegeimg: 'Pictures/polytechnic.png', course: 'IAT - 3A DM', collegecolor: 'black', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        
        {position: "ps_council", name: 'Mark Paguia', collegeimg: 'Pictures/polytechnic.png', course: 'IAT - 3A DM', collegecolor: 'black', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ps_council", name: 'Mark Paguia', collegeimg: 'Pictures/polytechnic.png', course: 'IAT - 3A DM', collegecolor: 'black', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ps_council", name: 'Mark Paguia', collegeimg: 'Pictures/polytechnic.png', course: 'IAT - 3A DM', collegecolor: 'black', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ccje_council", name: 'Mark Paguia', collegeimg: 'Pictures/Crim.png', course: 'IAT - 3A DM', collegecolor: '#0000CC', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        
        {position: "ccje_council", name: 'Mark Paguia', collegeimg: 'Pictures/Crim.png', course: 'IAT - 3A DM', collegecolor: '#0000CC', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ccje_council", name: 'Mark Paguia', collegeimg: 'Pictures/Crim.png', course: 'IAT - 3A DM', collegecolor: '#0000CC', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ccje_council", name: 'Mark Paguia', collegeimg: 'Pictures/Crim.png', course: 'IAT - 3A DM', collegecolor: '#0000CC', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ced_council", name: 'Junny Lester Paguia', collegeimg: 'Pictures/ced.png', course: 'IAT - 3A DM', collegecolor: '#0099FF', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        
        {position: "ced_council", name: 'Junny Lester Paguia', collegeimg: 'Pictures/ced.png', course: 'IAT - 3A DM', collegecolor: '#0099FF', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ced_council", name: 'Mark Paguia', collegeimg: 'Pictures/ced.png', course: 'IAT - 3A DM', collegecolor: '#0099FF', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        {position: "ced_council", name: 'Mark Paguia', collegeimg: 'Pictures/ced.png', course: 'IAT - 3A DM', collegecolor: '#0099FF', image: 'Pictures/male hap badi.png', quotes: "Life is like riding a bicycle. To keep your balance, you must keep moving." },

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
        var Positions = ['president', 'vicepresident', 'treasurer', 'auditor','accountant', 'sas_council', 'ccsict_council', 'cbm_council', 'ced_council', 'iat_council', 'ccje_council', 'ps_council'];

        if(Officers[i].position == 'president'){
            president.appendChild(addOfficers);

        } else if(Officers[i].position == 'vicepresident'){
            vicepresident.appendChild(addOfficers);

        } else if(Officers[i].position == 'treasurer'){
            treasurer.appendChild(addOfficers);

        } else if(Officers[i].position == 'accountant'){
            accountant.appendChild(addOfficers);
            
        } else if(Officers[i].position == 'auditor'){
            auditor.appendChild(addOfficers);
            
        }else if(Officers[i].position == 'sas_council'){
            sascouncil.appendChild(addOfficers);
            
        } else if(Officers[i].position == 'ccsict_council'){
            ccsictcouncil.appendChild(addOfficers);
            
        } else if(Officers[i].position == 'ps_council'){
            pscouncil.appendChild(addOfficers);
            
        } else if(Officers[i].position == 'iat_council'){
            iatcouncil.appendChild(addOfficers);
            
        } else if(Officers[i].position == 'ccje_council'){
            ccjecouncil.appendChild(addOfficers);
            
        } else if(Officers[i].position == 'ced_council'){
            cedcouncil.appendChild(addOfficers);
            
        } else if(Officers[i].position == 'cbm_council'){
            cbmcouncil.appendChild(addOfficers);
        }
                    
        //then itong function mag seserved sa lahat ng placards ng click function as well as yung hide functions nila
        function showvoted(){
            //then itong part needed para makapag loop tayo sa selection ng placards from pres-businessM
            //katamad kapag mano mano tyaka madaming code masyado

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
                                        imgvote.classList.remove('hide');
                                        imgvote.src = 'Pictures/GreenCheck.png'
                                        votetext.classList.remove('hide');
                                        votetext.textContent = 'Vote';
                                        officer.style.backgroundColor = 'white';
                                        officer.classList.toggle('clicked');
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