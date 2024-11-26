<template lang="">
  <div>
    <h1>生成並下載 vCard 文件</h1>
    <button id="download-vcard" @click="clickHandler">下載聯絡人1</button>
    <button id="download-vcard" @click="clickHandler2">下載聯絡人2</button>
    <button id="download-vcard" @click="clickHandler3">下載聯絡人31</button>
  </div>
</template>
<script setup>
function clickHandler() {
  //  document.getElementById('download-vcard').addEventListener('click', () => {
  //       // 定義聯絡人的 vCard 資料
  const vCardData = `
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
        `.trim()

  // console.log(vCardData)

  // 創建 Blob 將 vCard 內容包裝成文件
  const blob = new Blob([vCardData], { type: 'text/vcard' })
  console.log(blob)
  // return

  // 使用 URL.createObjectURL 為 Blob 創建臨時下載 URL
  const url = URL.createObjectURL(blob)

  // 創建隱藏的下載連結
  const link = document.createElement('a')
  link.href = url
  link.download = 'contact.vcf' // 設定下載的文件名
  // link.style.display = 'none'

  // 添加連結到文檔，點擊後移除
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // 釋放 URL 資源
  URL.revokeObjectURL(url)
}

function clickHandler2() {
  //  document.getElementById('download-vcard').addEventListener('click', () => {
  //       // 定義聯絡人的 vCard 資料
  const vCardData = `
  VERSION:3.0
  N:;張三;;;
  FN:張三
  TEL;type=CELL;type=VOICE;type=pref:+86 187 7880 0000
  END:VCARD
        `.trim()

  // console.log(vCardData)

  // 創建 Blob 將 vCard 內容包裝成文件
  const blob = new Blob([vCardData], { type: 'text/vcard' })
  console.log(blob)
  // return
  // 使用 URL.createObjectURL 為 Blob 創建臨時下載 URL
  const url = URL.createObjectURL(blob)

  // 創建隱藏的下載連結
  const link = document.createElement('a')
  link.href = url
  link.download = 'contact.vcf' // 設定下載的文件名
  link.style.display = 'none'

  // 添加連結到文檔，點擊後移除
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // 釋放 URL 資源
  URL.revokeObjectURL(url)
}

function clickHandler3() {
  const vcfContent = `BEGIN:VCARD
  BEGIN:VCARD
  VERSION:3.0
  N:Doe;John;;;
  FN:John Doe
  NICKNAME:Johnny
  TEL;TYPE=mobile:+123456789
  TEL;TYPE=work:+987654321
    `.trim()

  const blob = new Blob([vcfContent], { type: 'text/vcard' })
  const url = URL.createObjectURL(blob)

  // 自動觸發下載並請求手機系統處理
  const link = document.createElement('a')
  link.href = url
  link.download = 'contact.vcf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
</script>
<style lang=""></style>
