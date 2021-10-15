export default function (searchQuery) {
  return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.status);
    })
    .catch(error => alert(error));
}
