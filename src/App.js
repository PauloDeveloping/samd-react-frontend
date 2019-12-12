import React from 'react'

import { BrowserRouter, Switch } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import './App.css'

function App() {
  return (
	<BrowserRouter>
		<Switch>

			<MainRoutes />

		</Switch>
		
	</BrowserRouter>
  );
}
export default App;
