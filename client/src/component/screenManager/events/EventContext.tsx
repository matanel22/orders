// EventContext.tsx
import React, { createContext, useContext, ReactNode, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { EventProper } from '../loction';


interface EventContextType {
  handleLineChange: (_id: string, obj: object) => void;
  handleDelete: (id: string) => void;
  handleAddLine: (newName: string) => void;
  saveOriginalState: () => void;
  cancelChanges: () => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: ReactNode, options: EventProper[], setOptions: Dispatch<SetStateAction<EventProper[]>> }> = ({ children, options, setOptions }) => {
  const [originalOptions, setOriginalOptions] = useState<EventProper[]>([]);

  const handleLineChange = (_id: string, obj: object) => {
    const updatedOptions = options.map((opt) => {
      if (opt.id === _id) {
        return { ...opt, ...obj };
      }
      return opt;
    });
    setOptions(updatedOptions);
  };

  const handleDelete = (id: string) => {
    const delRow = options.filter((row) => {
      return row.id !== id;
    });
    setOptions(delRow);
  };

  const handleAddLine = (newName: string) => {
    const uniqueId = `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const newObj = { name: newName, id: uniqueId, comments: '' };
    setOptions((prev) => [...prev, newObj]);
  };
  const saveOriginalState = () => {
    setOriginalOptions([...options]);
  };



  const cancelChanges = () => {
    setOptions([...originalOptions]);
  };
  return (
    <EventContext.Provider value={{ handleLineChange, handleDelete, handleAddLine,saveOriginalState,cancelChanges }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  
  
  return context;
};
