function submitform(form) {
	var pet = document.forms["form"]["input9-1"].value;
	var email = document.forms["form"]["input2-1"].value;

	if (pet.toLowerCase()=="dog") {
		window.open('https://leetcode.com/problemset/all/', '_blank');
	}else if(pet.toLowerCase()=="cat"){{
		window.open("google.com","_blank");
	}
}
}