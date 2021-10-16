import { useStateValue } from '../../context/state';
import './styles.css';

function Summary() {
  const [state] = useStateValue({})
  const { servers } = state

  let memory = servers?.map((item) => item.memory)
  .reduce((soma, subtotal) => subtotal + soma, 0)

  let CPUs = servers?.map((item) => item.CPUs)
  .reduce((soma, subtotal) => subtotal + soma, 0)

  let totalDisk = servers?.map((item) => item.totalDisk)
  .reduce((soma, subtotal) => subtotal + soma, 0)


  return (
      <div className="summary">
        <h3 className="summary-label">Sumário dos recursos dos servidores</h3>
        <div className="summary-data">
          <div className="summary-itens">
            <h4 className="summary-item-1">Servidores Selecionados</h4>
            <h4 className="summary-item-2"> {servers?.length} servidores selecionados</h4>
          </div>
          <div className="summary-itens">
            <h4 className="summary-item-1">Total de Memória</h4>
            <h4 className="summary-item-2"> {memory} GB</h4>
          </div>
          <div className="summary-itens">
            <h4 className="summary-item-1">Total de CPUs</h4>
            <h4 className="summary-item-2"> {CPUs} vCPUs</h4>
          </div>
          <div className="summary-itens">
            <h4 className="summary-item-1">Total de Discos</h4>
            <h4 className="summary-item-2"> {totalDisk} GB</h4>
          </div>
        </div>
      </div>
  );
}

export default Summary;