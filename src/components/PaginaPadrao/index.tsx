import { Outlet } from 'react-router-dom'
import styles from './PaginaPadrao.module.scss'
import stylesTema from 'styles/Tema.module.scss'

export default function PaginaPadrao() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
					A casa do código e da massa
				</div>
			</header>
			<div className={stylesTema.container}>
				{ /** Outlet é o children do react router dom.
				 *  é aqui onde vai aparecer o <Inicio /> e <Cardapio /> */}
				<Outlet /> 
			</div>
		</>
	)
}