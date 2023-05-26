let submitBtn = document.getElementById("submitBtn")
let dataInsert = document.getElementById("dataInsert")


submitBtn.onclick = function(){

 let fNameIn = document.getElementById("fName").value
 let lNameIn = document.getElementById("lName").value
 let emailIn = document.getElementById("email").value
 let pNumberIn = document.getElementById("pNumber").value
 let dateOfBirthIn = document.getElementById("dateOfBirth").value
 let religionIn = document.getElementById("religion").value
 let genderIn = document.getElementById("gender").value
 let addressIn = document.getElementById("address").value
 let nationalityIn = document.getElementById("nationality").value
 let cityIn = document.getElementById("city").value
 let countryIn = document.getElementById("country").value
 let postCodeIn = document.getElementById("postCode").value


 let dataRow = document.createElement("tr")
 

 let fNameView = document.createElement("td")
 let lNameView = document.createElement("td")
 let emailView = document.createElement("td")
 let pNumberView = document.createElement("td")
 let dateOfBirthView = document.createElement("td")
 let religionView = document.createElement("td")
 let genderView = document.createElement("td")
 let addressView = document.createElement("td")
 let nationalityView = document.createElement("td")
 let cityView = document.createElement("td")
 let countryView = document.createElement("td")
 let postCodeView = document.createElement("td")


 fNameView.innerHTML = fNameIn
 lNameView.innerHTML = lNameIn
 emailView.innerHTML = emailIn
 pNumberView.innerHTML = pNumberIn
 dateOfBirthView.innerHTML = dateOfBirthIn
 religionView.innerHTML = religionIn
 genderView.innerHTML = genderIn
 addressView.innerHTML = addressIn
 nationalityView.innerHTML = nationalityIn
 cityView.innerHTML = cityIn
 countryView.innerHTML = countryIn
 postCodeView.innerHTML = postCodeIn


 dataInsert.appendChild(dataRow)
 dataRow.appendChild(fNameView)
 dataRow.appendChild(lNameView)
 dataRow.appendChild(emailView)
 dataRow.appendChild(pNumberView)
 dataRow.appendChild(dateOfBirthView)
 dataRow.appendChild(religionView)
 dataRow.appendChild(genderView)
 dataRow.appendChild(addressView)
 dataRow.appendChild(nationalityView)
 dataRow.appendChild(cityView)
 dataRow.appendChild(countryView)
 dataRow.appendChild(postCodeView)

}


