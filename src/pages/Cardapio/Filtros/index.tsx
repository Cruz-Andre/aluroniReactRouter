import React from 'react'
import filtros from './filtros.json'
import styles from './Filtros.module.scss'
import classNames from 'classnames'

type IOpcao = typeof filtros[0] //filtros[0] é o primeiro item do array de filtros.

// interface Opcao {
// 	id: number,
// 	label: string
// }

interface Props {
	filtro: number | null,
	setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {

	/** é preciso criar o tipo de cada opção (referente ao parametro da função selecionarFiltro) 
	 * há duas opções acima usando type ou interface */
	const selecionarFiltro = (opcao: IOpcao) => {
		if(filtro === opcao.id) return setFiltro(null)
		return setFiltro(opcao.id)
	}

	return (
		<div className={styles.filtros}>
			{filtros.map(opcao => (
				<button
					className={classNames({ 
						//assistir a aula fazendo os filtros funcionarem do módulo Ordenação e filtros!
						[styles.filtros__filtro]: true,
						[styles['filtros__filtro--ativo']]: filtro === opcao.id
					})}
					key={opcao.id}
					onClick={() => selecionarFiltro(opcao)}
				>
					{opcao.label}
				</button>
			))}
		</div>
	)
}