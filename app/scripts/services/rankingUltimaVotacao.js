'use strict';

dashApp.factory('RankingUltimaVotacao', function($http){
    return {
      get: function(){
        return $http.get('https://bluesoftmusicvotacao-api.herokuapp.com/api/rankingUltimaVotacao');            
      }
    }
  });