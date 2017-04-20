//namespace TestieApp {

//    angular.module('TestieApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
//        $stateProvider: ng.ui.IStateProvider,
//        $urlRouterProvider: ng.ui.IUrlRouterProvider,
//        $locationProvider: ng.ILocationProvider
//    ) => {
//        // Define routes
//        $stateProvider
//            .state('home', {
//                url: '/',
//                templateUrl: '/ngApp/views/home.html',
//                controller: TestieApp.Controllers.HomeController,
//                controllerAs: 'controller'
//            })
//            .state('secret', {
//                url: '/secret',
//                templateUrl: '/ngApp/views/secret.html',
//                controller: TestieApp.Controllers.SecretController,
//                controllerAs: 'controller'
//            })
//            .state('login', {
//                url: '/login',
//                templateUrl: '/ngApp/views/login.html',
//                controller: TestieApp.Controllers.LoginController,
//                controllerAs: 'controller'
//            })
//            .state('register', {
//                url: '/register',
//                templateUrl: '/ngApp/views/register.html',
//                controller: TestieApp.Controllers.RegisterController,
//                controllerAs: 'controller'
//            })
//            .state('externalRegister', {
//                url: '/externalRegister',
//                templateUrl: '/ngApp/views/externalRegister.html',
//                controller: TestieApp.Controllers.ExternalRegisterController,
//                controllerAs: 'controller'
//            }) 
//            .state('about', {
//                url: '/about',
//                templateUrl: '/ngApp/views/about.html',
//                controller: TestieApp.Controllers.AboutController,
//                controllerAs: 'controller'
//            })
//            .state('notFound', {
//                url: '/notFound',
//                templateUrl: '/ngApp/views/notFound.html'
//            });

//        // Handle request for non-existent route
//        $urlRouterProvider.otherwise('/notFound');

//        // Enable HTML5 navigation
//        $locationProvider.html5Mode(true);
//    });

    
//    angular.module('TestieApp').factory('authInterceptor', (
//        $q: ng.IQService,
//        $window: ng.IWindowService,
//        $location: ng.ILocationService
//    ) =>
//        ({
//            request: function (config) {
//                config.headers = config.headers || {};
//                config.headers['X-Requested-With'] = 'XMLHttpRequest';
//                return config;
//            },
//            responseError: function (rejection) {
//                if (rejection.status === 401 || rejection.status === 403) {
//                    $location.path('/login');
//                }
//                return $q.reject(rejection);
//            }
//        })
//    );

//    angular.module('TestieApp').config(function ($httpProvider) {
//        $httpProvider.interceptors.push('authInterceptor');
//    });

    

//}

namespace TestieApp {

    angular.module('TestieApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: TestieApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: TestieApp.Controllers.SecretController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: TestieApp.Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: TestieApp.Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: TestieApp.Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: TestieApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/ngApp/views/contact.html',
                controller: TestieApp.Controllers.ContactController,
                controllerAs: 'controller'
            })
            .state('apply', {
                url: '/apply',
                templateUrl: '/ngApp/views/apply.html',
                controller: TestieApp.Controllers.ApplyController,
                controllerAs: 'controller',
                data: {
                    requiresAuthentication: true
                }
            })
            .state('manage', {
                url: '/manage',
                templateUrl: '/ngApp/views/manage.html',
                controller: TestieApp.Controllers.ManageController,
                controllerAs: 'controller',
                data: {
                    requiresAuthentication: true
                }
            })
            .state('delete', {
                url: '/delete/:id',
                templateUrl: '/ngApp/views/delete.html',
                controller: TestieApp.Controllers.ManageDeleteController,
                controllerAs: 'controller',
                data: {
                    requiresAuthentication: true
                }
            })
            .state('edit', {
                url: '/edit/:id',
                templateUrl: '/ngApp/views/edit.html',
                controller: TestieApp.Controllers.ManageEditController,
                controllerAs: 'controller',
                data: {
                    requiresAuthentication: true
                }
            })
            .state('details', {
                url: '/details/:id',
                templateUrl: '/ngApp/views/details.html',
                controller: TestieApp.Controllers.PlayerDetailController,
                controllerAs: 'controller',
                data: {
                    requiresAuthentication: true
                }
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '/ngApp/views/signup.html',
                controller: TestieApp.Controllers.SignupController,
                controllerAs: 'controller'

            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });


    angular.module('TestieApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('TestieApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });



    angular.module('TestieApp').run((
        $rootScope: ng.IRootScopeService,
        $state: ng.ui.IStateService,
        accountService: TestieApp.Services.AccountService
    ) => {
        $rootScope.$on('$stateChangeStart', (e, to) => {
            // protect non-public views
            if (to.data && to.data.requiresAuthentication) {
                if (!accountService.isLoggedIn()) {
                    e.preventDefault();
                    $state.go('login');
                }
            }
        });
    });

}

