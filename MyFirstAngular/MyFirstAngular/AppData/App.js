var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when("/Books", {
        templateUrl: "partials/Book-list.html",
        controller: "BookList"
    })
    .when("/kart",{
        templateUrl: "partials/kart-list.html",
        controller:"kartList"
    })
    .otherwise({

        redirectTo: "/Books"

    });
    
});
myApp.factory("Kartservice", function () {
    var kart = [];
    return {
        getkart: function () {
            if (kart.length == 0) {
                alert("Kart is Empty,  Please Add Some Item In Kart")
                
            }
            else
            return kart;
        },
        addTokart: function (Book) {
            kart.push(Book);
            alert("Thanks For "+Book.name+" Add to cart");

        },
        Buy: function (Book) {
            alert("Thanks For Buying:"+ Book.name);
            
        }
    }

});

myApp.factory("Bookservice", function () {
    var Books = [
     {
         imgurl: "hg.jpg",
         name: "Half GirlFriend",
         Price: 500,
         rating: 4,
         binding: "Paperback",
         Publisher: "Chetan Bhagat",
         Release: "12-10-2012",
         details: "Half Girlfriend is an Indian English coming of age, young adult romance novel by Indian author Chetan Bhagat"
     },
         {
             imgurl: "oig.jpg",
             name: "One Indian Girl",
             Price: 700,
             rating: 5,
             binding: "Paperback",
             Publisher: "Chetan Bhagat",
             Release: "29-08-2015",
             details: "One Indian Girl is the seventh fictional novel and the ninth overall book written by the Indian author Chetan Bhagat"
         },
          {
              imgurl: "moml.jpg",
              name: "The 3 Mistakes Of My Life",
              Price: 400,
              rating: 5,
              binding: "Paperback",
              Publisher: "Chetan Bhagat",
              Release: "09-11-2014",
              details: "The 3 Mistakes of My Life is the third novel written by Chetan Bhagat. The book was published in May 2008 and had an initial print-run of 420,000"
          }

    ];
    return {
        getBooks: function () {
            return Books;

        },
        addTokart: function (Book) {

    }
    }

});

myApp.controller("kartList", function ($scope, Kartservice) {
    $scope.kart = Kartservice.getkart();
    $scope.Buy = function (Book) {
        Kartservice.Buy(Book);
    }

});

myApp.controller("headerCtrl", function ($scope, $location) {
    $scope.appDetail = {};
    $scope.appDetail.title = "BookKart";
    $scope.appDetail.tagline = "We Have 1 Million books for you";
    $scope.nav = {};
    $scope.nav.isActive = function (path) {
        if (path === $location.path()) {
            return true;
        }
        return false;

    }

});

myApp.controller("BookList", function ($scope, Bookservice, Kartservice) {

    $scope.Books = Bookservice.getBooks();
    $scope.addTokart = function (Book) {
        Kartservice.addTokart(Book);
    }
});
