export const me = {
  "gender": "male",
  "name": {
    "title": "mr",
    "first": "lance",
    "last": "thomas"
  },
  "location": {
    "street": "6942 first street",
    "city": "elk grove",
    "state": "new hampshire",
    "postcode": 30411
  },
  "email": "lance.thomas@example.com",
  "login": {
    "username": "organicmouse687",
    "password": "frodo1",
    "salt": "0cSpyp70",
    "md5": "bf758d9c79ef3c8a2c3fd900fb0c3148",
    "sha1": "4f28fcd2d5e5ae5e0ff55b7528841e350cabf9fb",
    "sha256": "1d44ef3ad01dafe929c56021498d8a6d89b2c438bd3f6a07de777ed35b98b5e1"
  },
  "dob": "1969-12-14 07:28:16",
  "registered": "2010-08-09 13:37:38",
  "phone": "(589)-070-0928",
  "cell": "(110)-065-6280",
  "id": {
    "name": "SSN",
    "value": "408-64-0336"
  },
  "picture": {
    "large": "https://randomuser.me/api/portraits/men/2.jpg",
    "medium": "https://randomuser.me/api/portraits/med/men/2.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg"
  },
  "nat": "US"
};

export const events = [
  {
    "id": 1,
    "title": "Big Birthday Party",
    "description": "This is a very big party!",
    "start": "2017-07-10 13:00",
    "finish": "2017-07-10 17:00"
  },
  {
    "id": 2,
    "title": "Big Corp Team Building",
    "description": "Big Corp team building for 30 people",
    "start": "2017-07-12 14:00",
    "finish": "2017-07-12 18:00"
  },
  {
    "id": 3,
    "title": "Challah Baking",
    "description": "The traditional challah baking",
    "start": "2017-07-13 09:00",
    "finish": "2017-07-13 12:00"
  },
  {
    "id": 4,
    "title": "Barista Fest",
    "description": "Teaching people how to do great coffee",
    "start": "2017-07-21 14:00",
    "finish": "2017-07-21 17:00"
  },
  {
    "id": 5,
    "title": "Random Hacks of Kindness Party",
    "description": "Celebrating our great time and achievements!",
    "start": "2017-07-23 18:00",
    "finish": "2017-07-23 21:00"
  }
];

export function getEvents() {
  return fetch('http://ec2-54-79-122-110.ap-southeast-2.compute.amazonaws.com/api/events');
}