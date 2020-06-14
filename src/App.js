import React from "react";
import Pregunta from "./components/Pregunta";

function App() {
	return (
		<React.Fragment>
			<div className="container">
				<header>
          <h1>Gasto Semanal - Alexis</h1>
          
          <div className='contenido-principal contenido'>
            <Pregunta/>
          </div>
				</header>
			</div>
		</React.Fragment>
	);
}

export default App;
