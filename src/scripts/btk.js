import 'angular';
import "@uirouter/angularjs"

import './components/components';
import './btk-components/btk-components';

function requireAll(dependency) {
  dependency.keys().forEach(dependency);
}

requireAll(require.context('./domain', true, /\.html$/));

angular.module('btk', [
  'ui.router'
]);

requireAll(require.context('./domain', true, /\.js$/));