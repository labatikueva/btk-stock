import angular from 'angular';

import './components/components';
import './btk-components/btk-components';

function requireAll(dependency) {
  dependency.keys().forEach(dependency);
}

requireAll(require.context('../views', true, /\.html$/));

angular.module('btk', []);

requireAll(require.context('./btk', true, /\.js$/));