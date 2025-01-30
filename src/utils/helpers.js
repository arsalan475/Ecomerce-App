

const getDataById = (data,id) => data.filter(data => data.id === id);
const getAllData = (data) => data.filter(data => data);
const getAllIdsOnly = (data) => data.filter(data => data.id);




export {getDataById,getAllData,getAllIdsOnly}