(function(){
    var app = angular.module('gemStore', ['store-directives']);
    
    app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.products = [];
        store.product = {
            name: 'Azurite',
            price: 2.95,
            canPurchase: false,
            soldOut: false
        };
        
        $http.get('./store-products.json').then(function(response){
            store.products = response.data;
        });
    }]);
    
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
    
})();