var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr) {

	input.splice(1, 1, "Roman Alamsyah Elsharawy");
	input.splice(2, 1, "Provinsi Bandar Lampung");
	input.splice(4, 1, "Pria", "SMA Internasional Metro");
	console.log(arr);


	var bulan = arr[3].split("/");
	var month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	var bulan = month[4];
	console.log(bulan);


	var TTL = arr[3].split("/");
	var sort = TTL.sort(function(a, b) {
		return b - a
	})
	console.log(sort);

	
	var TTL = arr[3].split("/");
	console.log(TTL.join('-'));


	var Nama = arr[1]
	console.log(Nama.slice(0, 15));

}

dataHandling2(input);

