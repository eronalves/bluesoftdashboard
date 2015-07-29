'use strict';

/**
 * @ngdoc function
 * @name bluesoftdashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluesoftdashboardApp
 */

 dashApp.controller('MainCtrl', function ($rootScope, $scope, $route, RankingUltimaVotacao, RankingGeral, PollerScheduler) {        
    RankingUltimaVotacao.get().then(function(resp){ 
        $scope.rankingUltimaVotacao = resp.data.votacao; 
        $scope.rankingUltimaVotacao.votos = resp.data.votos;
    });

    RankingGeral.get().then(function(resp){ 
        $scope.rankingGeral = resp.data;         
    });                           
     
    $scope.refresh = function(){                
        $route.reload();      
     };
             
    if(!$rootScope.jobAdded){                       
        var interval = moment.duration({seconds: 30});
        var timeout = moment.duration({seconds:25});
        PollerScheduler.addJob({
            name: 'refreshRank',
            priority: 1,
            interval: interval,
            timeout: timeout,
            run: $scope.refresh
        });
        PollerScheduler.start();
        
        $rootScope.jobAdded = true;
    }
  });
