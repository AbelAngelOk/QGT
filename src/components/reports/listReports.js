import './listReports.css';

const listReports = () => {
    return (
        <section className="listReports">
            <ul className="listReports--table">
                <li className="listReports--titleCols"> 
                    <ul className="listReports--titleCols--inner">
                        <li className="field">Año</li>
                        <li className="field">Trimestre</li>
                        <li className="field">Nombre</li>
                        <li className="field">detalle</li>
                    </ul>
                </li>
                <li className="listReports--row">
                    <ul className="listReports--row--inner">
                        <li className="field">2023</li>
                        <li className="field">Q1</li>
                        <li className="field">Informe de periodo de Enero-Marzo</li>
                        <li className="field">descargar</li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default listReports;