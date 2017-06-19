(function(){
    var app = angular.module('gemStore', ['store-directives']);
    
    app.controller('StoreController', function(){
        this.product = gem;
        this.products = gems;
    });
    
    var gem = {
        name: 'Azurite',
        price: 2.95,
        canPurchase: false,
        soldOut: true
    };
    
    /*app.controller('TabController', function(){
        this.tab = 1;
        
        this.setTab = function(setTab){
            this.tab = setTab;
        };
        
        this.isSet = function(setTab){
            return this.tab === setTab;
        }
    });*/
    
    app.directive("productTabs", function(){
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function(){
                this.tab = 1;
        
                this.setTab = function(setTab){
                    this.tab = setTab;
                };

                this.isSet = function(setTab){
                    return this.tab === setTab;
                }
            },
            controllerAs: 'tab'
        };
    });
    
    /*app.controller('GalleryController', function(){
        this.current = 0;
        
        this.setCurrent = function(setCurrent){
            if(setCurrent !== null){
                this.current = setCurrent;
            }
            else{
                this.current = 0;
            }
        };
    });*/
    
    app.directive("productGallery", function(){
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function(){
                this.current = 0;
        
                this.setCurrent = function(setCurrent){
                    if(setCurrent !== null){
                        this.current = setCurrent;
                    }
                    else{
                        this.current = 0;
                    }
                };
            },
            controllerAs: 'gallery'
        };
    });
    
    app.controller('ReviewController', function(){
        this.review = {};
        
        this.addReview = function(product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    
    var gems = [
        { 
            name: 'Bloodstone',
            description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            shine: 9,
            price: 22.90,
            rarity: 6,
            color: '#EEE',
            faces: 12,
            images: [
                "images/gem-01.gif",
                "images/gem-03.gif",
                "images/gem-04.gif"
            ],
            reviews: [
                {
                    stars: 3,
                    body: "I think this gem was just OK, could honestly use more shine, IMO.",
                    author: "JimmyDean@example.org",
                    createdOn: 1397490980837
                }, {
                    stars: 4,
                    body: "Any gem with 12 faces is for me!",
                    author: "gemsRock@example.org",
                    createdOn: 1397490980837
                }
            ]
        }, 
        {
            name: 'Zircon',
            description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
            shine: 70,
            price: 1100,
            rarity: 2,
            color: '#000',
            faces: 6,
            images: [
                "images/gem-06.gif",
                "images/gem-07.gif",
                "images/gem-10.gif"
            ],
            reviews: [
                {
                    stars: 1,
                    body: "This gem is WAY too expensive for its rarity value.",
                    author: "turtleguyy@example.org",
                    createdOn: 1397490980837
                }, {
                    stars: 1,
                    body: "BBW: High Shine != High Quality.",
                    author: "LouisW407@example.org",
                    createdOn: 1397490980837
                }, {
                    stars: 1,
                    body: "Don't waste your rubles!",
                    author: "nat@example.org",
                    createdOn: 1397490980837
                }
            ]
        }
    ];
})();