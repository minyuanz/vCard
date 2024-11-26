import{c as r,a as c,o as i}from"./index-DH2NZyWc.js";const p={__name:"Vcard",setup(E){function l(){const n=`
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
        `.trim(),e=new Blob([n],{type:"text/vcard"});console.log(e);const t=URL.createObjectURL(e),o=document.createElement("a");o.href=t,o.download="contact.vcf",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)}function a(){const n=`
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
        `.trim(),e=new Blob([n],{type:"application/octet-stream"});console.log(e);const t=URL.createObjectURL(e),o=document.createElement("a");o.href=t,o.download="contact.vcf",o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)}function d(){const n=`BEGIN:VCARD
VERSION:3.0
N:;张三;;;
FN:张三
TEL;type=CELL;type=VOICE;type=pref:+86 187 7880 0000
END:VCARD
    `.trim(),e=new Blob([n],{type:"text/vcard"}),t=URL.createObjectURL(e),o=document.createElement("a");o.href=t,o.download="contact.vcf",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(t)}return(n,e)=>(i(),r("div",null,[e[0]||(e[0]=c("h1",null,"生成並下載 vCard 文件",-1)),c("button",{id:"download-vcard",onClick:l},"下載聯絡人1"),c("button",{id:"download-vcard",onClick:a},"下載聯絡人2"),c("button",{id:"download-vcard",onClick:d},"下載聯絡人3")]))}};export{p as default};
