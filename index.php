<html ng-app="phoneApp">
    <head>
        <script src="lib/jquery-1.11.1.min.js"></script>
        <script src="lib/angular.js"></script>
        <!--<script src="lib/angular-cookies.min.js"></script>-->
        <script src="lib/angular-local-storage.min.js"></script>    
        <script src="js/controllers.js"></script>
    </head>
    <body ng-controller="PhoneListCtrl" data-ng-init="getData()">
        <button ng-click="doRefresh()" >
            Refresh
        </button> <a href="#" onclick="location.reload();">Reload Page</a>
        <h3>Phones</h3>
        <ul>
            <li ng-repeat="phone in phones">
                <b> {{phone.name}}</b>
                <p>{{phone.description}}</p>
            </li>
        </ul>
        <i>No. of phones : </i><b>{{phones.length}}</b>
        <br/>
  <br/>
        <i>Time Taken to Load Data :</i><b> {{ResponseTime}} ms</b>
    </body>
</html>