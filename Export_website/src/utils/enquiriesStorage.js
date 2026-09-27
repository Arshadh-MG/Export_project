const STORAGE_KEY = 'panir_thuli_enquiries_list';

export const getEnquiries = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to read enquiries from localStorage', error);
    return [];
  }
};

export const saveEnquiry = (enquiryData) => {
  try {
    const current = getEnquiries();
    const newEnquiry = {
      id: `ENQ-${Date.now()}`,
      timestamp: new Date().toISOString(),
      dateFormatted: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'New',
      ...enquiryData
    };
    const updated = [newEnquiry, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newEnquiry;
  } catch (error) {
    console.error('Failed to save enquiry to localStorage', error);
    return null;
  }
};

export const deleteEnquiry = (id) => {
  try {
    const current = getEnquiries();
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Failed to delete enquiry', error);
    return getEnquiries();
  }
};

export const clearAllEnquiries = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  } catch (error) {
    console.error('Failed to clear enquiries', error);
    return [];
  }
};
