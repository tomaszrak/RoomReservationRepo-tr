(function() {
  'use strict';

  angular
    .module('ui')
    .config(config);

  /** @ngInject */
  function config($logProvider, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    //$httpProvider.interceptors.push('authInterceptor');
  }

})();
