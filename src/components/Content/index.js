import './styles.css';

function Content({ data, onChange }) {

    function currentValue(id) {
        return data.find(
            (serv) => serv === parseInt(id)
        )
    }

    return (
        <div className="content">
            <h3 className="content-label">Tabela de servidores</h3>
            <table>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Hostname</th>
                        <th>Memória</th>
                        <th>vCPUs</th>
                        <th>Disco</th>
                        <th>IP</th>
                    </tr>
                </thead>

                {data.map((item) => {
                    return (
                        <tbody key={item.id_vm}>
                            <tr className="data-rows" >
                                <td className="check-column">
                                    <input 
                                    className="checkbox"
                                    type="checkbox" 
                                    id={item.id_vm} 
                                    name="servers" 
                                    checked={currentValue(item.id_vm)}
                                    onChange={(event) => onChange(
                                        event.target.checked, 
                                        item.id_vm,
                                        item.configuracao.memoryProvisioned,
                                        item.configuracao.cpuProvisioned,
                                        item.configuracao.totalDiskGB
                                        )} 
                                    />
                                    <label htmlFor={item.id_vm}></label>
                                </td>
                                <td>{item.hostname}</td>
                                <td>{item.configuracao.memoryProvisioned} GB</td>
                                <td>{item.configuracao.cpuProvisioned} vCPUs</td>
                                <td>{item.configuracao.totalDiskGB} GB</td>
                                <td>{item.ip}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
}

export default Content;