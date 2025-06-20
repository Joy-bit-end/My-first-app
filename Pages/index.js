import { useState } from 'react'; import { Button } from '@/components/ui/button'; import { Card, CardContent } from '@/components/ui/card'; import Image from 'next/image';

const sampleServers = [ { id: 1, name: 'Survival Base', status: 'Online' }, { id: 2, name: 'Creative Lab', status: 'Offline' }, ];

export default function Home() { const [servers, setServers] = useState(sampleServers);

const toggleStatus = (id) => { setServers(servers.map(server => server.id === id ? { ...server, status: server.status === 'Online' ? 'Offline' : 'Online' } : server )); };

const createBackup = (id) => { alert(`Backup created for server ${id}`); };const restoreBackup = (id) => { alert(`Backup restored for server ${id}`); };

const addServer = () => {
  const newServer = {
    id: Date.now(),
    name: `New Server ${servers.length + 1}`,
    status: 'Offline',
  };
  setServers([...servers, newServer]);
};

return ( <div className="min-h-screen bg-black text-white p-6"> <h1 className="text-4xl font-bold mb-6">BlockBase Control Panel</h1> <Button onClick={addServer} className="mb-6 bg-green-700">Add New Server</Button> <div className="grid gap-4 grid-cols-1 md:grid-cols-2"> {servers.map(server => ( <Card key={server.id} className="bg-gray-900 text-white"> <CardContent className="p-4 space-y-3"> <div className="flex items-center gap-3"> <Image src="/server-icon.png" alt="Server Icon" width={32} height={32} /> <h2 className="text-xl font-semibold">{server.name}</h2> </div> <p>Status: <span className={server.status === 'Online' ? 'text-green-400' : 'text-red-400'}>{server.status}</span></p> <div className="flex gap-2"> <Button onClick={() => toggleStatus(server.id)} className="bg-blue-700"> {server.status === 'Online' ? 'Stop' : 'Start'} </Button> <Button onClick={() => createBackup(server.id)} className="bg-yellow-600">Backup</Button> <Button onClick={() => restoreBackup(server.id)} className="bg-purple-700">Restore</Button> </div> </CardContent> </Card> ))} </div> </div> ); }

