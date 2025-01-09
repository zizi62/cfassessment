export const getDate = (dateString: string)=>{
  const date = new Date(dateString);
  const month = date.toLocaleString("en-US", { month: "short" })
  const day = date.getDate(); 
  const hour = date.getHours();

  return `${month}-${day} ${hour}h-00m`; 
}