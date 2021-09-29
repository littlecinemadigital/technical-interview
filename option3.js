// Using hooks, fetches data from fetchUrl
// When the component re-renders, it should not re-fetch the data.

const fetchUrl = 'http://httpbin.org/anything';

const Component = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(fetchUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <div>
      {/* Render the fetched data */}
      {data}
    </div>
  );
};
