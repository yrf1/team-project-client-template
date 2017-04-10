import React from 'react';
//import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "Uthrift";

// Put your mock objects here, as in Workshop 4
var initialData = {
  "users": {

    "1": {
      "_id": 1,
      "Email": "johndoe@umass.edu",
      "Cellphone": "987-654-3210",
      "FirstName": "John",
      "LastName": "Doe",
      "NickName": "Someone",
      "Photo": "img/avatar.png",
      "trackList": [],
      "sellingList": [4,5,6],
      "Password": "123456",
      "searchGory": "Textbooks",
      "searchTerm": "Books on how to hack life",
      "viewingItem": 1
    },
    "2": {
      "_id": 2,
      "Email": "janerando@umass.edu",
      "Cellphone": "012-345-5678",
      "FirstName": "Jane",
      "LastName": "Rando",
      "NickName": "AnotherOne",
      "Photo": "img/avatar2.png",
      "trackList": [],
      "sellingList": [1,2,3],
      "Password": "233333",
      "searchGory": "Textbooks",
      "searchTerm": "",
      "viewingItem": 1
    }
  },
  "items":
  {
    "1":
    {
      "_id": 1,
      "postDate": "",
      "title": "iclicker",
      "price": "10,000",
      "condition": "Brand New",
      "conditionDescription": "Tech",
      "category": "Tech",
      "categoryDescription": "Tech",
      "photoRef": "img/iclicker.jpg",
      "sold": false,
      "sellerId": "1"
    },
    "2":
    {
      "_id": 2,
      "Title": "Craking The Code",
      "Price": "18.00",
      "Description": "Item 1 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book1.jpg",
      "SellerID": "1"
    },
    "3":
    {
      "_id": 3,
      "Title": "Introductions to Algorithms",
      "Price": "21.00",
      "Description": "Item 2 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book2.jpg",
      "SellerID": "1"
    },
    "4":
    {
      "_id": 4,
      "Title": "Artificial Intelligence",
      "Price": "25.00",
      "Description": "Item 3 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book3.jpg",
      "SellerID": "2"
    },
    "5":
    {
      "_id": 5,
      "Title": "The Rules of Love",
      "Price": "7.50",
      "Description": "Item 4 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book4.jpg",
      "SellerID": "2"
    },
    "6":
    {
      "_id": 6,
      "Title": "What I Wish I Knew When I was 20",
      "Price": "5.00",
      "Description": "Item 5 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book5.jpg",
      "SellerID": "2"
    },
    "7":
    {
      "_id": 7,
      "Title": "Unlock Your Educational Potental",
      "Price": "6.00",
      "Description": "Item 6 Description",
      "Condition": "Brand New",
      "Sold": false,
      "Category": "Textbooks",
      "photoRef": "img/book6.jpg",
      "SellerID": "2"
    }
  },

  "classes":
  {
    "1":
    {
      "_id": 1,
      "title": "CS 326",
      "description": "We teach you how to make facebook",
      "instructor": "Tim Richards, First of his name",
      "credits": "3",
      "term": "Spring 2017",
      "category": "Computer Science",
      "textbookList": [2,3,4],
      "techList": [1]
    },
    "2":
    {
      "_id": 2,
      "title": "CS Test",
      "description": "This is just a test",
      "instructor": "No Man",
      "credits": "6",
      "term": "Spring 2017",
      "category": "Abstract",
      "textbookList": [4,5,6],
      "techList": [1]
    }
  },
  "recomendedItems": [1,2,3,4,5,6,7,1,1]
};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

//Semple's great way of pulling an array from the database
export function getArray(collection) {
 // Clone the data. We do this to model a database, where you receive a
 // *copy* of an object and not the object itself.
 return JSONClone(data[collection]);
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */

export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */

export default class ResetDatabase extends React.Component {
  render() {
    return (
      <button htmlStyle= "display: inline-block" className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}


/*ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);*/