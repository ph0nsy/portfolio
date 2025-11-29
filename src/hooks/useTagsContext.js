import { createContext, useContext, useState, useCallback } from 'react';

const TagsContext = createContext(null);

export function TagsProvider({ children }) {
  const [tags, setTags] = useState([]);

  const addTag = useCallback((tag) => {
    setTags(prev => (prev.includes(tag) ? prev : [...prev, tag]));
  }, []);
  
  const deleteTag = useCallback((tagId) => {
    setTags(prev => prev.filter(t => t !== tagId));
  }, []);
  
  const removeAll = useCallback(() => {
    setTags([]);
  }, []);
  
  
  return (
    <TagsContext.Provider value={{ tags, addTag, deleteTag, removeAll }}>
      {children}
    </TagsContext.Provider>
  );
}

export function useTags() {
    const ctx = useContext(TagsContext);
    if (!ctx) {
        throw new Error("useTags must be used inside <TagsProvider>");
    }
    return ctx;
}
