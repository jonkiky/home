var vCardsJS = require('vcards-js');
 
//create a new vCard
var vCard = vCardsJS();
 
//set properties
vCard.firstName = 'Yizhen';
vCard.lastName = 'Chen';
vCard.uid = '8319d07d-385f-4091-9309-5fcda62234bc';
vCard.organization = 'National Cancer Institute';
vCard.photo.attachFromUrl('https://raw.githubusercontent.com/jonkiky/home/main/img/me.jpg', 'JPEG');
vCard.workPhone = '518-256-3656';
vCard.title = 'Senior Software Developer';
vCard.email = 'ychen315040@gmail.com';
vCard.workEmail = 'yizhen.chen@nih.gov';
 
//save to file
vCard.saveToFile('./yizhenchen.vcf');
 
//get as formatted string
console.log(vCard.getFormattedString());
 