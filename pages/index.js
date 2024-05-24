import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import Sidebar from '../components/Sidebar';
import ClientCard from '../components/ClientCard';
import Modal from '../components/Modal';

const initialClients = [
  { id: '1', name: 'Anagrama', projects: 33, hours: 365, progress: 33 },
  { id: '2', name: 'Adidas', projects: 35, hours: 423, progress: 23 },
  { id: '3', name: 'AXA', projects: 47, hours: 523, progress: 45 },
  { id: '4', name: 'American Express', projects: 36, hours: 421, progress: 45 },
  { id: '5', name: 'Argo', projects: 27, hours: 324, progress: 8 },
  { id: '6', name: 'Awsmd', projects: 28, hours: 24, progress: 8 },
  { id: '7', name: 'Bang and Olufsen', projects: 16, hours: 175, progress: 42 },
  { id: '8', name: 'Balkan Brothers', projects: 18, hours: 129, progress: 12 },
];

const Home = () => {
  const [clients, setClients] = useState(initialClients);
  const [selectedClient, setSelectedClient] = useState(null);
  const [newClient, setNewClient] = useState({ name: '', projects: 0, hours: 0, progress: 0 });

  const handleCardClick = (client) => {
    setSelectedClient(client);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
  };

  const handleAddClient = () => {
    setClients([
      ...clients, 
      { 
        id: (clients.length + 1).toString(), 
        ...newClient 
      }
    ]);
    setNewClient({ name: '', projects: 0, hours: 0, progress: 0 });
  };

  const handleDeleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(clients);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setClients(items);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Clients</h1>
        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Name" 
            value={newClient.name} 
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })} 
            className="p-2 border border-gray-300 rounded mr-2"
          />
          <input 
            type="number" 
            placeholder="Projects" 
            value={newClient.projects} 
            onChange={(e) => setNewClient({ ...newClient, projects: +e.target.value })} 
            className="p-2 border border-gray-300 rounded mr-2"
          />
          <input 
            type="number" 
            placeholder="Hours" 
            value={newClient.hours} 
            onChange={(e) => setNewClient({ ...newClient, hours: +e.target.value })} 
            className="p-2 border border-gray-300 rounded mr-2"
          />
          <input 
            type="number" 
            placeholder="Progress" 
            value={newClient.progress} 
            onChange={(e) => setNewClient({ ...newClient, progress: +e.target.value })} 
            className="p-2 border border-gray-300 rounded mr-2"
          />
          <button 
            onClick={handleAddClient} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Client
          </button>
        </div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="clients">
            {(provided) => (
              <div 
                className="grid grid-cols-3 gap-6"
                {...provided.droppableProps} 
                ref={provided.innerRef}
              >
                {clients.map((client, index) => (
                  <Draggable key={client.id} draggableId={client.id} index={index}>
                    {(provided) => (
                      <div 
                        ref={provided.innerRef} 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}
                      >
                        <ClientCard 
                          key={client.id} 
                          client={client} 
                          onClick={handleCardClick} 
                          onDelete={handleDeleteClient} 
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </main>
      <Modal 
        isOpen={selectedClient !== null} 
        onClose={handleCloseModal} 
        client={selectedClient || {}} 
      />
    </div>
  );
};

export default Home;
