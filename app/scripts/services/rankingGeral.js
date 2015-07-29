'use strict';

dashApp.factory('RankingGeral', function($http){
    return {
      get: function(){
        return $http.get('https://bluesoftmusicvotacao-api.herokuapp.com/api/rankingVotacao');            
      }
    }
  });