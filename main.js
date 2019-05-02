// computer genera 16 numeri presi casualmente da 1 a 100
var computer_num;
var utente_num;

for(i=0;i<16;i++){
  computer_num=Math.floor(Math.random()*100)+1;
  console.log(computer_num);
}
// richiesta al utente di inserimento numero da 1 a 100
// for(i=0;i<84;i++){
//   utente_num=parseInt(prompt('insersci un numero da 1 a 100'));
// }
do{
  utente_num=parseInt(prompt('inserisci un numero da 1 a 100'));
    if(utente_num!==computer_num){
      console.log('vai avanti');
    }else{
      console.log('hai perso');
    }
  i++;
}
while(i==computer_num);
// i=1;
// while(i==computer_num){
//   utente_num=parseInt(prompt('inserisci un numero da 1 a 100'));
//   if(utente_num!==computer_num){
//     console.log('vai avanti');
//   }else{
//     console.log('hai perso');
//   }
//   i++;
// }
// condizioni per le quali il gioco va avanti o termina
