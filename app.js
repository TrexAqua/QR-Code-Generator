const imgBox = document.getElementById('imgBox')
const qrImage = document.getElementById('qrImage')
const qrText = document.getElementById('qrText')
const buttonn = document.getElementById('buttonn')
const APIURL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

const generateQR = () => {
    qrImage.src = `${APIURL}${qrText.value}`
}

buttonn.addEventListener('click', ()=>{
    if(qrText.value === ''){
        alert('Please enter some text or URL')
    }else{
     generateQR()
    imgBox.classList.add('show-img')   
    }
    
})