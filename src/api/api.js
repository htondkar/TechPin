const categories =  require( '../helpers/categories');
function getRandomYear() {
  return Math.floor(Math.random() * 15 + 2000);
}
function getRandomRate() {
  return Math.floor(Math.random() * 5 + 1);
}
function getRandomRaters() {
  return Math.floor(Math.random() * 50 + 1);
}
function getRandomNps() {
  return Math.floor(Math.random() * 200 + (-100));
}
function getRandomCategory(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}

const names = [
  "Snapp","Divar","Digikala","Aparat","Digiato","Takhfifan","Eventbox","Jobinja"
,"Bamilo","Zoomit","ZoodFood","Cafe Bazaar","Torob","Bipfa","Tiwall","CodeLearnr"
,"Netbarg","Rangoor","Alibaba.ir","Boghche","Bama","Nested","Beporsim","Reyhoon"
,"IranDeliver","Toolgram","PayPing","Ganjoor","Umekhane","Atbox","Nested","Digikala"
,"Divar","Snapp","Eventbox","Hila Mall","Bahamta","Telewebion","ISPFY","2nate","Fidilio"
,"Fidibo","Iran Talent","IranDeliver","Taskulu","Jobinja","Torob","Aparat","Beeptunes"
,"CodeLearnr","Shabesh","DaftareShoma","Touristgah","Umekhane","Unesh","Bahamta","Quera"
,"Iran Recruit","Tanuor.ir","Navaar","Puzzley","Eligasht","Ganjoor","ISPFY","Hila Mall"
,"Peykyab","Toolgram","Komodaa","TrigUp","Sokan Academy","Tac Accelerator","iCoffee"
,"Adro","Atbox","Last Second"];

var ratedBy;


const list = names.map( function(name, i) {

  if (i < 25) {ratedBy = 'editors';}
  else if (i > 49) {ratedBy = 'people';}
  else {ratedBy = 'new';}
  return {
    name: name,
    creationYear: getRandomYear(),
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, quam.',
    longDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima facere minus dolores amet itaque, ullam harum nisi voluptatibus velit praesentium quaerat laboriosam esse consectetur a dignissimos culpa perspiciatis fugit. Ipsa!',
    logoURL: "http://techpin.ir/media/products/logo/eventbox.jpg",
    rating: getRandomRate(),
    raters: getRandomRaters(),
    category: getRandomCategory(categories),
    ratedBy: ratedBy,
    city: 'Tehran',
    country: 'Iran',
    iOsApp: '',
    androidApp: '',
    linkedinProfile: '',
    webSite: 'http://www.google.com',
    comments: [
      {author:'lorem1', text:'Lorem ipsum dolor sit.'},
      {author:'lorem2', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat.'},
      {author:'lorem2', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat.'},
      {author:'lorem2', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat.'},
      {author:'lorem2', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat.'},
      {author:'lorem2', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat.'},
      {author:'lorem2', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat.'},
      {author:'lorem2', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, repellat.'},
      {author:'lorem3', text:'Lorem ipsum dolor sit.'}
    ],
    npsScore: getRandomNps(),
  }
})



class mockApi {
 static loadList() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(Object.assign([], list));
    }, 200);
    });
  }
  static submitStartUp(formData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('submit successful');
      }, 1000);
    })
  }
}




export default mockApi;
