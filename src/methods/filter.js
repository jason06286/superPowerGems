export function currency(num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
export function formatDate(time) {
  const year = new Date(time * 1000).getFullYear();
  const month = new Date(time * 1000).getMonth() + 1;
  const date = new Date(time * 1000).getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;
}
