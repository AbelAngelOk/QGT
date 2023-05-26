import './listReports.css';
import section from './contentsReportListSection.json';
import lsReports from './listReports.json';

const listReports = () => {

    const getListReports = () => {
        return (
            lsReports.map( (report, key) => {
                return(
                    <li  key={key} className="listReports--row">
                        <ul className="listReports--row--inner">
                            <li className="field">{report.año}</li>
                            <li className="field">{report.periodo}</li>
                            <li className="fieldLarge">{report.nombre}</li>
                            <li className="field"><a href={report.urlInforme}>descargar</a></li>
                        </ul>
                    </li> 
                )
            }
        ))
    };

    return (
        <section className="listReports">
            <ul className="listReports--table">
                <li className="listReports--titleCols"> 
                    <ul className="listReports--titleCols--inner">
                        <li className="field">{section.titleColumn01}</li>
                        <li className="field">{section.titleColumn02}</li>
                        <li className="fieldLarge">{section.titleColumn03}</li>
                        <li className="field">{section.titleColumn04}</li>
                    </ul>
                </li>
                {getListReports()}
            </ul>
        </section>
    )
};

export default listReports;