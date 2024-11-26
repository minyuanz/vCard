import{c as i,a as c,o as r}from"./index-BNLuF3yf.js";const p={__name:"Vcard",setup(d){function l(){const t=`
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
        `.trim(),e=new Blob([t],{type:"text/vcard"});console.log(e);const n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.download="contact.vcf",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n)}function E(){const t=`
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
        `.trim(),e=new Blob([t],{type:"application/octet-stream"});console.log(e);const n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.download="contact.vcf",o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n)}function a(){const t=`BEGIN:VCARD
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
    `.trim(),e=new Blob([t],{type:"text/vcard"}),n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.download="contact.vcf",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n)}return(t,e)=>(r(),i("div",null,[e[0]||(e[0]=c("h1",null,"生成並下載 vCard 文件",-1)),c("button",{id:"download-vcard",onClick:l},"下載聯絡人1"),c("button",{id:"download-vcard",onClick:E},"下載聯絡人2"),c("button",{id:"download-vcard",onClick:a},"下載聯絡人3333")]))}};export{p as default};
