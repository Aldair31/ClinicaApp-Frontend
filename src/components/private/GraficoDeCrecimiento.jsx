import React from 'react'
import useCita from '../../hooks/useCita';
import '../../sass/Dashboard.sass';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

const GraficoDeCrecimiento = () => {
	let [datos_af, loading, set_datos_af] = useCita();
	const { id } = useParams();
	return (
		<div>
			<div className="datos_filiacion">
				{datos_af.map((item) => {
					console.log("**")
					console.log(item)
					return (
						<>
							{item.id_Historia===id?  (
								<div key={item._id} className="cita">
									<div className="dato_filiacion" key={item._id}>
										
									{item.sexo === 1 ? (
										<p>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad 
											</Link>
										</p>
									) : null}
									{item.sexo === 2 ? (
										<p>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad 
											</Link>
										</p>
									) : null}
									</div>
								</div>
							) : null}
						</>
					);
				})}	
			</div>
		</div>
	)
}

export default GraficoDeCrecimiento
