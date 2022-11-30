import Footer from 'components/Footer'
import Menu from 'components/Menu/Index'
import PaginaPadrao from 'components/PaginaPadrao'
import Cardapio from 'pages/Cardapio'
import Inicio from 'pages/Inicio'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'
import Sobre from 'pages/Sobre'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Menu />
				<Routes>

					{/* Nested Routes, que é uma rota dentro da outra */}
					<Route path='/' element={<PaginaPadrao />}>
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
						<Route path='sobre' element={<Sobre />} />
					</Route>
					{/* Nested Routes, que é uma rota dentro da outra */}

					<Route path='prato/:id' element={<Prato />} />
				
					{/** O asterisco é qualquer outro path que não existe  */}
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}