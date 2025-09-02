
const buses = [
  {
    id: 1,
    source: "Lucknow",
    destination: "Kanpur",
    time: "08:30 AM",
    fare: 150,
    seatsAvailable: 25
  },
  {
    id: 2,
    source: "Lucknow",
    destination: "Varanasi",
    time: "10:00 AM",
    fare: 550,
    seatsAvailable: 10
  },
  {
    id: 3,
    source: "Kanpur",
    destination: "Delhi",
    time: "09:00 PM",
    fare: 900,
    seatsAvailable: 5
  },
  {
    id: 4,
    source: "Agra",
    destination: "Mathura",
    time: "07:15 AM",
    fare: 80,
    seatsAvailable: 35
  },
  {
    id: 5,
    source: "Prayagraj",
    destination: "Lucknow",
    time: "11:45 AM",
    fare: 480,
    seatsAvailable: 18
  },
  {
    id: 6,
    source: "Gorakhpur",
    destination: "Lucknow",
    time: "06:00 PM",
    fare: 600,
    seatsAvailable: 22
  },
  {
    id: 7,
    source: "Varanasi",
    destination: "Prayagraj",
    time: "02:30 PM",
    fare: 250,
    seatsAvailable: 40
  },
  {
    id: 8,
    source: "Meerut",
    destination: "Ghaziabad",
    time: "09:00 AM",
    fare: 100,
    seatsAvailable: 30
  },
  {
    id: 9,
    source: "Noida",
    destination: "Agra",
    time: "06:30 AM",
    fare: 400,
    seatsAvailable: 12
  },
  {
    id: 10,
    source: "Bareilly",
    destination: "Lucknow",
    time: "05:00 AM",
    fare: 520,
    seatsAvailable: 8
  },
  {
    id: 11,
    source: "Jhansi",
    destination: "Kanpur",
    time: "01:00 PM",
    fare: 450,
    seatsAvailable: 15
  },
  {
    id: 12,
    source: "Aligarh",
    destination: "Delhi",
    time: "08:45 AM",
    fare: 300,
    seatsAvailable: 28
  },
  {
    id: 13,
    source: "Lucknow",
    destination: "Gorakhpur",
    time: "11:00 PM",
    fare: 620,
    seatsAvailable: 3
  },
  {
    id: 14,
    source: "Kanpur",
    destination: "Prayagraj",
    time: "07:00 AM",
    fare: 420,
    seatsAvailable: 20
  },
  {
    id: 15,
    source: "Ghaziabad",
    destination: "Lucknow",
    time: "10:30 PM",
    fare: 850,
    seatsAvailable: 9
  },
  {
    id: 16,
    source: "Saharanpur",
    destination: "Meerut",
    time: "04:00 PM",
    fare: 280,
    seatsAvailable: 17
  },
  {
    id: 17,
    source: "Moradabad",
    destination: "Bareilly",
    time: "12:15 PM",
    fare: 200,
    seatsAvailable: 33
  },
  {
    id: 18,
    source: "Ayodhya",
    destination: "Lucknow",
    time: "03:30 PM",
    fare: 300,
    seatsAvailable: 24
  },
  {
    id: 19,
    source: "Mathura",
    destination: "Delhi",
    time: "05:45 PM",
    fare: 350,
    seatsAvailable: 11
  },
  {
    id: 20,
    source: "Firozabad",
    destination: "Agra",
    time: "10:00 AM",
    fare: 90,
    seatsAvailable: 38
  },
  {
    id: 21,
    source: "Lucknow",
    destination: "Agra",
    time: "07:30 AM",
    fare: 650,
    seatsAvailable: 14
  },
  {
    id: 22,
    source: "Varanasi",
    destination: "Gorakhpur",
    time: "09:15 AM",
    fare: 480,
    seatsAvailable: 19
  },
  {
    id: 23,
    source: "Prayagraj",
    destination: "Varanasi",
    time: "06:00 AM",
    fare: 250,
    seatsAvailable: 29
  },
  {
    id: 24,
    source: "Delhi",
    destination: "Lucknow",
    time: "08:00 PM",
    fare: 950,
    seatsAvailable: 7
  },
  {
    id: 25,
    source: "Kanpur",
    destination: "Agra",
    time: "09:45 PM",
    fare: 500,
    seatsAvailable: 13
  },
  {
    id: 26,
    source: "Gorakhpur",
    destination: "Patna",
    time: "08:00 AM",
    fare: 700,
    seatsAvailable: 16
  },
  {
    id: 27,
    source: "Bareilly",
    destination: "Delhi",
    time: "11:30 PM",
    fare: 600,
    seatsAvailable: 21
  },
  {
    id: 28,
    source: "Jhansi",
    destination: "Gwalior",
    time: "02:00 PM",
    fare: 220,
    seatsAvailable: 26
  },
  {
    id: 29,
    source: "Meerut",
    destination: "Delhi",
    time: "07:00 AM",
    fare: 150,
    seatsAvailable: 40
  },
  {
    id: 30,
    source: "Agra",
    destination: "Jaipur",
    time: "10:00 PM",
    fare: 600,
    seatsAvailable: 4
  },
  {
    id: 31,
    source: "Lucknow",
    destination: "Ayodhya",
    time: "06:15 AM",
    fare: 300,
    seatsAvailable: 31
  },
  {
    id: 32,
    source: "Muzaffarnagar",
    destination: "Saharanpur",
    time: "01:30 PM",
    fare: 120,
    seatsAvailable: 23
  },
  {
    id: 33,
    source: "Sitapur",
    destination: "Lucknow",
    time: "08:00 AM",
    fare: 180,
    seatsAvailable: 34
  },
  {
    id: 34,
    source: "Raebareli",
    destination: "Prayagraj",
    time: "10:45 AM",
    fare: 280,
    seatsAvailable: 12
  },
  {
    id: 35,
    source: "Basti",
    destination: "Gorakhpur",
    time: "03:00 PM",
    fare: 150,
    seatsAvailable: 27
  },
  {
    id: 36,
    source: "Gonda",
    destination: "Ayodhya",
    time: "11:00 AM",
    fare: 100,
    seatsAvailable: 39
  },
  {
    id: 37,
    source: "Etawah",
    destination: "Kanpur",
    time: "09:30 AM",
    fare: 300,
    seatsAvailable: 19
  },
  {
    id: 38,
    source: "Shahjahanpur",
    destination: "Bareilly",
    time: "05:00 PM",
    fare: 160,
    seatsAvailable: 25
  },
  {
    id: 39,
    source: "Lucknow",
    destination: "Bareilly",
    time: "08:00 AM",
    fare: 520,
    seatsAvailable: 11
  },
  {
    id: 40,
    source: "Varanasi",
    destination: "Patna",
    time: "07:45 AM",
    fare: 550,
    seatsAvailable: 14
  },
  {
    id: 41,
    source: "Kanpur",
    destination: "Jhansi",
    time: "04:30 PM",
    fare: 450,
    seatsAvailable: 8
  },
  {
    id: 42,
    source: "Agra",
    destination: "Lucknow",
    time: "11:00 PM",
    fare: 650,
    seatsAvailable: 6
  },
  {
    id: 43,
    source: "Gorakhpur",
    destination: "Varanasi",
    time: "01:15 PM",
    fare: 480,
    seatsAvailable: 20
  },
  {
    id: 44,
    source: "Prayagraj",
    destination: "Kanpur",
    time: "03:00 PM",
    fare: 420,
    seatsAvailable: 30
  },
  {
    id: 45,
    source: "Delhi",
    destination: "Agra",
    time: "05:30 AM",
    fare: 450,
    seatsAvailable: 17
  },
  {
    id: 46,
    source: "Lucknow",
    destination: "Delhi",
    time: "09:30 PM",
    fare: 950,
    seatsAvailable: 10
  },
  {
    id: 47,
    source: "Meerut",
    destination: "Lucknow",
    time: "08:30 PM",
    fare: 800,
    seatsAvailable: 5
  },
  {
    id: 48,
    source: "Bareilly",
    destination: "Moradabad",
    time: "06:45 AM",
    fare: 200,
    seatsAvailable: 32
  },
  {
    id: 49,
    source: "Ayodhya",
    destination: "Varanasi",
    time: "09:00 AM",
    fare: 400,
    seatsAvailable: 22
  },
  {
    id: 50,
    source: "Mathura",
    destination: "Agra",
    time: "08:00 PM",
    fare: 80,
    seatsAvailable: 36
  },
  {
    id: 51,
    source: "Hapur",
    destination: "Ghaziabad",
    time: "07:00 AM",
    fare: 70,
    seatsAvailable: 40
  },
  {
    id: 52,
    source: "Rampur",
    destination: "Bareilly",
    time: "02:30 PM",
    fare: 130,
    seatsAvailable: 28
  },
  {
    id: 53,
    source: "Budaun",
    destination: "Bareilly",
    time: "10:00 AM",
    fare: 100,
    seatsAvailable: 24
  },
  {
    id: 54,
    source: "Pilibhit",
    destination: "Bareilly",
    time: "04:15 PM",
    fare: 110,
    seatsAvailable: 30
  },
  {
    id: 55,
    source: "Lucknow",
    destination: "Sitapur",
    time: "05:00 PM",
    fare: 180,
    seatsAvailable: 18
  },
  {
    id: 56,
    source: "Kanpur",
    destination: "Lucknow",
    time: "06:00 AM",
    fare: 150,
    seatsAvailable: 35
  },
  {
    id: 57,
    source: "Varanasi",
    destination: "Lucknow",
    time: "08:30 PM",
    fare: 550,
    seatsAvailable: 12
  },
  {
    id: 58,
    source: "Prayagraj",
    destination: "Ayodhya",
    time: "07:30 AM",
    fare: 350,
    seatsAvailable: 20
  },
  {
    id: 59,
    source: "Agra",
    destination: "Kanpur",
    time: "01:00 PM",
    fare: 500,
    seatsAvailable: 15
  },
  {
    id: 60,
    source: "Gorakhpur",
    destination: "Delhi",
    time: "07:00 PM",
    fare: 1200,
    seatsAvailable: 9
  },
  {
    id: 61,
    source: "Noida",
    destination: "Lucknow",
    time: "09:00 PM",
    fare: 880,
    seatsAvailable: 11
  },
  {
    id: 62,
    source: "Ghaziabad",
    destination: "Kanpur",
    time: "08:00 PM",
    fare: 800,
    seatsAvailable: 16
  },
  {
    id: 63,
    source: "Aligarh",
    destination: "Agra",
    time: "11:00 AM",
    fare: 150,
    seatsAvailable: 29
  },
  {
    id: 64,
    source: "Sultanpur",
    destination: "Lucknow",
    time: "09:45 AM",
    fare: 280,
    seatsAvailable: 21
  },
  {
    id: 65,
    source: "Azamgarh",
    destination: "Varanasi",
    time: "02:00 PM",
    fare: 220,
    seatsAvailable: 26
  },
  {
    id: 66,
    source: "Ballia",
    destination: "Varanasi",
    time: "06:30 AM",
    fare: 350,
    seatsAvailable: 19
  },
  {
    id: 67,
    source: "Jaunpur",
    destination: "Lucknow",
    time: "08:15 AM",
    fare: 450,
    seatsAvailable: 23
  },
  {
    id: 68,
    source: "Banda",
    destination: "Kanpur",
    time: "12:30 PM",
    fare: 300,
    seatsAvailable: 17
  },
  {
    id: 69,
    source: "Mirzapur",
    destination: "Prayagraj",
    time: "05:30 PM",
    fare: 180,
    seatsAvailable: 31
  },
  {
    id: 70,
    source: "Unnao",
    destination: "Kanpur",
    time: "07:00 PM",
    fare: 60,
    seatsAvailable: 38
  },
  {
    id: 71,
    source: "Lucknow",
    destination: "Raebareli",
    time: "01:45 PM",
    fare: 160,
    seatsAvailable: 24
  },
  {
    id: 72,
    source: "Kanpur",
    destination: "Farrukhabad",
    time: "09:00 AM",
    fare: 280,
    seatsAvailable: 14
  },
  {
    id: 73,
    source: "Agra",
    destination: "Firozabad",
    time: "06:00 PM",
    fare: 90,
    seatsAvailable: 40
  },
  {
    id: 74,
    source: "Mathura",
    destination: "Vrindavan",
    time: "10:30 AM",
    fare: 40,
    seatsAvailable: 45
  },
  {
    id: 75,
    source: "Varanasi",
    destination: "Sarnath",
    time: "11:00 AM",
    fare: 50,
    seatsAvailable: 42
  },
  {
    id: 76,
    source: "Gorakhpur",
    destination: "Kushinagar",
    time: "01:00 PM",
    fare: 120,
    seatsAvailable: 33
  },
  {
    id: 77,
    source: "Bareilly",
    destination: "Pilibhit",
    time: "08:45 AM",
    fare: 110,
    seatsAvailable: 27
  },
  {
    id: 78,
    source: "Moradabad",
    destination: "Rampur",
    time: "03:30 PM",
    fare: 70,
    seatsAvailable: 37
  },
  {
    id: 79,
    source: "Delhi",
    destination: "Meerut",
    time: "04:00 PM",
    fare: 150,
    seatsAvailable: 28
  },
  {
    id: 80,
    source: "Lucknow",
    destination: "Kanpur",
    time: "07:00 PM",
    fare: 150,
    seatsAvailable: 13
  },
  {
    id: 81,
    source: "Kanpur",
    destination: "Lucknow",
    time: "09:00 AM",
    fare: 150,
    seatsAvailable: 30
  },
  {
    id: 82,
    source: "Lucknow",
    destination: "Varanasi",
    time: "11:30 PM",
    fare: 580,
    seatsAvailable: 8
  },
  {
    id: 83,
    source: "Agra",
    destination: "Delhi",
    time: "02:00 PM",
    fare: 450,
    seatsAvailable: 19
  },
  {
    id: 84,
    source: "Prayagraj",
    destination: "Lucknow",
    time: "08:00 PM",
    fare: 500,
    seatsAvailable: 6
  },
  {
    id: 85,
    source: "Gorakhpur",
    destination: "Ayodhya",
    time: "06:00 AM",
    fare: 320,
    seatsAvailable: 25
  },
  {
    id: 86,
    source: "Varanasi",
    destination: "Ayodhya",
    time: "01:00 PM",
    fare: 400,
    seatsAvailable: 18
  },
  {
    id: 87,
    source: "Meerut",
    destination: "Saharanpur",
    time: "10:15 AM",
    fare: 280,
    seatsAvailable: 22
  },
  {
    id: 88,
    source: "Noida",
    destination: "Meerut",
    time: "05:00 PM",
    fare: 120,
    seatsAvailable: 34
  },
  {
    id: 89,
    source: "Bareilly",
    destination: "Shahjahanpur",
    time: "07:30 AM",
    fare: 160,
    seatsAvailable: 29
  },
  {
    id: 90,
    source: "Jhansi",
    destination: "Lucknow",
    time: "09:00 PM",
    fare: 600,
    seatsAvailable: 11
  },
  {
    id: 91,
    source: "Aligarh",
    destination: "Kanpur",
    time: "07:00 AM",
    fare: 550,
    seatsAvailable: 16
  },
  {
    id: 92,
    source: "Lucknow",
    destination: "Jhansi",
    time: "06:45 AM",
    fare: 600,
    seatsAvailable: 20
  },
  {
    id: 93,
    source: "Kanpur",
    destination: "Varanasi",
    time: "10:00 PM",
    fare: 700,
    seatsAvailable: 7
  },
  {
    id: 94,
    source: "Ghaziabad",
    destination: "Aligarh",
    time: "03:00 PM",
    fare: 250,
    seatsAvailable: 26
  },
  {
    id: 95,
    source: "Saharanpur",
    destination: "Delhi",
    time: "05:00 AM",
    fare: 400,
    seatsAvailable: 21
  },
  {
    id: 96,
    source: "Moradabad",
    destination: "Lucknow",
    time: "09:30 PM",
    fare: 650,
    seatsAvailable: 10
  },
  {
    id: 97,
    source: "Ayodhya",
    destination: "Prayagraj",
    time: "02:30 PM",
    fare: 350,
    seatsAvailable: 24
  },
  {
    id: 98,
    source: "Mathura",
    destination: "Lucknow",
    time: "08:00 PM",
    fare: 750,
    seatsAvailable: 13
  },
  {
    id: 99,
    source: "Firozabad",
    destination: "Lucknow",
    time: "07:15 AM",
    fare: 600,
    seatsAvailable: 15
  },
  {
    id: 100,
    source: "Lucknow",
    destination: "Noida",
    time: "10:45 PM",
    fare: 880,
    seatsAvailable: 12
  },
  {
    id: 101,
    source: "Deoria",
    destination: "Gorakhpur",
    time: "09:00 AM",
    fare: 100,
    seatsAvailable: 35
  },
  {
    id: 102,
    source: "Mainpuri",
    destination: "Agra",
    time: "11:30 AM",
    fare: 250,
    seatsAvailable: 22
  },
  {
    id: 103,
    source: "Lakhimpur",
    destination: "Lucknow",
    time: "08:00 AM",
    fare: 280,
    seatsAvailable: 19
  },
  {
    id: 104,
    source: "Hardoi",
    destination: "Lucknow",
    time: "04:00 PM",
    fare: 220,
    seatsAvailable: 28
  },
  {
    id: 105,
    source: "Pratapgarh",
    destination: "Prayagraj",
    time: "10:00 AM",
    fare: 120,
    seatsAvailable: 31
  }
];

export default buses;