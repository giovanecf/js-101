let idade = prompt(`Digite qual é sua idade`);


console.log(`Minha idade é ${idade} `)
// alert(`Minha idade é ${idade} `)

const result = document.getElementsByClassName("result");
result[0].innerText = `Minha idade é ${idade} `;
