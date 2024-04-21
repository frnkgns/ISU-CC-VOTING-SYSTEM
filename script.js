
//eto yung id ng code inputbox
const getcode = document.getElementById("code");
const notreg_text = document.getElementById('notreg-text');
notreg_text.classList.add('hide');

let codes = ['21-11856', '21-4535', '21-23413'];
let ccsictcodes = ['21-11629', '21-11729', '21-11829'];
let ccjecodes = ['21-1110', '22-11211', '23-11312'];
let iatcodes = ['23-80021', '22-70022', '21-60023'];
let sascodes = ['22-99001', '22-88002', '21-77003'];
let cbmcodes = ['22-55331', '22-99772', '22-66443'];
let cedcodes = ['21-11223', '22-22334', '23-33445'];
let pscodes = ['23-34563', '22-23452', '21-11930'];

//so dinagdagan natin ng eventlistener para may gagawin sya
//once priness natin yung enter Key sa laptop or sa cp keyboard
//mag proceed na sya sa main html natin
getcode.addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        for(let i = 0; i < codes.length; i++){
            //so first needed natin icompare kung tama ba yung code na ininput ni user
            if(codes[i] == getcode.value || ccsictcodes[i] || ccjecodes[i] || iatcodes[i] || sascodes[i] || cbmcodes[i] || cedcodes[i], pscodes[i]){
                //if true go
                notreg_text.textContent = 'Proceeding to voting area.';
                getcode.style.boxShadow = 'none'
                notreg_text.style.color = 'green'
                notreg_text.classList.remove('hide');
                getcode.classList.add('loggedin');

                //delay natin yung pag lipat sa main area para kunwari may loading naman
                //then sa loob ibabalik lang natin yung default value ng mga elements
                setTimeout(function(){
                    notreg_text.textContent = 'Code is not Registered.'
                    notreg_text.classList.add('hide');
                    getcode.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 1)'
                    getcode.value = ''
                    getcode.classList.remove('loggedin');
                    window.location.href = "main.html";
               },1500);

               break;
                
            } else if(getcode.value == ''){
                //kapag naman walang input
                notreg_text.textContent = 'Please enter your code to proceed.'
                notreg_text.style.color = 'blue'
                notreg_text.classList.remove('hide');
                getcode.style.boxShadow = 'none'
                getcode.classList.add('noinput');

                //then needed natin ibalik yung binago nating value sa taas, then syempre need natin itago ulit yung notice
                //itong set timeout is basically a delay, bago nya ihide or irevert back
                setTimeout(function(){
                    notreg_text.textContent = 'Code is not Registered.'
                    notreg_text.classList.add('hide');
                    getcode.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 1)'
                    getcode.classList.remove('noinput');
               },1500);

            } else {
                //then kapag d tugma yung code eto babato natin
                getcode.style.boxShadow = 'none'
                getcode.classList.add('notregistered');
                notreg_text.style.color = 'red'
                notreg_text.classList.remove('hide');
                

                setTimeout(function(){
                    notreg_text.classList.add('hide');
                    getcode.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 1)'
                    getcode.classList.remove('notregistered');
               },1500);
            }
        }
    }
});
//end of Log in Form

//Start of Main Form
