


// Testing Production Api
// const uriBase = 'https://reqres.in/';

// Production Base Url 

const BaseUrl = 'http://3.109.117.245:8081/';



//Testing api 


//     export const getSingleUser = function() {
//   return fetch(uriBase + 'api/users/1', {
//     method: 'GET',
//     headers: {
//       // 'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },

//     // body: JSON.stringify(data),
//   })
//     .then(response => response.json())
//     .then(responseJson => {
//       return responseJson;
//     })
//     .catch(error => {
//       return error;
//     });
// };


// export const getAllUser = function() {
//     return fetch(uriBase + 'api/users?page=2', {
//       method: 'GET',
//       headers: {
//         // 'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
  
//       // body: JSON.stringify(data),
//     })
//       .then(response => response.json())
//       .then(responseJson => {
//         return responseJson;
//       })
//       .catch(error => {
//         return error;
//       });
//   };

  //Testing api 


  //login 

  export const login = function(data) {
  return fetch(BaseUrl + 'api/auth/login', {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      return error;
    });
};


 //Home Page Car List 

 export const home_page_car_list = function(data) {
  return fetch(BaseUrl + 'api/car/all', {
    method: 'POST',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      return error;
    });
};