import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../context/state';
import DefaultLayout from '../../components/DefaultLayout';
import Summary from '../../components/Summary';
import Content from '../../components/Content'
import api from '../../services/api'

function Home() {
  const [servers, setServers] = useState([])
  const [, dispatch] = useStateValue()
  const [currentServer, setCurrentServer] = useState([])

  function handleChange(target, id, memoryProvisioned, cpuProvisioned, totalDiskGB) {
    
    !target
      ? setCurrentServer(currentServer.filter((item) => item.idServ !== id))
      : setCurrentServer([...currentServer,
      {
        idServ: id,
        memory: memoryProvisioned,
        CPUs: cpuProvisioned,
        totalDisk: totalDiskGB
      }
      ]);
  };

  const fetchApi = () => {
    api.get('/servers')
      .then(res => {
        setServers(res.data)
      })
      .catch((err) => {
        console.log(err)
        alert("Não foi possível carregar os dados");
      })
  }

  useEffect(() => {
    fetchApi()
  }, [])

  useEffect(() => {
    dispatch({ type: 'Servers', payload: currentServer })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentServer])

  return (
    <DefaultLayout>
      <Summary />
      <Content data={servers} onChange={handleChange} />
    </DefaultLayout>
  );
}

export default Home;