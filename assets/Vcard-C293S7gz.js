import{c as r,a as n,o as a}from"./index-B6Djqddh.js";const i={__name:"Vcard",setup(E){function t(){const o=`
  BEGIN:VCARD
  VERSION:3.0
  N:Doe;John;;;
  FN:John Doe
  NICKNAME:Johnny
  TEL;TYPE=mobile:+123456789
  TEL;TYPE=work:+987654321
  EMAIL;TYPE=work:john.doe@company.com
  EMAIL;TYPE=personal:johnny@gmail.com
  ADR;TYPE=home:;;123 Main St;Springfield;IL;62704;USA
  ADR;TYPE=work:;;456 Office St;Metropolis;NY;10118;USA
  ORG:Example Company
  TITLE:Software Engineer
  ROLE:Developer
  URL:https://www.example.com
  X-SOCIALPROFILE;TYPE=LinkedIn:https://www.linkedin.com/in/johndoe
  X-SOCIALPROFILE;TYPE=Twitter:https://twitter.com/johndoe
  BDAY:1990-01-01
  NOTE:重要客戶，需定期聯絡
  CATEGORIES:VIP,Clients
  PHOTO;VALUE=URL:https://example.com/photos/johndoe.jpg
  END:VCARD
        `.trim();console.log(o)}return(o,e)=>(a(),r("div",null,[e[0]||(e[0]=n("h1",null,"生成並下載 vCard 文件",-1)),n("button",{id:"download-vcard",onClick:t},"下載聯絡人")]))}};export{i as default};
