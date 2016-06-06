import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app',[uiRouter]);

app.config(($stateProvider,$urlRouterProvider,$locationProvider) =>{
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('Login' , {
			url: '/',
			template: require('Authentication/Login.html')
		})
		.state('Register' , {
			url: '/Register',
			template: require('Authentication/Register.html')
		});
	$locationProvider.html5Mode(true);

});

export default app;